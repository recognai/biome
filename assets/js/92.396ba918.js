(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{390:function(e,i,t){"use strict";t.r(i);var l=t(26),p=Object(l.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"biome-text-pipelines-sequence-pair-classifier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-pipelines-sequence-pair-classifier"}},[e._v("#")]),e._v(" biome.text.pipelines.sequence_pair_classifier "),t("Badge",{attrs:{text:"Module"}})],1),e._v(" "),t("dl",[t("h2",{attrs:{id:"biome.text.pipelines.sequence_pair_classifier.SequencePairClassifierPipeline"}},[e._v("SequencePairClassifierPipeline "),t("Badge",{attrs:{text:"Class"}})],1),e._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[e._v("    "),t("code",[e._v("\n"),t("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),t("span",{staticClass:"ident"},[e._v("SequencePairClassifierPipeline")]),e._v(" (*args, **kwds)"),e._v("\n    ")])])])]),e._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[e._v("This class combine the different allennlp components that make possible a "),t("code",[e._v("`Pipeline")]),e._v(",\nunderstanding as a model, not only the definition of the neural network architecture,\nbut also the transformation of the input data to Instances and the evaluation of\npredictions on new data")]),e._v(" "),t("p",[e._v("The base idea is that this class contains the model and the dataset reader (as a predictor does),\nand allow operations of learning, predict and save")]),e._v(" "),t("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),t("p",[e._v("model`\nThe class:~allennlp.models.Model architecture")]),e._v(" "),t("dl",[t("dt",[t("strong",[t("code",[e._v("reader")])])]),e._v(" "),t("dd",[e._v("The class:allennlp.data.DatasetReader")])])]),e._v(" "),t("h3",[e._v("Ancestors")]),e._v(" "),t("ul",{staticClass:"hlist"},[t("li",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline"}},[e._v("Pipeline")])]),e._v(" "),t("li",[e._v("typing.Generic")]),e._v(" "),t("li",[e._v("allennlp.predictors.predictor.Predictor")]),e._v(" "),t("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),t("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.pipelines.sequence_pair_classifier.SequencePairClassifierPipeline.predict"}},[e._v("predict "),t("Badge",{attrs:{text:"Method"}})],1),e._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[e._v("\n"),t("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),t("span",{staticClass:"ident"},[e._v("predict")]),e._v(" ("),e._v("\n   self,\n   record1: Union[str, List[str], dict],\n   record2: Union[str, List[str], dict],\n) \n")]),e._v("\n        ")])])]),e._v(" "),t("dd",[t("div",{staticClass:"desc"})])]),e._v(" "),t("h3",[e._v("Inherited members")]),e._v(" "),t("ul",{staticClass:"hlist"},[t("li",[t("code",[t("b",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline"}},[e._v("Pipeline")])])]),e._v(":\n"),t("ul",{staticClass:"hlist"},[t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.config",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.config"}},[e._v("config")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.empty_pipeline",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.empty_pipeline"}},[e._v("empty_pipeline")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.extend_labels",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.extend_labels"}},[e._v("extend_labels")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.from_config",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.from_config"}},[e._v("from_config")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.get_gradients",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.get_gradients"}},[e._v("get_gradients")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.get_output_labels",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.get_output_labels"}},[e._v("get_output_labels")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.init_prediction_cache",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.init_prediction_cache"}},[e._v("init_prediction_cache")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.init_prediction_logger",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.init_prediction_logger"}},[e._v("init_prediction_logger")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.json_to_labeled_instances",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.json_to_labeled_instances"}},[e._v("json_to_labeled_instances")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.learn",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.learn"}},[e._v("learn")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.load",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.load"}},[e._v("load")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.model",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.model"}},[e._v("model")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.model_class",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.model_class"}},[e._v("model_class")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.name",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.name"}},[e._v("name")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.predict_json",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.predict_json"}},[e._v("predict_json")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.predictions_to_labeled_instances",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.predictions_to_labeled_instances"}},[e._v("predictions_to_labeled_instances")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.reader",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.reader"}},[e._v("reader")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.reader_class",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.reader_class"}},[e._v("reader_class")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.pipelines.pipeline.Pipeline.signature",href:"pipeline.html#biome.text.pipelines.pipeline.Pipeline.signature"}},[e._v("signature")])])])])])])])])])}),[],!1,null,null,null);i.default=p.exports}}]);