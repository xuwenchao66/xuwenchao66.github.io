# Babel 实践应用

在[Babel 入门](/blogs/babel.html)一文中我们已经对 Babel 有了基本的认知，下面会从不同场景，结合实践来讨论在工程中 Babel 的推荐实践方案。

下面的 demo 代码都可以从[https://github.com/xuwenchao66/babel-practice](https://github.com/xuwenchao66/babel-practice)中进行查阅。

## 搭建简易实践环境

因为本文只讲 Babel，所以不会去涉及别的构建工具，而是尽可能的用 Babel 官方工具链来完成本次相关 demo。当我们了解 Babel 本身之后，搭配其他工具使用自然也是水到渠成。

这里使用官方的 @babel/cli 来对代码进行编译输出， 参考[https://babeljs.io/setup#installation](https://babeljs.io/setup#installation)。

- 安装依赖

  使用`npm init`初始化一个项目之后，执行下方命令安装使用@babel/cli 的必要依赖。

  ```sh
  npm install --save-dev @babel/core @babel/cli
  ```

- 编写测试代码

  我们尽可能的贴近真实的应用场景，在一个应用中会用到 ES6+ 的语法糖，Promise、Set 等内建全局对象，以及 includes 等实例方法。所以新建一个 src/app.js。

  ```js
  const fn = async () => {}
  const promise = new Promise()
  const set = new Set()
  const array = [1, 2, 3]
  array.includes(1)
  ```

- 添加编译命令脚本

  在 package.json 中的 script 中加上 build 命令。

  ```json
  "scripts": {
    "build": "babel src -d lib"
  }
  ```

最后，我们执行`npm run build`。然后可以在 lib/app.js 查看编译出来的内容。

```js
const fn = async () => {}
const promise = new Promise()
const set = new Set()
const array = [1, 2, 3]
array.includes(1)
```

这里可以看到编译出来的代码与原有的基本一样，这也进一步验证了，Babel 只负责代码转换，其它功能都需要具体配置、插件来实现。

## 开发应用的实践、分析

大多数开发者在工作中都涉及应用开发。当我们开发一个 web 应用的时候，希望代码能在较低版本的浏览器中运行，但又希望使用新的语法糖。这时候就能通过 Babel 来完成这一任务。

### 安装配置 @babel/preset-env

在[Babel 入门](/blogs/babel.html)了解到，@babel/preset-env 是一个常用的预设，能够按需把代码编译至兼容低版本浏览器的版本，甚至通过配置之后能够按需添加 polyfill。

- 安装 @babel/preset-env。

  ```sh
  npm install @babel/preset-env --save-dev
  ```

- 新建 babel.config.json，配置使用 @babel/preset-env。

  修改 babel.config.json 配置文件。

  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

  再次执行编译，查看输出文件。

  ```js
  'use strict'
  var fn = function fn() {}
  var promise = new Promise()
  var set = new Set()
  var array = [1, 2, 3]
  array.includes(1)
  ```

  可以看到箭头函数、const 已经编译成 es5 的兼容版本了，但是 Promise、Set 以及实例方法 includes 都没有添加 polyfill，所以当前配置是不够的。

- 配置 @babel/preset-env 的 useBuiltIns 和 corejs 选项。

  通过[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)的文档可知，自动 polyfill 是一个可选项，默认是不打开的，需要通过[useBuiltIns](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)这个参数来告诉 @babel/preset-env 应该如何处理 polyfill 。

  useBuiltIns 有三个可选值，分别是。

  - `false`， 默认值就是 false，即不会自动添加 polyfill。
  - `'entry'`， 需要在应用入口中分别手动引入一次 `core-js` 和 `regenerator-runtime/runtime` ，然后就会根据所配置的浏览器环境引入对应的所有 polyfill，不管你有没有用上。
  - `'usage'`，无需任何手动引入，就会自动按需引入 polyfill。

  所以这里选择更加智能的 `'usage'` 。

  自动 polyfill，也就是说会导入提供 polyfill 的 core-js 的对应模块。所以还需要安装 core-js 作为依赖。

  目前常用的有 core-js@3 和 core-js@2，简单来说 3 跟 2 的对比就是，3 包含了更多新的、甚至处提案阶段的 polyfill。所以建议使用更加全面的 core-js@3。

  安装 core-js@3。

  ```sh
  npm install core-js@3 --save
  ```

  修改 babel.config.json 配置文件，指定 useBuiltIns 和使用 core-js@3。

  ```json
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "corejs": "3"
        }
      ]
    ]
  }
  ```

  再次编译，查看文件。

  ```js
  'use strict'

  require('core-js/modules/es.promise.js')

  require('core-js/modules/es.object.to-string.js')

  require('core-js/modules/es.set.js')

  require('core-js/modules/es.string.iterator.js')

  require('core-js/modules/es.array.iterator.js')

  require('core-js/modules/web.dom-collections.iterator.js')

  require('core-js/modules/es.array.includes.js')

  var fn = function fn() {}

  var promise = new Promise()
  var set = new Set()
  var array = [1, 2, 3]
  array.includes(1)
  ```

  这次可以看见，代码成功编译以及导入了必要的 polyfill 了。

## 开发库的实践、分析

开发一个库的时候，有两点是必须要关注到的。

1. 库的体积。
2. 尽可能不污染使用方的环境。

如果使用上方配置来对库进行编译，可以发现引入了的 polyfill 会污染全局环境。比如下方的 polyfill 导入。

```js
require('core-js/modules/es.promise.js')
require('core-js/modules/es.array.includes.js')
```

而且，Babel 在编译的时候，会给代码添加帮助函数，比如编译一个 class。

```js
class Test {
  log() {
    console.log('Babel')
  }
}
```

编译后变成，头部的几个函数 `_classCallCheck`、`_defineProperties`、`_createClass` 就是 Babel 的帮助函数，如果一个库有多个文件，那么就会产生许多重复的帮助函数代码，让使用方的应用体积变大。

```js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

var Test = /*#__PURE__*/ (function() {
  function Test() {
    _classCallCheck(this, Test)
  }

  _createClass(Test, [
    {
      key: 'log',
      value: function log() {
        console.log('Babel')
      }
    }
  ])

  return Test
})()
```

为了解决这些问题，可以使用[@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)。

### @babel/plugin-transform-runtime

@babel/plugin-transform-runtime 能够复用 Babel 的帮助函数，而且能使用不会污染全局变量的方式来注入 polyfill。

- 安装依赖

  ```sh
  npm install --save-dev @babel/plugin-transform-runtime
  ```

  通过 @babel/plugin-transform-runtime 来注入 polyfill 的话，要使用 @babel/runtime-corejs3 来替代原有的 core-js@3。

  ```sh
  npm install --save @babel/runtime-corejs3
  ```

- 修改配置文件。

  因为现在是通过 @babel/runtime-corejs3 来注入 polyfill 了，所以去除 @babel/preset-env 的 polyfill 配置，增加@babel/plugin-transform-runtime 及其 corejs 配置。

  ```json
  {
    "presets": [["@babel/preset-env"]],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {
          "corejs": "3"
        }
      ]
    ]
  }
  ```

  再次构建，文件内容如下。

  ```js
  'use strict'

  var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault')

  var _classCallCheck2 = _interopRequireDefault(
    require('@babel/runtime-corejs3/helpers/classCallCheck')
  )

  var _createClass2 = _interopRequireDefault(
    require('@babel/runtime-corejs3/helpers/createClass')
  )

  var _promise = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/promise')
  )

  var _set = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/set')
  )

  var _includes = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/instance/includes')
  )

  var fn = function fn() {}

  var promise = new _promise['default']()
  var set = new _set['default']()
  var array = [1, 2, 3]
  ;(0, _includes['default'])(array).call(array, 1)

  var Test = /*#__PURE__*/ (function() {
    function Test() {
      ;(0, _classCallCheck2['default'])(this, Test)
    }

    ;(0, _createClass2['default'])(Test, [
      {
        key: 'log',
        value: function log() {
          console.log('Babel')
        }
      }
    ])
    return Test
  })()
  ```

  可以看到 Babel 的帮助函数不再是直接编译进来，而是变成了一句句导入语句。而且 polyfill 的导入也不再是直接导入挂载至全局，而是声明为一个变量别名，通过别名来引用。

  这样代码体积以及全局污染的问题就解决了。

## 直接看结论

### 开发应用的推荐配置

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3"
      }
    ]
  ]
}
```

### 开发库的推荐配置

```json
{
  "presets": [["@babel/preset-env"]],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": "3"
      }
    ]
  ]
}
```
