(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{281:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"查询类接口的输入输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询类接口的输入输出"}},[t._v("#")]),t._v(" 查询类接口的输入输出")]),t._v(" "),s("p",[t._v("数据集、图层、地图都有两个查询接口:")]),t._v(" "),s("h2",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),s("p",[t._v("传入查询"),s("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("条件表达式"),s("OutboundLink")],1),t._v("，返回符合查询条件的数据")]),t._v(" "),s("h2",{attrs:{id:"nearest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nearest"}},[t._v("#")]),t._v(" Nearest")]),t._v(" "),s("p",[t._v("传入一个点，返回距离这个点最近的n条数据，也支持用"),s("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("条件表达式"),s("OutboundLink")],1),t._v("\n筛选后在结果中返回最近的n条数据")]),t._v(" "),s("h2",{attrs:{id:"输入参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入参数"}},[t._v("#")]),t._v(" 输入参数")]),t._v(" "),s("p",[t._v("绝大部分接口都包含两个输入参数：表达式expression、表达式绑定的参数bindParams。")]),t._v(" "),s("h2",{attrs:{id:"expression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expression"}},[t._v("#")]),t._v(" expression")]),t._v(" "),s("p",[t._v("expression是按mapbox条件表达式书写的字符串，仅实现了与要素筛选相关的lookup decision string math类型，并增加了spatial类型用于计算空间关系。")]),t._v(" "),s("p",[t._v("lookup decision string math的用法与"),s("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mapbox官方文档"),s("OutboundLink")],1),t._v("一致。")]),t._v(" "),s("p",[t._v("spatial类型新增了四个函数：")]),t._v(" "),s("h3",{attrs:{id:"bboxintersects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bboxintersects"}},[t._v("#")]),t._v(" bboxIntersects")]),t._v(" "),s("p",[t._v("判断输入的bbox是否与要素的geometry相交(envIntersects)")]),t._v(" "),s("p",[t._v("Syntax")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bboxIntersects"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    xmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ymin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    xmax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ymax\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean\n")])])]),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bboxIntersects"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21.3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"geointersects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geointersects"}},[t._v("#")]),t._v(" geoIntersects")]),t._v(" "),s("p",[t._v("判断输入的wkt geometry是否与要素的geometry相交")]),t._v(" "),s("p",[t._v("Syntax")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoIntersects"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  wkt_string\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean\n")])])]),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoIntersects"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LINESTRING(100 20,120 30)"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"bboxintersection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bboxintersection"}},[t._v("#")]),t._v(" bboxIntersection")]),t._v(" "),s("p",[t._v("输入bbox，若geometry与要素相交则裁剪要素的geometry并返回裁剪后的要素，若不相交则返回null")]),t._v(" "),s("p",[t._v("Syntax")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bboxIntersection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    xmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ymin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    xmax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ymax\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean\n")])])]),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bboxIntersection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21.3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"geointersection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geointersection"}},[t._v("#")]),t._v(" geoIntersection")]),t._v(" "),s("p",[t._v("输入geometry，若geometry与要素相交则裁剪要素的geometry并返回裁剪后的要素，若不相交则返回null")]),t._v(" "),s("p",[t._v("Syntax")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoIntersection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  wkt_string\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Feature\n")])])]),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoIntersection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LINESTRING(100 20,120 30)"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"bindparams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bindparams"}},[t._v("#")]),t._v(" bindParams")]),t._v(" "),s("p",[t._v("绑定参数是一个json字符串，可用绑定参数对expression进行参数绑定。")]),t._v(" "),s("p",[t._v("例如表达式"),s("code",[t._v('["concat", "$a","$b"]')]),t._v("，对其传入绑定参数"),s("code",[t._v('{"$a":"hello","$b":"world"}')]),t._v("\n时，表达式被解析为"),s("code",[t._v('["concat", "hello","world"]')]),t._v('，表达式输出结果"helloworld"。')]),t._v(" "),s("p",[t._v("换言之，所有$开头的字符串都会被认定为绑定参数，如果字符串的真实值确实以$开头，可通过绑定参数传入具体值来解决，\n例如，希望表达式"),s("code",[t._v('["concat", "$a","sss"]')]),t._v('输出结果为"$asss"，则可通过传入参数'),s("code",[t._v('{"$a":"$a"}')]),t._v("来解决。")]),t._v(" "),s("p",[t._v("使用参数绑定可减少解析时的性能消耗。")]),t._v(" "),s("h2",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),s("p",[t._v("返回值支持两种格式："),s("a",{attrs:{href:"https://geojson.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("geojson"),s("OutboundLink")],1),t._v("和ProtoFeature，默认格式是geojson")]),t._v(" "),s("p",[t._v("其中，ProtoFeature是giscat基于"),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/432875529",target:"_blank",rel:"noopener noreferrer"}},[t._v("protobuf"),s("OutboundLink")],1),t._v("\n设计的一种针对feature对象的压缩规范，其message定义文件"),s("a",{attrs:{href:"https://github.com/codingmiao/giscat/blob/main/giscat-vector/giscat-vector-pojo/src/main/resources/ProtoFeature.proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里"),s("OutboundLink")],1),t._v("\n。\n在数据量较大时，ProtoFeature比geojson有更高的压缩率和性能。同时giscat配备了ProtoFeature字节码还原为json对象的"),s("a",{attrs:{href:"https://github.com/codingmiao/giscat/tree/main/giscat-vector/giscat-vector-pojo#%E4%B8%8Eprotobuf%E4%BA%92%E8%BD%AC",target:"_blank",rel:"noopener noreferrer"}},[t._v("java工具"),s("OutboundLink")],1),t._v("\n以及"),s("a",{attrs:{href:"https://www.npmjs.com/package/giscatjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("js工具"),s("OutboundLink")],1),t._v("，方便大家快捷地在java和js中使用。")])])}),[],!1,null,null,null);s.default=e.exports}}]);