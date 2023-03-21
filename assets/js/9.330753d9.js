(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{281:function(t,v,_){"use strict";_.r(v);var r=_(14),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"dataset-数据集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dataset-数据集"}},[t._v("#")]),t._v(" dataset 数据集")]),t._v(" "),v("h2",{attrs:{id:"条件查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#条件查询"}},[t._v("#")]),t._v(" 条件查询")]),t._v(" "),v("h3",{attrs:{id:"url"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" url")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("/DataSet/{id}/Query\n")])])]),v("h3",{attrs:{id:"参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("必填")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("数据集id")])]),t._v(" "),v("tr",[v("td",[t._v("properties")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("返回的要素包含哪些属性,以半角逗号分隔,若为null则表示不包含任何属性")])]),t._v(" "),v("tr",[v("td",[t._v("expression")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/giscat-server/api/inout.html#expression"}},[t._v("条件表达式")]),t._v(",若为null则表示不输入过滤条件")],1)]),t._v(" "),v("tr",[v("td",[t._v("bindParams")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/giscat-server/api/inout.html#bindparams"}},[t._v("条件表达式绑定参数")]),t._v(",若为null则表示不输入过滤条件，若expression为null则此参数不生效")],1)]),t._v(" "),v("tr",[v("td",[t._v("f")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("json")]),t._v(" "),v("td",[t._v("返回值格式，支持json和pbf，json返回geojson格式的FeatureCollection数据，pbf返回ProtoFeature格式的FeatureCollection数据")])])])]),t._v(" "),v("h3",{attrs:{id:"返回值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),v("p",[t._v("geojson or ProtoFeature 格式的 FeatureCollection "),v("RouterLink",{attrs:{to:"/giscat-server/api/inout.html#返回值"}},[t._v("返回值详情点击这里")])],1),t._v(" "),v("h2",{attrs:{id:"最邻近查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最邻近查询"}},[t._v("#")]),t._v(" 最邻近查询")]),t._v(" "),v("h3",{attrs:{id:"url-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#url-2"}},[t._v("#")]),t._v(" url")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("/DataSet/{id}/Nearest\n")])])]),v("h3",{attrs:{id:"参数-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数-2"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("必填")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("数据集id")])]),t._v(" "),v("tr",[v("td",[t._v("x")]),t._v(" "),v("td",[t._v("double")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("输入点的经度")])]),t._v(" "),v("tr",[v("td",[t._v("y")]),t._v(" "),v("td",[t._v("double")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("输入点的纬度")])]),t._v(" "),v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("最多返回多少条数据")])]),t._v(" "),v("tr",[v("td",[t._v("properties")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("返回的要素包含哪些属性,以半角逗号分隔,若为null则表示不包含任何属性")])]),t._v(" "),v("tr",[v("td",[t._v("expression")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/giscat-server/api/inout.html#expression"}},[t._v("条件表达式")]),t._v(",若为null则表示不输入过滤条件")],1)]),t._v(" "),v("tr",[v("td",[t._v("bindParams")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/giscat-server/api/inout.html#bindparams"}},[t._v("条件表达式绑定参数")]),t._v(",若为null则表示不输入过滤条件，若expression为null则此参数不生效")],1)]),t._v(" "),v("tr",[v("td",[t._v("f")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("json")]),t._v(" "),v("td",[t._v("返回值格式，支持json和pbf，json返回geojson格式的FeatureCollection数据，pbf返回ProtoFeature格式的FeatureCollection数据")])])])]),t._v(" "),v("h3",{attrs:{id:"返回值-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#返回值-2"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),v("p",[t._v("geojson or ProtoFeature 格式的 FeatureCollection "),v("RouterLink",{attrs:{to:"/giscat-server/api/inout.html#返回值"}},[t._v("返回值详情点击这里")])],1)])}),[],!1,null,null,null);v.default=a.exports}}]);