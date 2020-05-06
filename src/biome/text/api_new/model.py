import copy
from typing import Any, Dict, List, Optional, Tuple, Union

import torch
from allennlp.data import Instance, Token, TokenIndexer
from allennlp.data.fields import ListField, TextField
from allennlp.modules import TextFieldEmbedder
from allennlp.modules.seq2seq_encoders import PassThroughEncoder

from biome.text.api_new.featurizer import InputFeaturizer
from biome.text.api_new.modules.encoders import Encoder
from biome.text.api_new.tokenizer import Tokenizer
from biome.text.api_new.vocabulary import Vocabulary


class Model(torch.nn.Module):
    """Model definition. All models used in pipelines must configure this model class"""

    def __init__(
        self,
        vocab: Vocabulary,
        tokenizer: Tokenizer,
        featurizer: InputFeaturizer,
        encoder: Optional[Encoder] = None,
    ):
        super(Model, self).__init__()

        self.vocab = vocab
        self.tokenizer = tokenizer
        self.featurizer = featurizer
        self._features = self.featurizer.build_features()
        self._embedder = featurizer.build_embedder(self.vocab)
        self.encoder = (
            encoder.input_dim(self._embedder.get_output_dim()).compile()
            if encoder
            else PassThroughEncoder(self._embedder.get_output_dim())
        )

    @property
    def embedder(self) -> TextFieldEmbedder:
        return self._embedder

    def forward(
        self,
        text: Dict[str, torch.Tensor],
        mask: torch.Tensor,
        num_wrapping_dims: int = 0,
    ) -> torch.Tensor:
        """Applies embedding + encoder layers"""
        embeddings = self._embedder(text, num_wrapping_dims=num_wrapping_dims)
        return self.encoder(embeddings, mask=mask)

    def _update_vocab(self, vocab: Vocabulary, **kwargs):
        """This method is called when a base model updates the vocabulary"""
        self.vocab = vocab

        for model_path, module in self.named_modules():
            if module == self:
                continue
            if hasattr(module, 'extend_vocab'):
                module.extend_vocab(self.vocab)

    @property
    def features(self) -> Dict[str, TokenIndexer]:
        return self._features

    def __tokenize_text(self, text: str) -> List[Token]:
        return self.tokenizer.tokenize_text(text)

    def __tokenize_document(self, document: List[str]) -> List[List[Token]]:
        return self.tokenizer.tokenize_document(document)

    def __tokenize_record(
        self, record: Dict[str, Any]
    ) -> Dict[str, Tuple[List[Token], List[Token]]]:
        return self.tokenizer.tokenize_record(record)

    def featurize(
        self,
        record: Union[str, List[str], Dict[str, Any]],
        to_field: str = "record",
        aggregate: bool = False,
    ) -> Instance:
        """
        Generate a allennlp Instance from a record input.

        If aggregate flag is enabled, the resultant instance will contains a single TextField's
        with all record fields; otherwhise, a ListField of TextFields.
        """
        data = record
        record_tokens = self._data_tokens(data)
        return Instance({to_field: self._tokens_to_field(record_tokens, aggregate)})

    def _data_tokens(self, data: Any) -> List[List[Token]]:
        """Convert data into a list of list of token depending on data type"""
        if isinstance(data, dict):
            return [
                key_tokens + value_tokens
                for key_tokens, value_tokens in self.__tokenize_record(data).values()
            ]
        if isinstance(data, str):
            return [self.__tokenize_text(data)]
        return self.__tokenize_document(data)

    def _tokens_to_field(
        self, tokens: List[List[Token]], aggregate: bool
    ) -> Union[ListField, TextField]:
        """
        If aggregate, generates a TextField including flatten token list. Otherwise,
        a ListField of TextField is returned.
        """
        if aggregate:
            return TextField(
                [token for entry_tokens in tokens for token in entry_tokens],
                self._features,
            )
        return ListField(
            [TextField(entry_tokens, self._features) for entry_tokens in tokens]
        )
