import logging
import os
from dataclasses import asdict
from typing import List
from typing import Optional
from typing import Union

import pytorch_lightning as pl
from allennlp.common import Params
from allennlp.data import PyTorchDataLoader
from allennlp.data.samplers import BucketBatchSampler
from allennlp.training.optimizers import Optimizer
from pytorch_lightning import Callback
from pytorch_lightning.loggers import CSVLogger
from pytorch_lightning.loggers import LightningLoggerBase
from pytorch_lightning.loggers import TensorBoardLogger
from pytorch_lightning.loggers import WandbLogger
from torch.utils.data import IterableDataset

from biome.text.configuration import LightningTrainerConfiguration
from biome.text.configuration import VocabularyConfiguration
from biome.text.dataset import Dataset
from biome.text.dataset import InstanceDataset
from biome.text.pipeline import Pipeline

# We do not require wandb
_HAS_WANDB = False
try:
    import wandb
except ImportError:
    pass
else:
    wandb.ensure_configured()
    _HAS_WANDB = True


_LOGGER = logging.getLogger(__name__)


class Trainer:
    """A class for training a `biome.text.Pipeline`.

    It is basically a light wrapper around the awesome Pytorch Lightning Trainer to facilitate the interaction
    with our pipelines.

    Parameters
    ----------
    pipeline
        Pipeline to train
    train_dataset
        The training dataset
    valid_dataset
        The validation dataset. Default: `None`.
    trainer_config
        The configuration of the trainer. Default: `LightningTrainerConfiguration()`.
    vocab_config
        A `VocabularyConfiguration` to create/extend the pipeline's vocabulary.
        If `"default"` (str), we will use the default configuration `VocabularyConfiguration()`.
        If None, we will leave the pipeline's vocabulary untouched. Default: `"default"`.
    lazy
        If True, instances are lazily loaded from disk, otherwise they are loaded into memory. Default: False.
    """

    def __init__(
        self,
        pipeline: Pipeline,
        train_dataset: Dataset,
        valid_dataset: Optional[Dataset] = None,
        trainer_config: Optional[LightningTrainerConfiguration] = None,
        vocab_config: Optional[Union[str, VocabularyConfiguration]] = "default",
        lazy: bool = False,
    ):
        self._pipeline = pipeline
        self._train_dataset = train_dataset
        self._valid_dataset = valid_dataset
        # since we will make changes to the config, better to make a copy -> asdict returns a deep copy
        self._trainer_config = (
            LightningTrainerConfiguration(**asdict(trainer_config))
            if trainer_config is not None
            else LightningTrainerConfiguration()
        )
        self._vocab_config: Optional[VocabularyConfiguration] = (
            VocabularyConfiguration() if vocab_config == "default" else vocab_config
        )
        self._lazy = lazy

        # the wandb logger holds a special place in our heart
        self._wandb_logger: Optional[WandbLogger] = None

        if self._trainer_config.logger is not False:
            self._trainer_config.logger = self._add_default_loggers()

        non_lightning_kwargs = [
            "add_csv_logger",
            "add_tensorboard_logger",
            "add_wandb_logger",
            "batch_size",
            "batch_size",
            "data_bucketing",
            "optimizer",
        ]
        self.trainer = pl.Trainer(
            **{
                key: value
                for key, value in asdict(self._trainer_config).items()
                if key not in non_lightning_kwargs
            }
        )

    def _add_default_loggers(self) -> List[LightningLoggerBase]:
        """Adds default loggers for the lightning trainer"""
        loggers = self._trainer_config.logger
        if loggers is True:
            loggers = []
        elif isinstance(loggers, LightningLoggerBase):
            loggers = [loggers]

        def loggers_include(logger_type) -> bool:
            return any([isinstance(logger, logger_type) for logger in loggers])

        if self._trainer_config.add_csv_logger and not loggers_include(CSVLogger):
            loggers.append(
                CSVLogger(
                    save_dir=self._trainer_config.default_root_dir or os.getcwd(),
                    name="csv",
                )
            )
        if self._trainer_config.add_tensorboard_logger and not loggers_include(
            TensorBoardLogger
        ):
            loggers.append(
                TensorBoardLogger(
                    save_dir=self._trainer_config.default_root_dir,
                    name="tensorboard",
                )
            )
        if (
            self._trainer_config.add_wandb_logger
            and _HAS_WANDB
            and not loggers_include(WandbLogger)
        ):
            self._wandb_logger = WandbLogger(
                save_dir=self._trainer_config.default_root_dir, project="biome"
            )
            loggers.append(self._wandb_logger)
        elif loggers_include(WandbLogger):
            self._wandb_logger = [
                logger for logger in loggers if isinstance(logger, WandbLogger)
            ][0]
        # somehow the wandb dir does not get created, i think this is a bug on pl side, have to check it out
        if self._wandb_logger is not None and not os.path.isdir(
            os.path.join(self._wandb_logger.save_dir, "wandb")
        ):
            os.makedirs(os.path.join(self._wandb_logger.save_dir, "wandb"))

        return loggers

    def fit(self):
        """Train the pipeline"""
        # create instances
        train_instances = self._train_dataset.to_instances(
            self._pipeline, lazy=self._lazy
        )
        valid_instances = (
            None
            if self._valid_dataset is None
            else self._valid_dataset.to_instances(self._pipeline, lazy=self._lazy)
        )

        # create vocab
        vocab_config = (
            VocabularyConfiguration()
            if self._vocab_config == "default"
            else self._vocab_config
        )
        if vocab_config is not None:
            vocab_datasets = [train_instances]
            if valid_instances is not None and self._vocab_config.include_valid_data:
                vocab_datasets += [valid_instances]
            self._pipeline.create_vocab(vocab_datasets, config=vocab_config)

        # create dataloaders
        train_dataloader = create_dataloader(
            train_instances,
            batch_size=self._trainer_config.batch_size,
            data_bucketing=self._trainer_config.data_bucketing,
        )
        valid_dataloader = (
            create_dataloader(
                self._valid_dataset.to_instances(self._pipeline, lazy=self._lazy),
                batch_size=self._trainer_config.batch_size,
                data_bucketing=self._trainer_config.data_bucketing,
            )
            if self._valid_dataset is not None
            else None
        )

        # create optimizer
        self._pipeline.model.optimizer = Optimizer.from_params(
            Params(
                {
                    "model_parameters": self._pipeline.model.named_parameters(),
                    **self._trainer_config.optimizer,
                }
            )
        )

        # log config to wandb
        if self._wandb_logger is not None:
            config = {
                "pipeline": self._pipeline.config.as_dict(),
                "trainer": asdict(self._trainer_config),
            }
            self._wandb_logger.experiment.config.update(config)

        self.trainer.fit(
            self._pipeline.model,
            train_dataloader=train_dataloader,
            val_dataloaders=valid_dataloader,
        )


def create_dataloader(
    instance_dataset: InstanceDataset,
    batch_size: int = 16,
    data_bucketing: bool = False,
) -> PyTorchDataLoader:
    """Returns a pytorch DataLoader for AllenNLP instances

    Parameters
    ----------
    instance_dataset
        The dataset of instances for the DataLoader
    batch_size
        Batch size
    data_bucketing
        If True, tries to sort batches with respect to the maximum input lengths per batch.
        Not supported for lazily loaded data!

    Returns
    -------
    data_loader
    """
    if data_bucketing and isinstance(instance_dataset, IterableDataset):
        _LOGGER.warning(
            "'data_bucketing' is not supported for lazily loaded data. We will deactivate it."
        )
        data_bucketing = False

    return PyTorchDataLoader(
        instance_dataset,
        batch_size=1 if data_bucketing else batch_size,
        batch_sampler=BucketBatchSampler(
            data_source=instance_dataset,
            batch_size=batch_size,
        )
        if data_bucketing
        else None,
    )
