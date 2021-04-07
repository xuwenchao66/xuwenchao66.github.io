# Babel 入门

前端开发中经常能看到 `Babel` 这字样，比如 `@babel/polyfill`，`@babel/preset-env`。

我们有可能不知道为什么需要 `Babel`，很多时候在构建工具加上某个 `Babel` 插件只是因为“网上搜到要加这个代码才能正常运行”。

下面根据自己对官方文档以及开发过程中的实践、理解，来解释什么是 `Babel`，及与其相关的常用工具链，为什么需要它们。

## 什么是 Babel

打开 `Babel` 的官网就能看到那显眼的 slogan，**Babel is a JavaScript compiler**，一句话总结 `Babel` 就是一个 `JavaScript` 编译器。

`Babel` 是一个的工具链，主要用于将 `ECMAScript 2015+` 的 `JavaScript` 代码转换成能够运行在现在或者更古老的浏览器环境的兼容版本代码。

从官方文档中可知 `Babel` 主要能做以下几个事情：

1. 转换语法。

2. `Polyfill` 实现目标环境中缺少的功能 (通过 `@babel/polyfill`)。

3. 源代码转换 (codemods)。

比如下方 `ES2015` 的箭头函数，在低版本 IE 执行的话是会错的，因为无法识别、解析 `ES6` 的语法糖，比如箭头函数。

```js
;[1, 2, 3].map((n) => n + 1)
```

为了能够使用现代 `JavaScript` 的语法，同时又要保证在低版本浏览器中兼容运行，可以使用 `Babel` 将箭头函数编译成所有浏览器都能识别的 `function`。

```js
;[1, 2, 3].map(function(n) {
  return n + 1
})
```

## Babel 中的基本概念

### plugins

Babel 只是一个编译器，它就像一个纯函数 `const babel = code => code;` 一样，不做任何事情，解析然后生成一样的代码。所以你需要添加、使用插件 `plugins` 来做其它事情。

比如想要将箭头函数转换成 function，就可以使用官方的 [@babel/plugin-transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)。

可从 [https://babeljs.io/docs/en/plugins](https://babeljs.io/docs/en/plugins) 了解插件的更多细节。

### presets

从上面可知 `Babel` 的具体功能都由 `plugins` 来实现，那么如果要编译一个应用，我们岂不得添加一堆插件、参数配置？

为了解决这个问题，`presets`（预置）出现了。`presets` 可以理解为是 `plugins` 、部分配置的集合，有了 `presets` 就可以不用再单独配置一个个 `plugin`、参数了，直接使用已经组合、配置好的 `presets` 即可。

## 常用工具链

### @babel/polyfill

[babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) 包含了 [core-js](https://github.com/zloirock/core-js) 和 [regenerator runtime](https://github.com/facebook/regenerator)。

`core-js`，现代 `JavaScript` 标准库，提供了 `ES6+` 的 `promises`，`symbols`，`collections`、`iterators` ，`typed arrays` 等全局变量、实例方法等填充库。

`regenerator runtime` 运行时库，能够将 `generators`、`yield`、`async` 等编译转换成拥有相同功能的 `ES5` 兼容代码。

这意味着，通过 `babel-polyfill` 你能够使用新的内建函数，比如 `Promise`，静态方法 `Array.from` 或者 `Object.assign`，实例方法 `Array.prototype.includes` 和 `generator` 函数（`generators`、 `yield`、 `async` 等的实现）。这些 `polyfill` 和原生 `prototype` 上的方法一样被添加到了全局作用域中。

所以，`Babel`（语法编译）+ `polyfill`（api 垫片），才能够完整的模拟一套**完整的** `ES2015+` 环境。

注意，在 `Babel` 7.4.0 中，`@babel/polyfill` 已经被弃用了，取而代之的是 `core-js/stable` 和 `regenerator-runtime/runtime`

```js
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```

### @babel/preset-env

[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 是一个预置集合，它能够根据目标浏览器环境（可配置的 targets）**自动**进行语法转换、甚至添加 `polyfill`，而无需进行复杂的配置、管理。

常见配置如下：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

`useBuiltIns` 参数决定 `@babel/preset-env` 如何处理 `polyfills`。

该参数值可以是 `"usage"`，`"entry"`，`false` 其中之一，默认是 `false`。

`useBuiltIns`: `'entry'`，会把应用入口引入的完整 `polyfills` 语句替换为目标环境所需要的所有 `polyfill` 引用语句，比如：

输入:

```js
import 'core-js'
```

输出：

```js
import 'core-js/modules/es.string.pad-start'
import 'core-js/modules/es.string.pad-end'
```

`useBuiltIns: 'usage'`，无需手动引入`polyfill`，会按需引入使用到的 api，比如：

输入:

```js
var a = new Promise()
```

输出：

```js
import 'core-js/modules/es.promise'
var a = new Promise()
```

`useBuiltIns: false`，不会自动引入`polyfill`。

### @babel/runtime & @babel/plugin-transform-runtime

[@babel/runtime](https://babeljs.io/docs/en/next/babel-runtime.html) 包含了 `Babel` 模块运行时帮助函数以及 `regenerator-runtime`。

[@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) 这是一个能够复用 `Babel` 注入的帮助函数的插件，通过它能够节省代码大小。这里的**transform-runtime**就指的是 `@babel/runtime`，所以使用 `@babel/plugin-transform-runtime` 之前也必须安装 `@babel/runtime`。

看完官方简单的介绍应该还有点模糊，下面用官方的例子再来解释下。

比如下面的代码：

```js
class Person {}
```

通过 `Babel` 编译后变成：

```js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Person = function Person() {
  _classCallCheck(this, Person)
}
```

这里我们可以看到编译出来了一个全局的帮助函数 `_classCallCheck` ，这个在应用中是没问题，但如果在工具库使用就会产生以下问题：

1. 污染了全局变量。

2. 假如工具库 A 和工具库 B 中都编译出了 `_classCallCheck` 就会产生了冗余重复的代码，增加了文件体积。

如果我们使用了 `transform-runtime` 之后编译成如下代码：

```js
var _classCallCheck2 = require('@babel/runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var Person = function Person() {
  ;(0, _classCallCheck3.default)(this, Person)
}
```

这里我们可以看到 `_classCallCheck` 作为依赖引入了，而不是直接编译进入代码，`transform-runtime` 就是提供了这么一个沙盒环境，避免了污染全局变量、重复的 `Babel` 帮助函数代码等问题。

## 参考

[Babel](https://babeljs.io/)
