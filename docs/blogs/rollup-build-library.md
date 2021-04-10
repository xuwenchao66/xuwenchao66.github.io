# 使用 rollup 构建工具库

在 [为什么选择 rollup](/blogs/rollup-why.html) 一文中了解到 `rollup` 适合用来构建工具库，下面将贴近生产环境来对此进行实践、分析。

本文中的示例代码可以在 [https://github.com/xuwenchao66/rollup-practice](https://github.com/xuwenchao66/rollup-practice) 中查阅。

## 项目基础搭建

新建库主入口文件 `index.js`。一个工具库可能会依赖别的库，而且会使用 `ES6+` 的语法，所以一个 `index.js` 可如下方所示。

```js
import _sum from 'lodash/sum'
export const sum = (numbers = []) => new Promise(_sum(numbers))
```

## 常用的 rollup 工具链安装、配置

安装配置 `rollup` 的常用插件，下方使用到的插件就不再一一介绍了，可从 [rollup 基础实践](/blogs/rollup-basic-practice.html) 一文或官方文档中了解插件的作用。

### 基础依赖安装

```sh
npm i rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs -D
```

### 新建、配置 rollup.config.js

使用插件，配置出、入口，为了保证浏览器以及服务器端都可使用该库，同时输出了 `ES` 以及 `commonjs` 两种模块。

```js
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'

export default {
  input: `index.js`,
  output: [
    {
      file: `dist/index.es.js`,
      format: 'es'
    },
    {
      file: `dist/index.cjs.js`,
      format: 'cjs'
    }
  ],
  plugins: [nodeResolve(), commonjs()]
}
```

这时候执行构建，构建成功。为了保证代码能在低版本浏览器运行，还需要添加配置 `Babel` 来进行语法转译、`polyfill` 等。

### 安装配置 Babel

- 安装 [@rollup/plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel)。

  ```sh
  npm i @rollup/plugin-babel -D
  ```

- 配置 @rollup/plugin-babel。

  修改配置文件。

  ```js
  import { nodeResolve } from '@rollup/plugin-node-resolve'
  import commonjs from '@rollup/plugin-commonjs'
  import { babel } from '@rollup/plugin-babel'

  export default {
    ...,
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: 'runtime'
      })
    ]
  }
  ```

- 配置 Babel。

  可从 [Babel 实践应用](/blogs/babel-practice.html) 一文中了解了构建库时的 `Babel` 推荐配置。

  安装依赖。

  ```sh
  npm install --save-dev @babel/plugin-transform-runtime @babel/preset-env
  npm install --save @babel/runtime-corejs3
  ```

  创建 `babel.config.json` 配置文件。

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

  再次执行构建，能看见 `ES6+` 的语法都编译为 `ES5`，并且导入了相关的 `polyfill` 了，至此 `Babel` 的配置完成。

### 安装配置 ESLint

为了能够尽早发现低级错误以及统一代码风格，一个项目中 `ESLint` 也是少不了的。

- 安装依赖。

  ```sh
  npm install eslint @rollup/plugin-eslint --save-dev
  ```

- rollup 插件配置

  ```js
  ...,
  import eslint from '@rollup/plugin-eslint'

  export default {
   ...,
  plugins: [
      nodeResolve(),
      commonjs(),
      eslint({
        throwOnError: true
      }),
      babel({
        babelHelpers: 'runtime'
      })
    ]
  }
  ```

- 添加 `ESLint` 配置文件 `.eslintrc.js`。

  ```js
  module.exports = {
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: ['eslint:recommended'],
    parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      indent: ['error', 2]
    }
  }
  ```

  执行构建，如 `ESLint` 不通过会抛出错误，构建失败。

## 构建优化

### 使用 external 优化体积

通过观察可以发现，明明只写了一点代码，输出了的文件却有 100 多 kb。这是因为 `rollup` 默认将引用到的外部依赖都打包至 `bundle` 中了，比如这里用到的 `lodash`、 `Babel` 的帮助函数、`polyfill` 等。

需要构建代码的变多，不仅影响构建速度，还会出现重复的代码，造成没必要的体积变大。

为了解决这个问题，构建工具中的 [external](https://rollupjs.org/guide/en/#external) 这个配置项可用来告诉构建工具哪些依赖是外置依赖，这样构建工具只会留下外部依赖的 `import` 语句，不会真正输出到 `bundle` 之中。

修改 `rollup.config.js`， 添加 `external`。

```js
export default {
  external: ['lodash/sum'],
  ...,
}
```

再次构建发现 `lodash/sum` 没有打包进来，而是变成了一个 `import` 语句，代码体积也变小了。

```js
import _sum from 'lodash/sum';
...
```

那我们是不是需要每增加一个依赖，就手动改 `external` 项，把依赖一个个设为 `external`？

当然不是，`external` 也可以是一个正则数组，可以通过读取 `package.json` 的 `dependencies`、`peerDependencies` 里面的依赖字段，来实现自动的 `external`。

修改配置，添加如下代码。

```js
const packageJson = require(`./package.json`)
const { dependencies = {}, peerDependencies = {} } = packageJson
const dependenciesNames = Object.keys(dependencies)
const peerDependenciesNames = Object.keys(peerDependencies)
const externalList = [...dependenciesNames, ...peerDependenciesNames]

export default {
  input: `index.js`,
  external: [
    new RegExp(`^(${externalList.join('|')})$`),
    new RegExp(`^(${externalList.join('|')})/`) // 因为有些模块是通过模块子路径来引入，比如 import _sum from 'lodash/sum'，所以这个匹配也少不了。
  ],
  ...,
}
```

再次执行构建，可以发现构建变快，而且 `bundle` 变得相当清爽，外置依赖只留下了 `import` 语句。

```js
import _Promise from '@babel/runtime-corejs3/core-js-stable/promise'
import _sum from 'lodash/sum'

var sum = function sum() {
  var numbers =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
  return new _Promise(_sum(numbers))
}

export { sum }
```
