(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{436:function(e,t,a){"use strict";a.r(t);var n=a(25),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"biome-text-hpo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-hpo"}},[e._v("#")]),e._v(" biome.text.hpo "),a("Badge",{attrs:{text:"Module"}})],1),e._v(" "),a("div"),e._v(" "),a("p",[e._v("This module includes all components related to an HPO experiment execution.\nIt tries to allow for a simple integration with the HPO library 'Ray Tune'.")]),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"tunemetricslogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tunemetricslogger"}},[e._v("#")]),e._v(" TuneMetricsLogger "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("TuneMetricsLogger")]),e._v(" ()"),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("A trainer logger defined for sending validation metrics to ray tune system. Normally, those\nmetrics will be used by schedulers for trial experiments stop.")]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"loggers.html#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")])]),e._v(" "),a("li",[e._v("allennlp.training.trainer.EpochCallback")]),e._v(" "),a("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),a("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"inherited-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("b",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"loggers.html#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")])])]),e._v(":\n"),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.end_train",href:"loggers.html#biome.text.loggers.BaseTrainLogger.end_train"}},[e._v("end_train")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.init_train",href:"loggers.html#biome.text.loggers.BaseTrainLogger.init_train"}},[e._v("init_train")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.log_epoch_metrics",href:"loggers.html#biome.text.loggers.BaseTrainLogger.log_epoch_metrics"}},[e._v("log_epoch_metrics")])])])])])]),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"tuneexperiment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuneexperiment"}},[e._v("#")]),e._v(" TuneExperiment "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("TuneExperiment")]),e._v(" ("),e._v("\n    "),a("span",[e._v("pipeline_config: dict")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("trainer_config: dict")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("train_dataset: "),a("a",{attrs:{title:"biome.text.dataset.Dataset",href:"dataset.html#biome.text.dataset.Dataset"}},[e._v("Dataset")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("valid_dataset: "),a("a",{attrs:{title:"biome.text.dataset.Dataset",href:"dataset.html#biome.text.dataset.Dataset"}},[e._v("Dataset")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("vocab: Union[allennlp.data.vocabulary.Vocabulary, NoneType] = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("name: Union[str, NoneType] = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("trainable: Union[Callable, NoneType] = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("**kwargs")]),a("span",[e._v(",")]),e._v("\n"),a("span",[e._v(")")]),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("This class provides a trainable function and a config to conduct an HPO with "),a("code",[e._v("ray.tune.run")])]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("pipeline_config")])])]),e._v(" "),a("dd",[e._v("The pipeline configuration with its hyperparemter search spaces:\n"),a("a",{attrs:{href:"https://docs.ray.io/en/master/tune/key-concepts.html#search-spaces"}},[e._v("https://docs.ray.io/en/master/tune/key-concepts.html#search-spaces")])]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("trainer_config")])])]),e._v(" "),a("dd",[e._v("The trainer configuration with its hyperparameter search spaces")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("train_dataset")])])]),e._v(" "),a("dd",[e._v("Training dataset")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("valid_dataset")])])]),e._v(" "),a("dd",[e._v("Validation dataset")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("vocab")])])]),e._v(" "),a("dd",[e._v("If you want to share the same vocabulary between the trials you can provide it here")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("name")])])]),e._v(" "),a("dd",[e._v("Used for the "),a("code",[e._v("tune.Experiment.name")]),e._v(", the project name in the WandB logger\nand for the experiment name in the MLFlow logger.\nBy default we construct following string: 'HPO on %date (%time)'")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("trainable")])])]),e._v(" "),a("dd",[e._v("A custom trainable function that takes as input the "),a("code",[a("a",{attrs:{title:"biome.text.hpo.TuneExperiment.config",href:"#biome.text.hpo.TuneExperiment.config"}},[e._v("TuneExperiment.config")])]),e._v(" dict.")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("**kwargs")])])]),e._v(" "),a("dd",[e._v("The rest of the kwargs are passed on to "),a("code",[e._v("tune.Experiment.__init__")]),e._v(".\nThey must not contain the 'name', 'run' or the 'config' key,\nsince these are provided automatically by "),a("code",[a("a",{attrs:{title:"biome.text.hpo.TuneExperiment",href:"#biome.text.hpo.TuneExperiment"}},[e._v("TuneExperiment")])]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"attributes"}},[e._v("Attributes")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("trainable")])])]),e._v(" "),a("dd",[e._v("The trainable function used by ray tune")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("config")])])]),e._v(" "),a("dd",[e._v("The config dict passed on to the trainable function")])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[e._v("Examples")]),e._v(" "),a("p",[e._v("A minimal usage would be:")]),e._v(" "),a("pre",[a("code",{staticClass:"language-python"},[e._v('>>> from biome.text import Dataset\n>>> from ray import tune\n>>> pipeline_config = {\n...     "name": "tune_experiment_example",\n...     "head": {"type": "TextClassification", "labels": ["a", "b"]},\n... }\n>>> trainer_config = {\n...     "optimizer": {"type": "adam", "lr": tune.loguniform(1e-3, 1e-2)}\n... }\n>>> train_dataset = Dataset.from_dict({"text": ["test", "this"], "label": ["a", "b"]})\n>>> valid_dataset = Dataset.from_dict({"text": ["test", "this"], "label": ["a", "b"]})\n>>> my_exp = TuneExperiment(pipeline_config, trainer_config, train_dataset, valid_dataset, num_samples=10)\n>>> tune.run(my_exp) # doctest: +SKIP\n')])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-2"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[e._v("ray.tune.experiment.Experiment")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"instance-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables"}},[e._v("#")]),e._v(" Instance variables")]),e._v("\n")]),e._v(" "),a("dl",[a("dt",{attrs:{id:"biome.text.hpo.TuneExperiment.config"}},[a("code",{staticClass:"name"},[e._v("var "),a("span",{staticClass:"ident"},[e._v("config")]),e._v(" : dict")])]),e._v(" "),a("dd",[a("p",[e._v("The config dictionary used by the "),a("code",[e._v("TuneExperiment.trainable")]),e._v(" function")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);