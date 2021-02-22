import json
import random
from typing import Tuple

import numpy as np
import pytest
import torch

from biome.text import Dataset
from biome.text import Pipeline
from biome.text import Trainer
from biome.text import VocabularyConfiguration
from biome.text.configuration import CharFeatures
from biome.text.configuration import LTrainerConfiguration
from biome.text.configuration import WordFeatures


@pytest.fixture
def train_valid_dataset(resources_data_path) -> Tuple[Dataset, Dataset]:
    """Returns both training and validation datasets"""

    training_ds = Dataset.from_csv(
        paths=str(resources_data_path / "business.cat.2k.train.csv")
    )
    validation_ds = Dataset.from_csv(
        paths=str(resources_data_path / "business.cat.2k.valid.csv")
    )

    return training_ds, validation_ds


@pytest.fixture
def pipeline_dict() -> dict:
    """Pipeline config dict. You need to update the labels!"""

    pipeline_dictionary = {
        "name": "german_business_names",
        "features": {
            "word": {"embedding_dim": 16, "lowercase_tokens": True},
            "char": {
                "embedding_dim": 16,
                "encoder": {
                    "type": "gru",
                    "num_layers": 1,
                    "hidden_size": 32,
                    "bidirectional": True,
                },
                "dropout": 0.1,
            },
        },
        "head": {
            "type": "TextClassification",
            "labels": [
                "Unternehmensberatungen",
                "Friseure",
                "Tiefbau",
                "Dienstleistungen",
                "Gebrauchtwagen",
                "Restaurants",
                "Architekturbüros",
                "Elektriker",
                "Vereine",
                "Versicherungsvermittler",
                "Sanitärinstallationen",
                "Edv",
                "Maler",
                "Physiotherapie",
                "Werbeagenturen",
                "Apotheken",
                "Vermittlungen",
                "Hotels",
                "Autowerkstätten",
                "Elektrotechnik",
                "Allgemeinärzte",
                "Handelsvermittler Und -vertreter",
            ],
            "pooler": {
                "type": "gru",
                "num_layers": 1,
                "hidden_size": 16,
                "bidirectional": True,
            },
            "feedforward": {
                "num_layers": 1,
                "hidden_dims": [16],
                "activations": ["relu"],
                "dropout": [0.1],
            },
        },
    }

    return pipeline_dictionary


@pytest.fixture
def trainer_config() -> LTrainerConfiguration:
    """Returns the trainer dictionary"""

    return LTrainerConfiguration(
        batch_size=64,
        optimizer={"type": "adam", "lr": 0.01},
        max_epochs=5,
    )


def test_text_classification(
    tmp_path, pipeline_dict, trainer_config, train_valid_dataset
):
    """Apart from a well specified training, this also tests the vocab creation!"""

    random.seed(42)
    np.random.seed(422)
    torch.manual_seed(4222)
    if torch.cuda.is_available():
        torch.cuda.manual_seed_all(4222)

    pl = Pipeline.from_config(pipeline_dict)
    train_ds = train_valid_dataset[0]
    valid_ds = train_valid_dataset[1]
    trainer = Trainer(trainer_config)

    vocab_config = VocabularyConfiguration(
        datasets=[train_ds], max_vocab_size={"word": 50}
    )

    trainer.fit(
        pipeline=pl,
        train_dataset=train_ds,
        valid_dataset=valid_ds,
        vocab_config=vocab_config,
    )

    assert pl.vocab.get_vocab_size(WordFeatures.namespace) == 52
    assert pl.vocab.get_vocab_size(CharFeatures.namespace) == 83

    assert pl.num_trainable_parameters == 22070

    evaluation = pl.evaluate(valid_ds)

    assert evaluation["loss"] == pytest.approx(0.8217981046438217, abs=0.003)
