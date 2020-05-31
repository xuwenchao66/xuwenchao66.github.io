# Babel

前端开发中经常能看到Babel这字样，同样的有`@babel/polyfill`，`@babel/xxx`等等。

我们只知道这是一个编译器，但很可能不知道为什么需要，很多时候在构建工具加上某个`Babel`插件只是因为“网上搜到要加这个代码才能正常运行”。

现在根据自己对官方文档以及开发过程中的实践、理解，来解释什么是`Babel`，及其相关常用的工具链，和为什么需要它们。

## 什么是Babel

打开`Babel`的官网就能看到那显眼的slogan，**Babel is a JavaScript compiler**，一句话总结`Babel`就是一个`JavaScript`编译器。

`Babel`是一系列的工具链，主要用于将`ECMAScript 2015+`的`JavaScript`代码转换成能够运行在现在或者更古老的浏览器、环境等的兼容版本代码。

从官方文档中可知`Babel`主要能做以下几个事情：

1. 转换语法。

2. Polyfill 实现目标环境中缺少的功能 (通过 `@babel/polyfill`)。

3. 源代码转换 (codemods)。

比如下方ES2015的箭头函数，在IE11执行的话是会报语法错误的。

```js
[1, 2, 3].map((n) => n + 1);
```

为了能够使用现代`JavaScript`的语法，同时又要保证在低版本浏览器中兼容运行，可以通过Babel将箭头函数编译成所有浏览器都能识别的`function`。

```js
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

## 什么是@babel/polyfill

[babel-polyfill](https://babeljs.io/docs/en/babel-polyfill)是`Babel`的工具链之一，它包含了[regenerator runtime](https://github.com/facebook/regenerator)和[core-js](https://github.com/zloirock/core-js)

[regenerator runtime](https://github.com/facebook/regenerator)运行时库，能够将`generators`、`yield`、`async`等编译转换成拥有相同功能的`ES5`兼容代码。

[core-js](https://github.com/zloirock/core-js)，现代`JavaScript`标准库，提供了`promises`，`symbols`，`collections``iterators`，`typed arrays`等等
全局变量、实例方法等。

通过`babel-polyfill`能够模拟完整的`ES2015+`环境，通常建议在应用中使用，而不是在工具库中使用。

这意味着，通过`babel-polyfill`你能够使用新的内建函数，比如`Promise`，静态方法`Array.from`或者`Object.assign`，实例方法`Array.prototype.includes`和`generator`函数（`generators`、`yield`、`async`等的实现）。这些`polyfill`和原生`prototype`上的方法一样被添加到了全局作用域中。

总结，`Babel`（语法编译）+ `polyfill`（api 垫片），才能够完整的模拟一套**完整的**`ES2015+` 环境。

注意，在`Babel` 7.4.0中，`@babel/polyfill`已经被弃用了，取而代之的是直接引用`core-js/stable`和`regenerator-runtime/runtime`

```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

## 什么是@babel/preset-env

[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

上面提到了`babel-polyfill`，那么我们直接在应用入口直接`import "core-js`就可以了？是，但这把所有`polyfill`代码都引入了，不管应用中有没有用到，造成应用体积过大。

这时候能够想到，应用中用到了什么新的api，就在代码里面按需`import`不就可以了吗？比如用到了`padStart`，那么就在代码中`import "core-js/modules/es.string.pad-start"`。这样是解决了多余代码的问题，但是这样开发、维护成本很高，每次要用一个api都要手动`import`对应的`polyfill`进来，想想就可怕。

[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)就是用来解决上面提到的问题，它能够自动的帮我们按需引入`polyfill`。

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

`useBuiltIns`参数决定`@babel/preset-env`如何处理`polyfills`。

该参数值可以是`"usage"，"entry"，false`其中之一，默认是`false`。

`useBuiltIns: 'entry'`，会把应用入口的引入`polyfills`语句替换为按需引用语句，比如：

输入:

```js
import "core-js"
```

输出：

```js
import "core-js/modules/es.string.pad-start"
import "core-js/modules/es.string.pad-end"
```

`useBuiltIns: 'usage'`，无需手动引入`polyfill`，会按需引入使用到的api，比如：

输入:

```js
var a = new Promise()
```

输出：

```js
import "core-js/modules/es.promise"
var a = new Promise()
```

`useBuiltIns: false`，不会自动引入`polyfill`。

## 什么是@babel/runtime和@babel/plugin-transform-runtime

[@babel/runtime](https://babeljs.io/docs/en/next/babel-runtime.html)包含了`Babel`模块运行时帮助函数以及`regenerator-runtime`。

[@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)这是一个能够复用`Babel`注入的帮助函数的插件，通过它能够节省代码大小。这里的**transform-runtime**就指的是`@babel/runtime`，所以使用`@babel/plugin-transform-runtime`之前也必须安装`@babel/runtime`

注意：实例方法比如`"foobar".includes("foo")`，不会通过`transform-runtime`注入，你可以使用`core-js`或者`@babel/preset-env`来进行`polyfill`。

看完官方简单的介绍应该还有点模糊，下面用官方的例子再来解释下。

比如下面的代码：

```js
class Person {}
```

通过babel编译后变成：

```js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person() {
  _classCallCheck(this, Person);
};
```

这里我们可以看到编译出来了一个全局的帮助函数`_classCallCheck`，这个在应用中是没问题，但如果在工具库使用就会产生以下问题：

1. 污染了全局变量。

2. 假如工具库A和工具库B中都编译出了`_classCallCheck`这就产生了冗余重复的代码，增大了代码体积。

而且上面的两个问题是用户无法感知的，如果我们使用了`transform-runtime`之后编译成如下代码：

```js
var _classCallCheck2 = require("@babel/runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Person = function Person() {
  (0, _classCallCheck3.default)(this, Person);
};
```

这里我们可以看到`_classCallCheck `作为依赖引入了，而不是直接编译进入代码，`transform-runtime`就是提供了这么一个沙盒环境，避免了污染全局变量、重复的`babel`帮助函数代码等问题。


## 参考

[Babel](https://babeljs.io/)