import logging
import warnings
from warnings import warn_explicit

import pkg_resources

try:
    import tqdm

    class TqdmWrapper(tqdm.tqdm):
        """
        A tqdm wrapper for progress bar disable control

        We must use this wrapper before any tqdm import (so, before any allennlp import). It's why we
        must define at top package module level

        We could discard this behaviour when this PR is merged: https://github.com/tqdm/tqdm/pull/950
        and then just environment vars instead.

        """

        disable: bool = False

        def __init__(self, *args, **kwargs):
            kwargs["disable"] = TqdmWrapper.disable
            super(TqdmWrapper, self).__init__(*args, **kwargs)

    tqdm.tqdm = TqdmWrapper
except ModuleNotFoundError:
    pass

from .pipeline import (
    Pipeline,
    PipelineConfiguration,
    TrainerConfiguration,
    VocabularyConfiguration,
)
from .dataset import Dataset

warnings.showwarning = warn_explicit
logging.basicConfig()

try:
    __version__ = pkg_resources.get_distribution(__name__.replace(".", "-")).version
except pkg_resources.DistributionNotFound:
    # package is not installed
    pass
