from inspect import signature

import pytest
from allennlp.common.util import import_submodules
from allennlp.data import DatasetReader
from allennlp.data.token_indexers import SingleIdTokenIndexer
from allennlp.data.tokenizers import WordTokenizer
from allennlp.models import Model, BertForClassification

from biome.text.pipelines._impl.allennlp.dataset_readers import (
    SequenceClassifierReader,
    SequencePairClassifierReader,
)
from biome.text.pipelines._impl.allennlp.models import (
    SequenceClassifier,
    SequencePairClassifier,
    SimilarityClassifier,
)

import_submodules("biome.text")


@pytest.mark.parametrize(
    "name, model, dataset_reader",
    [
        ("sequence_classifier", SequenceClassifier, SequenceClassifierReader),
        ("bert_for_classification", BertForClassification, SequenceClassifierReader,),
        (
            "sequence_pair_classifier",
            SequencePairClassifier,
            SequencePairClassifierReader,
        ),
        ("similarity_classifier", SimilarityClassifier, SequencePairClassifierReader,),
    ],
)
def test_name_consistency(name, model, dataset_reader):
    """One of our design choices: each model has its own dataset reader with the same name"""
    assert model is Model.by_name(name)
    assert dataset_reader is DatasetReader.by_name(name)


@pytest.mark.parametrize(
    "dataset_reader, model, text_input",
    [
        (SequenceClassifierReader, SequenceClassifier, {"tokens": "a", "label": "b"},),
        (
            SequenceClassifierReader,
            BertForClassification,
            {"tokens": "a", "label": "b"},
        ),
        (
            SequencePairClassifierReader,
            SequencePairClassifier,
            {"record1": "a", "record2": "b", "label": "c"},
        ),
        (
            SequencePairClassifierReader,
            SimilarityClassifier,
            {"record1": "a", "record2": "b", "label": "c"},
        ),
    ],
)
def test_signature_consistency(dataset_reader, model, text_input):
    """The output of the `text_to_instance` method has to match the forward signature of the model's forward method!"""
    reader = dataset_reader(
        tokenizer=WordTokenizer(), token_indexers={"tokens": SingleIdTokenIndexer()}
    )
    instance = reader.text_to_instance(**text_input)
    forward_parameters = list(signature(model.forward).parameters)
    forward_parameters.remove("self")

    assert list(instance.fields.keys()) == forward_parameters
