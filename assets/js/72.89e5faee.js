(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{398:function(e,t,r){"use strict";r.r(t);var o=r(11),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"为什么选择-rollup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-rollup"}},[e._v("#")]),e._v(" 为什么选择 Rollup")]),e._v(" "),t("h2",{attrs:{id:"rollup-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollup-简介"}},[e._v("#")]),e._v(" Rollup 简介")]),e._v(" "),t("p",[e._v("在前端开发中经常可以看见 "),t("code",[e._v("Rollup")]),e._v(" 的身影，比如 "),t("code",[e._v("vue")]),e._v("、"),t("code",[e._v("react")]),e._v(" 以及最近出来的 "),t("code",[e._v("vite")]),e._v("，它们的构建工具都有用到 "),t("code",[e._v("Rollup")]),e._v("。")]),e._v(" "),t("p",[e._v("简单来说 "),t("code",[e._v("Rollup")]),e._v(" 就是一个 JavaScript 模块构建工具。那么它与我们更为熟悉的 "),t("code",[e._v("webpack")]),e._v(" 有什么区别呢？下面将介绍、分析 "),t("code",[e._v("Rollup")]),e._v(" 的特性，及其应用场景。")]),e._v(" "),t("h2",{attrs:{id:"rollup-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollup-特性"}},[e._v("#")]),e._v(" Rollup 特性")]),e._v(" "),t("p",[t("code",[e._v("Rollup")]),e._v(" 使用的是 "),t("code",[e._v("ES6")]),e._v(" 标准的模块机制，也就是常见的 "),t("code",[e._v("import")]),e._v("、"),t("code",[e._v("export")]),e._v("。能支持导入、导出 "),t("code",[e._v("ES")]),e._v(" 模块，同时支持导出 "),t("code",[e._v("common.js")]),e._v("、"),t("code",[e._v("AMD")]),e._v("、"),t("code",[e._v("IIEF")]),e._v(" 等模块、脚本。")]),e._v(" "),t("h2",{attrs:{id:"rollup-优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollup-优势"}},[e._v("#")]),e._v(" Rollup 优势")]),e._v(" "),t("p",[t("code",[e._v("Rollup")]),e._v(" 不仅使用 "),t("code",[e._v("ES")]),e._v(" 模块，而且会对代码进行静态分析（"),t("code",[e._v("ES")]),e._v(" 模块的静态特性，也是静态分析的前提），在构建、编译阶段分析、移除未使用到的代码，也就是所谓的 "),t("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/#root",target:"_blank",rel:"noopener noreferrer"}},[e._v("tree-shaking"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("这也是为什么 "),t("code",[e._v("Rollup")]),e._v(" 的构建输出体积更小、速度更快的原因。")]),e._v(" "),t("h3",{attrs:{id:"es-模块与-commonjs-模块的不同、优劣"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-模块与-commonjs-模块的不同、优劣"}},[e._v("#")]),e._v(" ES 模块与 CommonJS 模块的不同、优劣")]),e._v(" "),t("h4",{attrs:{id:"es-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-模块"}},[e._v("#")]),e._v(" ES 模块")]),e._v(" "),t("p",[t("code",[e._v("ES")]),e._v(" 模块的静态特性，在编译阶段就确定模块的依赖关系，所以不能用于需要在代码运行时才能确定的语法结构中。比如：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("import")]),e._v(" 不能出现在 "),t("code",[e._v("function")]),e._v("、"),t("code",[e._v("if-else")]),e._v(" 中。")]),e._v(" "),t("li",[t("code",[e._v("import")]),e._v(" 的模块名只能是字符串常量，不能是变量。")]),e._v(" "),t("li",[e._v("通过 "),t("code",[e._v("import")]),e._v(" 绑定声明的变量无法重新赋值。")])]),e._v(" "),t("h4",{attrs:{id:"commonjs-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-模块"}},[e._v("#")]),e._v(" CommonJS 模块")]),e._v(" "),t("p",[e._v("与 "),t("code",[e._v("ES")]),e._v(" 模块相反的是，"),t("code",[e._v("CommonJS")]),e._v(" 是动态的，允许更加灵活的使用，比如条件 "),t("code",[e._v("require")]),e._v("、"),t("code",[e._v("require")]),e._v(" 模块名使用变量等，如下。")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" module_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'lodash'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("module_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'lodash'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("但这种便利也让工具难以在编译阶段就能确定模块之间的依赖，不利于静态分析，一定程度地限制了 "),t("code",[e._v("tree-shaking")]),e._v(" 优化。所以从这个角度看 "),t("code",[e._v("ES")]),e._v(" 模块机制是要优于 "),t("code",[e._v("CommonJS")]),e._v(" 等动态模块机制的。")]),e._v(" "),t("h2",{attrs:{id:"rollup-or-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollup-or-webpack"}},[e._v("#")]),e._v(" Rollup or webpack")]),e._v(" "),t("p",[e._v("两者有以下几点对比。")]),e._v(" "),t("ol",[t("li",[t("p",[t("code",[e._v("Rollup")]),e._v(" 支持输出 "),t("code",[e._v("ES")]),e._v(" 模块，"),t("code",[e._v("webpack")]),e._v(" 暂不支持。目前，2020 年 3 月 13 日，从官网中可知 "),t("code",[e._v("webpack")]),e._v(" 的 "),t("a",{attrs:{href:"https://webpack.js.org/configuration/output/#librarytarget-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("输出 ES 模块"),t("OutboundLink")],1),e._v("目前还是实验性特性。所以使用 "),t("code",[e._v("Rollup")]),e._v(" 构建速度更快、输出体积更小，更容易进行 "),t("code",[e._v("tree-shaking")]),e._v(" 。")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("webpack")]),e._v(" 有更成熟、完整的生态，对于多数主流框架、应用基础开发都有成熟的工具链。")])])]),e._v(" "),t("p",[e._v("综上，如果是开发一个应用，那么应该选择 "),t("code",[e._v("webpack")]),e._v("，其生态能满足应用开发复杂、多变的需求。而开发一个库时，功能往往比较单一，加之库的体积是使用者所关注的重要一点，所以使用 "),t("code",[e._v("Rollup")]),e._v(" 更合适。")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"http://rollupjs.org/guide/en/#introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup-introduction"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://rollupjs.org/guide/en/#faqs",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup-faqs"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"}},[e._v("import"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module#import-%E5%91%BD%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"}},[e._v("import-命令"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/#root",target:"_blank",rel:"noopener noreferrer"}},[e._v("tree-shaking"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);