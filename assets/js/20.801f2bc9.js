(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{467:function(a,t,e){"use strict";e.r(t);var s=e(26),d=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"biome-text-api-new-data-readers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-api-new-data-readers"}},[a._v("#")]),a._v(" biome.text.api_new.data.readers "),e("Badge",{attrs:{text:"Module"}})],1),a._v(" "),e("dl",[e("h3",{attrs:{id:"biome.text.api_new.data.readers.from_csv"}},[a._v("from_csv "),e("Badge",{attrs:{text:"Function"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("from_csv")]),a._v(" ("),a._v("\n   path: Union[str, List[str]],\n   **params,\n)  -> dask.dataframe.core.DataFrame\n")]),a._v("\n        ")])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("Creates a "),e("code",[a._v("dask.dataframe.DataFrame")]),a._v(' from one or several csv files.\nIncludes a "path column".')]),a._v(" "),e("h2",{attrs:{id:"parameters"}},[a._v("Parameters")]),a._v(" "),e("dl",[e("dt",[e("strong",[e("code",[a._v("path")])])]),a._v(" "),e("dd",[a._v("Path to files")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("params")])])]),a._v(" "),e("dd",[a._v("Extra arguments passed on to "),e("code",[a._v("dask.dataframe.read_csv")])])]),a._v(" "),e("h2",{attrs:{id:"returns"}},[a._v("Returns")]),a._v(" "),e("dl",[e("dt",[e("code",[a._v("df")])]),a._v(" "),e("dd",[a._v("A "),e("code",[a._v("dask.DataFrame")])])])])]),a._v(" "),e("h3",{attrs:{id:"biome.text.api_new.data.readers.from_json"}},[a._v("from_json "),e("Badge",{attrs:{text:"Function"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("from_json")]),a._v(" ("),a._v("\n   path: Union[str, List[str]],\n   flatten: bool = True,\n   **params,\n)  -> dask.dataframe.core.DataFrame\n")]),a._v("\n        ")])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("Creates a "),e("code",[a._v("dask.dataframe.DataFrame")]),a._v(' from one or several json files.\nIncludes a "path column".')]),a._v(" "),e("h2",{attrs:{id:"parameters"}},[a._v("Parameters")]),a._v(" "),e("dl",[e("dt",[e("strong",[e("code",[a._v("path")])])]),a._v(" "),e("dd",[a._v("Path to files")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("flatten")])])]),a._v(" "),e("dd",[a._v("If true (default false), flatten json nested data")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("params")])])]),a._v(" "),e("dd",[a._v("Extra arguments passed on to "),e("code",[a._v("pandas.read_json")])])]),a._v(" "),e("h2",{attrs:{id:"returns"}},[a._v("Returns")]),a._v(" "),e("dl",[e("dt",[e("code",[a._v("df")])]),a._v(" "),e("dd",[a._v("A "),e("code",[a._v("dask.DataFrame")])])])])]),a._v(" "),e("h3",{attrs:{id:"biome.text.api_new.data.readers.from_parquet"}},[a._v("from_parquet "),e("Badge",{attrs:{text:"Function"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("from_parquet")]),a._v(" ("),a._v("\n   path: Union[str, List[str]],\n   **params,\n)  -> dask.dataframe.core.DataFrame\n")]),a._v("\n        ")])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("Creates a "),e("code",[a._v("dask.dataframe.DataFrame")]),a._v(' from one or several parquet files.\nIncludes a "path column".')]),a._v(" "),e("h2",{attrs:{id:"parameters"}},[a._v("Parameters")]),a._v(" "),e("dl",[e("dt",[e("strong",[e("code",[a._v("path")])])]),a._v(" "),e("dd",[a._v("Path to files")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("params")])])]),a._v(" "),e("dd",[a._v("Extra arguments passed on to "),e("code",[a._v("pandas.read_parquet")])])]),a._v(" "),e("h2",{attrs:{id:"returns"}},[a._v("Returns")]),a._v(" "),e("dl",[e("dt",[e("code",[a._v("df")])]),a._v(" "),e("dd",[a._v("A "),e("code",[a._v("dask.dataframe.DataFrame")])])])])]),a._v(" "),e("h3",{attrs:{id:"biome.text.api_new.data.readers.from_excel"}},[a._v("from_excel "),e("Badge",{attrs:{text:"Function"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("from_excel")]),a._v(" ("),a._v("\n   path: Union[str, List[str]],\n   **params,\n)  -> dask.dataframe.core.DataFrame\n")]),a._v("\n        ")])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("Creates a "),e("code",[a._v("dask.dataframe.DataFrame")]),a._v(' from one or several excel files.\nIncludes a "path column".')]),a._v(" "),e("h2",{attrs:{id:"parameters"}},[a._v("Parameters")]),a._v(" "),e("dl",[e("dt",[e("strong",[e("code",[a._v("path")])])]),a._v(" "),e("dd",[a._v("Path to files")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("params")])])]),a._v(" "),e("dd",[a._v("Extra arguments passed on to "),e("code",[a._v("pandas.read_excel")])])]),a._v(" "),e("h2",{attrs:{id:"returns"}},[a._v("Returns")]),a._v(" "),e("dl",[e("dt",[e("code",[a._v("df")])]),a._v(" "),e("dd",[a._v("A "),e("code",[a._v("dask.dataframe.DataFrame")])])])])])]),a._v(" "),e("dl",[e("h2",{attrs:{id:"biome.text.api_new.data.readers.DataFrameReader"}},[a._v("DataFrameReader "),e("Badge",{attrs:{text:"Class"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[a._v("    "),e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("class")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("DataFrameReader")]),a._v(" ()"),a._v("\n    ")])])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("A base class for read :class:dask.dataframe.DataFrame")])]),a._v(" "),e("h3",[a._v("Subclasses")]),a._v(" "),e("ul",{staticClass:"hlist"},[e("li",[e("a",{attrs:{title:"biome.text.api_new.data.readers.ElasticsearchDataFrameReader",href:"#biome.text.api_new.data.readers.ElasticsearchDataFrameReader"}},[a._v("ElasticsearchDataFrameReader")])])]),a._v(" "),e("dl",[e("h3",{attrs:{id:"biome.text.api_new.data.readers.DataFrameReader.read"}},[a._v("read "),e("Badge",{attrs:{text:"Static method"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("read")]),a._v(" ("),a._v("\n   source: Union[str, List[str]],\n   **kwargs,\n)  -> dask.dataframe.core.DataFrame\n")]),a._v("\n        ")])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("Base class method for read the DataSources as a :class:dask.dataframe.DataFrame")]),a._v(" "),e("h2",{attrs:{id:"parameters"}},[a._v("Parameters")]),a._v(" "),e("dl",[e("dt",[a._v("source: The source information.")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("kwargs")])]),a._v(" : "),e("code",[a._v("extra arguments passed to read method. Each reader should declare needed arguments")])]),a._v(" "),e("dd",[a._v(" ")])]),a._v(" "),e("h2",{attrs:{id:"returns"}},[a._v("Returns")]),a._v(" "),e("dl",[e("dt",[e("code",[a._v("A :class:dask.dataframe.DataFrame read from source")])]),a._v(" "),e("dd",[a._v(" ")])])])])])]),a._v(" "),e("h2",{attrs:{id:"biome.text.api_new.data.readers.ElasticsearchDataFrameReader"}},[a._v("ElasticsearchDataFrameReader "),e("Badge",{attrs:{text:"Class"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[a._v("    "),e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("class")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("ElasticsearchDataFrameReader")]),a._v(" ()"),a._v("\n    ")])])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("Read a :class:dask.dataframe.DataFrame from a elasticsearch index")])]),a._v(" "),e("h3",[a._v("Ancestors")]),a._v(" "),e("ul",{staticClass:"hlist"},[e("li",[e("a",{attrs:{title:"biome.text.api_new.data.readers.DataFrameReader",href:"#biome.text.api_new.data.readers.DataFrameReader"}},[a._v("DataFrameReader")])])]),a._v(" "),e("h3",[a._v("Class variables")]),a._v(" "),e("dl",[e("dt",{attrs:{id:"biome.text.api_new.data.readers.ElasticsearchDataFrameReader.SOURCE_TYPE"}},[e("code",{staticClass:"name"},[a._v("var "),e("span",{staticClass:"ident"},[a._v("SOURCE_TYPE")])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"})])]),a._v(" "),e("dl",[e("h3",{attrs:{id:"biome.text.api_new.data.readers.ElasticsearchDataFrameReader.read"}},[a._v("read "),e("Badge",{attrs:{text:"Static method"}})],1),a._v(" "),e("dt",[e("div",{staticClass:"language-python extra-class"},[e("pre",{staticClass:"language-python"},[e("code",[a._v("\n"),e("span",{staticClass:"token keyword"},[a._v("def")]),a._v(" "),e("span",{staticClass:"ident"},[a._v("read")]),a._v(" ("),a._v("\n   source: Union[str, List[str]],\n   index: str,\n   doc_type: str = '_doc',\n   query: Union[dict, NoneType] = None,\n   es_host: str = 'http://localhost:9200',\n   flatten_content: bool = False,\n   **kwargs,\n)  -> dask.dataframe.core.DataFrame\n")]),a._v("\n        ")])])]),a._v(" "),e("dd",[e("div",{staticClass:"desc"},[e("p",[a._v("Creates a :class:dask.dataframe.DataFrame from a elasticsearch indexes")]),a._v(" "),e("h2",{attrs:{id:"parameters"}},[a._v("Parameters")]),a._v(" "),e("dl",[e("dt",[e("strong",[e("code",[a._v("source")])])]),a._v(" "),e("dd",[a._v("The source param must match with :class:ElasticsearchDataFrameReader.SOURCE_TYPE")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("es_host")])])]),a._v(" "),e("dd",[a._v('The elasticsearch host url (default to "http://localhost:9200")')]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("index")])])]),a._v(" "),e("dd",[a._v("The elasticsearch index")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("doc_type")])])]),a._v(" "),e("dd",[a._v('The elasticsearch document type (default to "_doc")')]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("query")])])]),a._v(" "),e("dd",[a._v("The index query applied for extract the data")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("flatten_content")])])]),a._v(" "),e("dd",[a._v("If True, applies a flatten to all nested data. It may take time to apply this flatten, so\nis deactivate by default.")]),a._v(" "),e("dt",[e("strong",[e("code",[a._v("kwargs")])])]),a._v(" "),e("dd",[a._v("Extra arguments passed to base search method")])]),a._v(" "),e("h2",{attrs:{id:"returns"}},[a._v("Returns")]),a._v(" "),e("dl",[e("dt",[e("code",[a._v("A :class:dask.dataframe.DataFrame with index query results")])]),a._v(" "),e("dd",[a._v(" ")])])])])])])])])}),[],!1,null,null,null);t.default=d.exports}}]);