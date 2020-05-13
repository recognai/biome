(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{432:function(a,e,t){"use strict";t.r(e);var s=t(26),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"biome-text-commands-learn-learn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-commands-learn-learn"}},[a._v("#")]),a._v(" biome.text.commands.learn.learn "),t("Badge",{attrs:{text:"Module"}})],1),a._v(" "),t("p",[a._v("The "),t("code",[a._v("train")]),a._v(" subcommand can be used to train a model.\nIt requires a configuration file and a directory in\nwhich to write the results.")]),a._v(" "),t("p",[a._v(".. code-block:: bash")]),a._v(" "),t("p",[a._v("$ python -m allennlp.run train –help\nusage: run [command] train [-h] -s SERIALIZATION_DIR param_path")]),a._v(" "),t("p",[a._v("Train the specified model on the specified dataset.")]),a._v(" "),t("p",[a._v("positional arguments:\nparam_path\npath to parameter file describing the model to be trained")]),a._v(" "),t("p",[a._v("optional arguments:\n-h, –help\nshow this help message and exit\n-s SERIALIZATION_DIR, –serialization-dir SERIALIZATION_DIR\ndirectory in which to save the model and its logs")]),a._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.commands.learn.learn.learn_from_args"}},[a._v("learn_from_args "),t("Badge",{attrs:{text:"Function"}})],1),a._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[a._v("\n"),t("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),t("span",{staticClass:"ident"},[a._v("learn_from_args")]),a._v("("),t("span",[a._v("args: argparse.Namespace)")]),a._v("\n")]),a._v("\n        ")])])]),a._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[a._v("Launches a pipeline learn action with input command line arguments")])])])]),a._v(" "),t("dl",[t("h2",{attrs:{id:"biome.text.commands.learn.learn.BiomeLearn"}},[a._v("BiomeLearn "),t("Badge",{attrs:{text:"Class"}})],1),a._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[a._v("    "),t("code",[a._v("\n"),t("span",{staticClass:"token keyword"},[a._v("class")]),a._v(" "),t("span",{staticClass:"ident"},[a._v("BiomeLearn")]),a._v(" ()"),a._v("\n    ")])])])]),a._v(" "),t("dd",[t("div",{staticClass:"desc"},[t("p",[a._v("An abstract class representing subcommands for allennlp.run.\nIf you wanted to (for example) create your own custom "),t("code",[a._v("special-evaluate")]),a._v(" command to use like")]),a._v(" "),t("p",[t("code",[a._v("allennlp special-evaluate ...")])]),a._v(" "),t("p",[a._v("you would create a "),t("code",[a._v("Subcommand")]),a._v(" subclass and then pass it as an override to\n:func:"),t("code",[a._v("~allennlp.commands.main")]),a._v(" .")])]),a._v(" "),t("h3",[a._v("Ancestors")]),a._v(" "),t("ul",{staticClass:"hlist"},[t("li",[a._v("allennlp.commands.subcommand.Subcommand")])]),a._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.commands.learn.learn.BiomeLearn.description"}},[a._v("description "),t("Badge",{attrs:{text:"Static method"}})],1),a._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[a._v("\n"),t("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),t("span",{staticClass:"ident"},[a._v("description")]),a._v("("),t("span",[a._v(") -> str")]),a._v("\n")]),a._v("\n        ")])])]),a._v(" "),t("dd",[t("div",{staticClass:"desc"})]),a._v(" "),t("h3",{attrs:{id:"biome.text.commands.learn.learn.BiomeLearn.command_handler"}},[a._v("command_handler "),t("Badge",{attrs:{text:"Static method"}})],1),a._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[a._v("\n"),t("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),t("span",{staticClass:"ident"},[a._v("command_handler")]),a._v("("),t("span",[a._v(") -> Callable")]),a._v("\n")]),a._v("\n        ")])])]),a._v(" "),t("dd",[t("div",{staticClass:"desc"})])]),a._v(" "),t("dl",[t("h3",{attrs:{id:"biome.text.commands.learn.learn.BiomeLearn.add_subparser"}},[a._v("add_subparser "),t("Badge",{attrs:{text:"Method"}})],1),a._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[a._v("\n"),t("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),t("span",{staticClass:"ident"},[a._v("add_subparser")]),a._v(" ("),a._v("\n   self,\n   name: str,\n   parser: argparse._SubParsersAction,\n)  -> argparse.ArgumentParser\n")]),a._v("\n        ")])])]),a._v(" "),t("dd",[t("div",{staticClass:"desc"})])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);