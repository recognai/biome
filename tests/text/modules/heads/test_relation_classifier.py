from typing import Dict

import pandas as pd
import pytest
from biome.text import TrainerConfiguration, VocabularyConfiguration, Dataset, Pipeline


@pytest.fixture
def training_dataset(tmp_path) -> Dataset:
    """Creating a dataframe, storing and returning with an intermediate load"""
    data_file = tmp_path / "relations.json"
    df = pd.DataFrame(
        [
            {
                "text": "The most common audits were about waste and recycling.",
                "entities": [
                    {"start": 34, "end": 39, "label": "PN", "text": "waste"},
                    {"start": 16, "end": 22, "label": "QTY", "text": "audits"},
                ],
                "label": "Message-Topic(e1,e2)",
            },
            {
                "text": "The company fabricates plastic chairs.",
                "entities": [
                    {"start": 4, "end": 11, "label": "OBJECT", "text": "company"},
                    {"start": 31, "end": 37, "label": "SUBJECT", "text": "chairs"},
                ],
                "label": "Product-Producer(e2,e1)",
            },
        ]
    )
    df.to_json(data_file, lines=True, orient="records")

    return Dataset.from_json(str(data_file))


@pytest.fixture
def pipeline_dict() -> Dict:
    """Creating the pipeline dictionary"""

    pipeline_dict = {
        "name": "biome-rele",
        "features": {
            "word": {"embedding_dim": 2},
            "char": {
                "embedding_dim": 2,
                "dropout": 0.1,
                "encoder": {
                    "type": "gru",
                    "hidden_size": 2,
                },
            },
        },
        "head": {
            "type": "RelationClassification",
            "labels": ["Message-Topic(e1,e2)", "Product-Producer(e2,e1)"],
            "entities_embedder": {"num_embeddings": 12, "embedding_dim": 50},
            "feedforward": {
                "num_layers": 1,
                "hidden_dims": [4],
                "activations": ["relu"],
                "dropout": [0.1],
            },
        },
    }

    return pipeline_dict


@pytest.fixture
def trainer_dict() -> Dict:
    """Creating the trainer dictionary"""

    trainer_dict = {
        "num_epochs": 1,
        "optimizer": {"type": "adamw", "lr": 0.002},
    }

    return trainer_dict


def test_train(pipeline_dict, training_dataset, trainer_dict, tmp_path):
    """Testing a classifier made from scratch"""

    pipeline = Pipeline.from_config(pipeline_dict)
    pipeline.predict(
        text="The most common audits were about waste and recycling",
        entities=[
            {"start": 34, "end": 39, "label": "OBJECT", "text": "waste"},
            {"start": 16, "end": 22, "label": "SUBJECT", "text": "audits"},
        ],
    )
    pipeline.create_vocabulary(VocabularyConfiguration(sources=[training_dataset]))

    pipeline.train(
        output=str(tmp_path / "relation_classifier"),
        trainer=TrainerConfiguration(**trainer_dict),
        training=training_dataset,
        validation=training_dataset,
    )

    pl_trained = Pipeline.from_pretrained(str(tmp_path / "relation_classifier"))
    pl_trained.predict(
        text="The most common audits were about waste and recycling",
        entities=[
            {"start": 34, "end": 39, "label": "OBJECT", "text": "waste"},
            {"start": 16, "end": 22, "label": "SUBJECT", "text": "audits"},
        ],
    )
