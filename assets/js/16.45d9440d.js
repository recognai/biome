(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{397:function(n,a,t){"use strict";t.r(a);var e=t(18),s=Object(e.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"biome-text-api-new-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-api-new-configuration"}},[n._v("#")]),n._v(" biome.text.api_new.configuration "),t("Badge",{attrs:{text:"Module"}})],1),n._v(" "),t("dl",[t("h2",{attrs:{id:"biome.text.api_new.configuration.FeaturesConfiguration"}},[n._v("FeaturesConfiguration "),t("Badge",{attrs:{text:"Class"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[n._v("    "),t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("class")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("FeaturesConfiguration")]),n._v(" ("),n._v("\n    "),t("span",[n._v("words: Union[Dict[str, Any], NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("chars: Union[Dict[str, Any], NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("**extra_params")]),t("span",[n._v(",")]),n._v("\n"),t("span",[n._v(")")]),n._v("\n    ")])])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v("Features configuration spec")])]),n._v(" "),t("h3",[n._v("Ancestors")]),n._v(" "),t("ul",{staticClass:"hlist"},[t("li",[n._v("allennlp.common.from_params.FromParams")])]),n._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.api_new.configuration.FeaturesConfiguration.from_params"}},[n._v("from_params "),t("Badge",{attrs:{text:"Static method"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("def")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("from_params")]),n._v(" ("),n._v("\n   params: allennlp.common.params.Params,\n   **extras,\n)  -> "),t("a",{attrs:{title:"biome.text.api_new.configuration.FeaturesConfiguration",href:"#biome.text.api_new.configuration.FeaturesConfiguration"}},[n._v("FeaturesConfiguration")]),n._v("\n")]),n._v("\n        ")])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v("This is the automatic implementation of "),t("code",[n._v("from_params")]),n._v(". Any class that subclasses "),t("code",[n._v("FromParams")]),n._v("\n(or "),t("code",[n._v("Registrable")]),n._v(", which itself subclasses "),t("code",[n._v("FromParams")]),n._v(') gets this implementation for free.\nIf you want your class to be instantiated from params in the "obvious" way – pop off parameters\nand hand them to your constructor with the same names – this provides that functionality.')]),n._v(" "),t("p",[n._v("If you need more complex logic in your from "),t("code",[n._v("from_params")]),n._v(" method, you'll have to implement\nyour own method that overrides this one.")])])])]),n._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.api_new.configuration.FeaturesConfiguration.compile"}},[n._v("compile "),t("Badge",{attrs:{text:"Method"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("def")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("compile")]),n._v("("),t("span",[n._v("self) -> "),t("a",{attrs:{title:"biome.text.api_new.featurizer.InputFeaturizer",href:"featurizer.html#biome.text.api_new.featurizer.InputFeaturizer"}},[n._v("InputFeaturizer")])]),n._v("\n")]),n._v("\n        ")])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v("Build input featurizer from configuration")])])])])]),n._v(" "),t("h2",{attrs:{id:"biome.text.api_new.configuration.TokenizerConfiguration"}},[n._v("TokenizerConfiguration "),t("Badge",{attrs:{text:"Class"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[n._v("    "),t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("class")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("TokenizerConfiguration")]),n._v(" ("),n._v("\n    "),t("span",[n._v("lang: str = 'en'")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("skip_empty_tokens: bool = False")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("max_sequence_length: int = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("max_nr_of_sentences: int = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("text_cleaning: Union[Dict[str, Any], NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("segment_sentences: Union[bool, Dict[str, Any]] = False")]),t("span",[n._v(",")]),n._v("\n"),t("span",[n._v(")")]),n._v("\n    ")])])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v('"Tokenization configuration')])]),n._v(" "),t("h3",[n._v("Ancestors")]),n._v(" "),t("ul",{staticClass:"hlist"},[t("li",[n._v("allennlp.common.from_params.FromParams")])]),n._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.api_new.configuration.TokenizerConfiguration.compile"}},[n._v("compile "),t("Badge",{attrs:{text:"Method"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("def")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("compile")]),n._v("("),t("span",[n._v("self) -> "),t("a",{attrs:{title:"biome.text.api_new.tokenizer.Tokenizer",href:"tokenizer.html#biome.text.api_new.tokenizer.Tokenizer"}},[n._v("Tokenizer")])]),n._v("\n")]),n._v("\n        ")])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v("Build tokenizer object from its configuration")])])])])]),n._v(" "),t("h2",{attrs:{id:"biome.text.api_new.configuration.PipelineConfiguration"}},[n._v("PipelineConfiguration "),t("Badge",{attrs:{text:"Class"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[n._v("    "),t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("class")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("PipelineConfiguration")]),n._v(" ("),n._v("\n    "),t("span",[n._v("name: str")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("features: "),t("a",{attrs:{title:"biome.text.api_new.configuration.FeaturesConfiguration",href:"#biome.text.api_new.configuration.FeaturesConfiguration"}},[n._v("FeaturesConfiguration")])]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("head: "),t("a",{attrs:{title:"biome.text.api_new.modules.heads.defs.TaskHeadSpec",href:"modules/heads/defs.html#biome.text.api_new.modules.heads.defs.TaskHeadSpec"}},[n._v("TaskHeadSpec")])]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("tokenizer: Union[biome.text.api_new.configuration.TokenizerConfiguration, NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("encoder: Union[biome.text.api_new.modules.specs.allennlp_specs.Seq2SeqEncoderSpec, NoneType] = None")]),t("span",[n._v(",")]),n._v("\n"),t("span",[n._v(")")]),n._v("\n    ")])])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v("Pipeline configuration attributes")])]),n._v(" "),t("h3",[n._v("Ancestors")]),n._v(" "),t("ul",{staticClass:"hlist"},[t("li",[n._v("allennlp.common.from_params.FromParams")])]),n._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.api_new.configuration.PipelineConfiguration.as_dict"}},[n._v("as_dict "),t("Badge",{attrs:{text:"Method"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("def")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("as_dict")]),n._v("("),t("span",[n._v("self) -> Dict[str, Any]")]),n._v("\n")]),n._v("\n        ")])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"})])])]),n._v(" "),t("h2",{attrs:{id:"biome.text.api_new.configuration.TrainerConfiguration"}},[n._v("TrainerConfiguration "),t("Badge",{attrs:{text:"Class"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[n._v("    "),t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("class")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("TrainerConfiguration")]),n._v(" ("),n._v("\n    "),t("span",[n._v("optimizer: Dict[str, Any]")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("validation_metric: str = '-loss'")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("patience: Union[int, NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("shuffle: bool = True")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("num_epochs: int = 20")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("cuda_device: int = -1")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("grad_norm: Union[float, NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("grad_clipping: Union[float, NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("learning_rate_scheduler: Union[Dict[str, Any], NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("momentum_scheduler: Union[Dict[str, Any], NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("moving_average: Union[Dict[str, Any], NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("batch_size: Union[int, NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("cache_instances: bool = True")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("in_memory_batches: int = 2")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("data_bucketing: bool = True")]),t("span",[n._v(",")]),n._v("\n"),t("span",[n._v(")")]),n._v("\n    ")])])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v("Trainer configuration")])])]),n._v(" "),t("h2",{attrs:{id:"biome.text.api_new.configuration.VocabularyConfiguration"}},[n._v("VocabularyConfiguration "),t("Badge",{attrs:{text:"Class"}})],1),n._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[n._v("    "),t("code",[n._v("\n"),t("span",{staticClass:"token keyword"},[n._v("class")]),n._v(" "),t("span",{staticClass:"ident"},[n._v("VocabularyConfiguration")]),n._v(" ("),n._v("\n    "),t("span",[n._v("sources: List[str]")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("min_count: Dict[str, int] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("max_vocab_size: Union[int, Dict[str, int]] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("pretrained_files: Union[Dict[str, str], NoneType] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("only_include_pretrained_words: bool = False")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("tokens_to_add: Dict[str, List[str]] = None")]),t("span",[n._v(",")]),n._v("\n    "),t("span",[n._v("min_pretrained_embeddings: Dict[str, int] = None")]),t("span",[n._v(",")]),n._v("\n"),t("span",[n._v(")")]),n._v("\n    ")])])])]),n._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[n._v("Configures a "),t("code",[n._v("Vocabulary")]),n._v(" before it gets created from data")]),n._v(" "),t("p",[n._v("Use this to configure a Vocabulary using specific arguments from "),t("code",[n._v("allennlp.data.Vocabulary")])]),n._v(" "),t("p",[n._v("See "),t("a",{attrs:{href:"https://docs.allennlp.org/master/api/data/vocabulary/#vocabulary]"}},[n._v("AllenNLP Vocabulary docs")])]),n._v(" "),t("h1",{attrs:{id:"parameters"}},[n._v("Parameters")]),n._v(" "),t("pre",[t("code",[n._v("sources: <code>List\\[str]</code>\nmin_count: <code>Dict\\[str, int]</code>\nmax_vocab_size: <code>Union\\[int, Dict\\[str, int]]</code>\npretrained_files: <code>Optional\\[Dict\\[str, str]]</code>\nonly_include_pretrained_words: <code>bool</code>\ntokens_to_add: <code>Dict\\[str, List\\[str]]</code>\nmin_pretrained_embeddings: <code>Dict\\[str, int]</code>\n")])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);