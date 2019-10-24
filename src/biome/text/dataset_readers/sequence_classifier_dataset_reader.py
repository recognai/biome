from typing import Optional, Union, List

from allennlp.data import DatasetReader, Instance
from allennlp.data.fields import LabelField

from biome.text.dataset_readers.datasource_reader import DataSourceReader


@DatasetReader.register("sequence_classifier")
class SequenceClassifierDatasetReader(DataSourceReader):
    """
    A DatasetReader for the SequenceClassifier model.
    """

    def text_to_instance(
        self, tokens: Union[str, List[str], dict], label: Optional[str] = None
    ) -> Optional[Instance]:
        """Extracts the forward parameters from the example and transforms them to an `Instance`

        Parameters
        ----------
        tokens
            The input tokens key,values (or the text string)
        label
            The label value

        Returns
        -------
        instance
            Returns `None` if cannot generate an new Instance.
        """
        fields = {}

        tokens_field = self.build_textfield(tokens)
        label_field = LabelField(label) if label else None

        if tokens_field:
            fields["tokens"] = tokens_field
        if label_field:
            fields["label"] = label_field

        return Instance(fields) if fields else None


# Register an alias for this reader
DatasetReader.register("bert_for_classification")(SequenceClassifierDatasetReader)
