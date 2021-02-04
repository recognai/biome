(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{456:function(e,t,a){"use strict";a.r(t);var i=a(26),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"biome-text-modules-heads-classification-record-pair-classification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-modules-heads-classification-record-pair-classification"}},[e._v("#")]),e._v(" biome.text.modules.heads.classification.record_pair_classification "),a("Badge",{attrs:{text:"Module"}})],1),e._v(" "),a("div"),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"recordpairclassification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recordpairclassification"}},[e._v("#")]),e._v(" RecordPairClassification "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("RecordPairClassification")]),e._v(" ("),e._v("\n    "),a("span",[e._v("backbone: "),a("a",{attrs:{title:"biome.text.backbone.ModelBackbone",href:"../../../backbone.html#biome.text.backbone.ModelBackbone"}},[e._v("ModelBackbone")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("labels: List[str]")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("field_encoder: "),a("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration"}},[e._v("Seq2VecEncoderConfiguration")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("record_encoder: "),a("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.Seq2SeqEncoderConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.Seq2SeqEncoderConfiguration"}},[e._v("Seq2SeqEncoderConfiguration")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("matcher_forward: "),a("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.BiMpmMatchingConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.BiMpmMatchingConfiguration"}},[e._v("BiMpmMatchingConfiguration")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("aggregator: "),a("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration"}},[e._v("Seq2VecEncoderConfiguration")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("classifier_feedforward: "),a("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.FeedForwardConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.FeedForwardConfiguration"}},[e._v("FeedForwardConfiguration")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("matcher_backward: "),a("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.BiMpmMatchingConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.BiMpmMatchingConfiguration"}},[e._v("BiMpmMatchingConfiguration")]),e._v(" = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("dropout: float = 0.1")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("initializer: allennlp.nn.initializers.InitializerApplicator = <allennlp.nn.initializers.InitializerApplicator object>")]),a("span",[e._v(",")]),e._v("\n"),a("span",[e._v(")")]),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("Classifies the relation between a pair of records using a matching layer.")]),e._v(" "),a("p",[e._v("The input for models using this "),a("code",[e._v("TaskHead")]),e._v(" are two "),a("em",[e._v("records")]),e._v(" with one or more "),a("em",[e._v("data fields")]),e._v(" each, and a label\ndescribing their relationship.\nIf you would like a meaningful explanation of the model's prediction,\nboth records must consist of the same number of "),a("em",[e._v("data fields")]),e._v(" and hold them in the same order.")]),e._v(" "),a("p",[e._v("The architecture is loosely based on the AllenNLP implementation of the BiMPM model described in\n"),a("code",[e._v("Bilateral Multi-Perspective Matching for Natural Language Sentences <https://arxiv.org/abs/1702.03814>")]),e._v("_\nby Zhiguo Wang et al., 2017, and was adapted to deal with record pairs.")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("backbone")])])]),e._v(" "),a("dd",[e._v("Takes care of the embedding and optionally of the language encoding")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("labels")])])]),e._v(" "),a("dd",[e._v("List of labels")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("field_encoder")])])]),e._v(" "),a("dd",[e._v("Encodes a data field, contextualized within the field")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("record_encoder")])])]),e._v(" "),a("dd",[e._v("Encodes data fields, contextualized within the record")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("matcher_forward")])])]),e._v(" "),a("dd",[e._v("BiMPM matching for the forward output of the record encoder layer")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("matcher_backward")])])]),e._v(" "),a("dd",[e._v("BiMPM matching for the backward output of the record encoder layer")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("aggregator")])])]),e._v(" "),a("dd",[e._v("Aggregator of all BiMPM matching vectors")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("classifier_feedforward")])])]),e._v(" "),a("dd",[e._v("Fully connected layers for classification.\nA linear output layer with the number of labels at the end will be added automatically!!!")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("dropout")])])]),e._v(" "),a("dd",[e._v("Dropout percentage to use.")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("initializer")])])]),e._v(" "),a("dd",[e._v("If provided, will be used to initialize the model parameters.")])]),e._v(" "),a("p",[e._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead"}},[e._v("ClassificationHead")])]),e._v(" "),a("li",[a("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead"}},[e._v("TaskHead")])]),e._v(" "),a("li",[e._v("torch.nn.modules.module.Module")]),e._v(" "),a("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),a("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),a("dl",[a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"featurize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#featurize"}},[e._v("#")]),e._v(" featurize "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("featurize")]),e._v(" ("),e._v("\n  self,\n  record1: Dict[str, str],\n  record2: Dict[str, str],\n  label: Union[str, NoneType] = None,\n)  -> Union[allennlp.data.instance.Instance, NoneType]\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Tokenizes, indexes and embeds the two records and optionally adds the label")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("record1")])])]),e._v(" "),a("dd",[e._v("First record")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("record2")])])]),e._v(" "),a("dd",[e._v("Second record")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("label")])])]),e._v(" "),a("dd",[e._v("Classification label")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("code",[e._v("instance")])]),e._v(" "),a("dd",[e._v("AllenNLP instance containing the two records plus optionally a label")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward"}},[e._v("#")]),e._v(" forward "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("forward")]),e._v(" ("),e._v("\n  self,\n  record1: Dict[str, Dict[str, torch.Tensor]],\n  record2: Dict[str, Dict[str, torch.Tensor]],\n  label: torch.LongTensor = None,\n)  -> Dict[str, Any]\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("record1")])])]),e._v(" "),a("dd",[e._v("Tokens of the first record.\nThe dictionary is the output of a "),a("code",[e._v("ListField.as_array()")]),e._v(". It gives names to the tensors created by\nthe "),a("code",[e._v("TokenIndexer")]),e._v("s.\nIn its most basic form, using a "),a("code",[e._v("SingleIdTokenIndexer")]),e._v(", the dictionary is composed of:\n"),a("code",[e._v('{"tokens": {"tokens": Tensor(batch_size, num_fields, num_tokens)}}')]),e._v(".\nThe dictionary is designed to be passed on directly to a "),a("code",[e._v("TextFieldEmbedder")]),e._v(", that has a\n"),a("code",[e._v("TokenEmbedder")]),e._v(" for each key in the dictionary (except you set "),a("code",[e._v("allow_unmatched_keys")]),e._v(" in the\n"),a("code",[e._v("TextFieldEmbedder")]),e._v(" to False) and knows how to combine different word/character representations into a\nsingle vector per token in your input.")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("record2")])])]),e._v(" "),a("dd",[e._v("Tokens of the second record.")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("label")])]),e._v(" : "),a("code",[e._v("torch.LongTensor")]),e._v(", optional "),a("code",[e._v("(default = None)")])]),e._v(" "),a("dd",[e._v("A torch tensor representing the sequence of integer gold class label of shape\n"),a("code",[e._v("(batch_size, num_classes)")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("code",[e._v("An output dictionary consisting of:")])]),e._v(" "),a("dd",[e._v(" ")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("logits")])]),e._v(" : "),a("code",[e._v("torch.FloatTensor")])]),e._v(" "),a("dd",[e._v(" ")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("class_probabilities")])]),e._v(" : "),a("code",[e._v("torch.FloatTensor")])]),e._v(" "),a("dd",[e._v(" ")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("loss")])]),e._v(" : "),a("code",[e._v("torch.FloatTensor")]),e._v(", optional")]),e._v(" "),a("dd",[e._v("A scalar loss to be optimised.")])])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"inherited-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("b",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead"}},[e._v("ClassificationHead")])])]),e._v(":\n"),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.extend_labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.extend_labels"}},[e._v("extend_labels")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.get_metrics",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead.get_metrics"}},[e._v("get_metrics")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.inputs",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.inputs"}},[e._v("inputs")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.labels"}},[e._v("labels")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.make_task_prediction",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.make_task_prediction"}},[e._v("make_task_prediction")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.num_labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.num_labels"}},[e._v("num_labels")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.on_vocab_update",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.on_vocab_update"}},[e._v("on_vocab_update")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.register",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.register"}},[e._v("register")])])])])])]),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"recordpairclassificationconfiguration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recordpairclassificationconfiguration"}},[e._v("#")]),e._v(" RecordPairClassificationConfiguration "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("RecordPairClassificationConfiguration")]),e._v(" (*args, **kwds)"),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("Config for record pair classification head component")]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-2"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration"}},[e._v("ComponentConfiguration")])]),e._v(" "),a("li",[e._v("typing.Generic")]),e._v(" "),a("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"inherited-members-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members-2"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("b",[a("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration"}},[e._v("ComponentConfiguration")])])]),e._v(":\n"),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.compile",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.compile"}},[e._v("compile")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.config",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.config"}},[e._v("config")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.from_params",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.from_params"}},[e._v("from_params")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.input_dim",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.input_dim"}},[e._v("input_dim")])])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);