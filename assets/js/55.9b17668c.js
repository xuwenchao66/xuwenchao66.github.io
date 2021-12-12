(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{480:function(e,t,r){"use strict";r.r(t);var o=r(31),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"为什么选择-rollup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-rollup"}},[e._v("#")]),e._v(" 为什么选择 Rollup")]),e._v(" "),r("h2",{attrs:{id:"rollup-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rollup-简介"}},[e._v("#")]),e._v(" Rollup 简介")]),e._v(" "),r("p",[e._v("在前端开发中经常可以看见 "),r("code",[e._v("Rollup")]),e._v(" 的身影，比如 "),r("code",[e._v("vue")]),e._v("、"),r("code",[e._v("react")]),e._v(" 以及最近出来的 "),r("code",[e._v("vite")]),e._v("，它们的构建工具都有用到 "),r("code",[e._v("Rollup")]),e._v("。")]),e._v(" "),r("p",[e._v("简单来说 "),r("code",[e._v("Rollup")]),e._v(" 就是一个 JavaScript 模块构建工具。那么它与我们更为熟悉的 "),r("code",[e._v("webpack")]),e._v(" 有什么区别呢？下面将介绍、分析 "),r("code",[e._v("Rollup")]),e._v(" 的特性，及其应用场景。")]),e._v(" "),r("h2",{attrs:{id:"rollup-特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rollup-特性"}},[e._v("#")]),e._v(" Rollup 特性")]),e._v(" "),r("p",[r("code",[e._v("Rollup")]),e._v(" 使用的是 "),r("code",[e._v("ES6")]),e._v(" 标准的模块机制，也就是常见的 "),r("code",[e._v("import")]),e._v("、"),r("code",[e._v("export")]),e._v("。能支持导入、导出 "),r("code",[e._v("ES")]),e._v(" 模块，同时支持导出 "),r("code",[e._v("common.js")]),e._v("、"),r("code",[e._v("AMD")]),e._v("、"),r("code",[e._v("IIEF")]),e._v(" 等模块、脚本。")]),e._v(" "),r("h2",{attrs:{id:"rollup-优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rollup-优势"}},[e._v("#")]),e._v(" Rollup 优势")]),e._v(" "),r("p",[r("code",[e._v("Rollup")]),e._v(" 不仅使用 "),r("code",[e._v("ES")]),e._v(" 模块，而且会对代码进行静态分析（"),r("code",[e._v("ES")]),e._v(" 模块的静态特性，也是静态分析的前提），在构建、编译阶段分析、移除未使用到的代码，也就是所谓的 "),r("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/#root",target:"_blank",rel:"noopener noreferrer"}},[e._v("tree-shaking"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("这也是为什么 "),r("code",[e._v("Rollup")]),e._v(" 的构建输出体积更小、速度更快的原因。")]),e._v(" "),r("h3",{attrs:{id:"es-模块与-commonjs-模块的不同、优劣"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es-模块与-commonjs-模块的不同、优劣"}},[e._v("#")]),e._v(" ES 模块与 CommonJS 模块的不同、优劣")]),e._v(" "),r("h4",{attrs:{id:"es-模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es-模块"}},[e._v("#")]),e._v(" ES 模块")]),e._v(" "),r("p",[r("code",[e._v("ES")]),e._v(" 模块的静态特性，在编译阶段就确定模块的依赖关系，所以不能用于需要在代码运行时才能确定的语法结构中。比如：")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("import")]),e._v(" 不能出现在 "),r("code",[e._v("function")]),e._v("、"),r("code",[e._v("if-else")]),e._v(" 中。")]),e._v(" "),r("li",[r("code",[e._v("import")]),e._v(" 的模块名只能是字符串常量，不能是变量。")]),e._v(" "),r("li",[e._v("通过 "),r("code",[e._v("import")]),e._v(" 绑定声明的变量无法重新赋值。")])]),e._v(" "),r("h4",{attrs:{id:"commonjs-模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-模块"}},[e._v("#")]),e._v(" CommonJS 模块")]),e._v(" "),r("p",[e._v("与 "),r("code",[e._v("ES")]),e._v(" 模块相反的是，"),r("code",[e._v("CommonJS")]),e._v(" 是动态的，允许更加灵活的使用，比如条件 "),r("code",[e._v("require")]),e._v("、"),r("code",[e._v("require")]),e._v(" 模块名使用变量等，如下。")]),e._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" module_name "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'lodash'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("module_name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'lodash'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("但这种便利也让工具难以在编译阶段就能确定模块之间的依赖，不利于静态分析，一定程度地限制了 "),r("code",[e._v("tree-shaking")]),e._v(" 优化。所以从这个角度看 "),r("code",[e._v("ES")]),e._v(" 模块机制是要优于 "),r("code",[e._v("CommonJS")]),e._v(" 等动态模块机制的。")]),e._v(" "),r("h2",{attrs:{id:"rollup-or-webpack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rollup-or-webpack"}},[e._v("#")]),e._v(" Rollup or webpack")]),e._v(" "),r("p",[e._v("两者有以下几点对比。")]),e._v(" "),r("ol",[r("li",[r("p",[r("code",[e._v("Rollup")]),e._v(" 支持输出 "),r("code",[e._v("ES")]),e._v(" 模块，"),r("code",[e._v("webpack")]),e._v(" 暂不支持。目前，2020 年 3 月 13 日，从官网中可知 "),r("code",[e._v("webpack")]),e._v(" 的 "),r("a",{attrs:{href:"https://webpack.js.org/configuration/output/#librarytarget-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("输出 ES 模块"),r("OutboundLink")],1),e._v("目前还是实验性特性。所以使用 "),r("code",[e._v("Rollup")]),e._v(" 构建速度更快、输出体积更小，更容易进行 "),r("code",[e._v("tree-shaking")]),e._v(" 。")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("webpack")]),e._v(" 有更成熟、完整的生态，对于多数主流框架、应用基础开发都有成熟的工具链。")])])]),e._v(" "),r("p",[e._v("综上，如果是开发一个应用，那么应该选择 "),r("code",[e._v("webpack")]),e._v("，其生态能满足应用开发复杂、多变的需求。而开发一个库时，功能往往比较单一，加之库的体积是使用者所关注的重要一点，所以使用 "),r("code",[e._v("Rollup")]),e._v(" 更合适。")]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"http://rollupjs.org/guide/en/#introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup-introduction"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://rollupjs.org/guide/en/#faqs",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup-faqs"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"}},[e._v("import"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module#import-%E5%91%BD%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"}},[e._v("import-命令"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/#root",target:"_blank",rel:"noopener noreferrer"}},[e._v("tree-shaking"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);