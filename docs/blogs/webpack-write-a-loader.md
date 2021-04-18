# webpack loader 开发入门

本文相关实践代码可从[https://github.com/xuwenchao66/webpack-loader-practice](https://github.com/xuwenchao66/webpack-loader-practice)中查阅。

## webpack loader 简介 & 基本原理

通过 [webpack loaders](https://webpack.js.org/concepts/#loaders) 中可以了解到，`webpack` 默认只能识别 `JavaScript` 以及 `JSON` 文件。

如果要让 `webpack` 识别其它类型的文件，那么就要使用对应的 `loader` 来将文件转化为 `webpack` 的 [modules](https://webpack.js.org/concepts/modules/)。在 [Supported Module Types](https://webpack.js.org/concepts/modules/#supported-module-types) 中了解到 `webpack` 的 `module` 可以是 `ES`模块、 `CommonJS` 模块等等。

再结合 [raw-loader](https://github.com/webpack-contrib/raw-loader)，该插件能让 `webpack` 载入 `txt` 文本文件（现在不推荐使用了，因为 `webpack5` 内置 [asset-modules](https://webpack.js.org/guides/asset-modules/)）。从它的源码片段中可见，其核心就是读取 `txt` 文件之后，将文件内容包裹、返回 `ES` 或者 `CommonJS` 模块。

```js
export default function rawLoader(source) {
  ...,

  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  ...,

  return `${esModule ? 'export default' : 'module.exports ='} ${json};`;
}
```

经过上面的简单分析可以得出以下几点：

- 在 `loader` 中能够获取到一个字符串 `source`，该字符串就是文件的内容。
- `loader` 中需要返回一个 `webpack` 所能识别的 `module`。

知道这几点之后，经常使用的 `css-loader`、`vue-loader`，似乎也不再那么神秘。我们能够自由改变、组装 `source`，在日后开发中又多了一个能够解决问题的思考方向。

## loader 基本骨架

在开发中经常需要根据开发、生产等不同环境注入、替换不同的配置，简单来说就是字符串替换。当然社区中已有成熟的方案了，比如 [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) 和 [string-replace-loader](https://github.com/Va1/string-replace-loader)。下面就实现一个简单的字符串替换 `loader`。

在 [webpack loaders api](https://webpack.js.org/api/loaders/) 中，可知一个 `loader` 就是一个函数，如下。

```js
/**
 * @param {string|Buffer} content 源码文件内容
 * @param {object} [map] SourceMap 数据
 * @param {any} [meta] 其它自定义的元数据
 */
function webpackLoader(content, map, meta) {
  // code of your webpack loader
}
```

新建 `src/replace.js`，作为 `loader` 根入口，内容如下。

```js
module.exports = function replaceLoader(source) {
  console.log('replaceLoader')
  return source
}
```

## 使用 loader

在 `webpack.config.js` 中使用 `loader`。

```js
const path = require('path')
const resolve = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  entry: resolve('test', 'file-for-test.js'),
  output: {
    filename: 'main.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: resolve('src/replace.js')
          }
        ]
      }
    ]
  }
}
```

执行 `webpack` 构建，可以看见控制台输出了 `replaceLoader` 字样，说明 `loader` 成功调用。

## 完善 loader 逻辑

### 参数设计

该 `loader` 其实就是调用 `JavaScript` 的 `replace` 方法，所以参数的基本属性会有两个，分别是。

- `search`： 替换源目标，可以是字符串、也可以是一个正则。
- `replace`：替换结果，可以是一个字符串，也可以是一个函数。

因为可能会需要多组匹配、替换，那么应该是一个对象数组。 `loader` 的参数可以是下方这么一个对象。

```js
const options = {
  rules: [
    {
      search: 'webpack',
      replace: 'replaced'
    },
    {
      search: /webpack1/g,
      replace: () => 'replaced'
    }
  ]
}
```

### 获取参数

[loader-utils](https://github.com/webpack/loader-utils) 中包含了许多在编写 `loader` 时实用的工具方法。 其中的 `getOptions` 方法，能够获取调用 `loader` 时候传入的参数。 `webpack5` 已经内置了 [this.getOptions(schema)](https://webpack.js.org/api/loaders/#thisgetoptionsschema) 方法，但是目前为了更好的兼容性还是使用 `loader-utils`。

- 安装 `loader-utils`

  ```sh
  npm i loader-utils --save
  ```

- 新建 `/src/getOptions.js`，该模块专门用来获取、处理参数。

  ```js
  const { getOptions } = require('loader-utils')

  module.exports = (ctx) => {
    const options = getOptions(ctx)
    return options
  }
  ```

### 替换 source

- 在主入口 `/src/replace.js`，中获取参数，进行字符串替换。

  ```js
  const getOptions = require('./getOptions')

  module.exports = function replaceLoader(source) {
    const { rules } = getOptions(this)
    // 替换
    rules.forEach((rule) => {
      const { search, replace } = rule
      source = source.replace(search, replace)
    })
    return source
  }
  ```

## 传入参数构建测试

修改 `webpack.config.js`，传入参数。

```js
...,

module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: resolve('src/replace.js'),
            options: {
              rules: [
                {
                  search: 'webpack',
                  replace: 'replace with string'
                },
                {
                  search: /(.+)(loader)(.+)/,
                  replace: (match, $1, $2, $3) => `${$1}replace with regex${$3}`
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

执行构建，目标字符串都被成功替换。

## 参数校验

为了能够让使用者在参数传入错误时给出准确的错误提示，这里使用官方推荐的 [schema-utils](https://github.com/webpack/schema-utils) 来对传入的 `options` 进行检验。

- 安装依赖。

  ```sh
  npm install schema-utils --save
  ```

- 添加检验规则描述文件 `/src/schema.json`。

  ```json
  {
    "type": "object",
    "required": ["rules"],
    "properties": {
      "rules": {
        "type": "array",
        "items": {
          "type": "object",
          "required": ["search", "replace"],
          "additionalProperties": false,
          "properties": {
            "search": {
              "anyOf": [{ "type": "string" }, { "instanceof": "RegExp" }]
            },
            "replace": {
              "anyOf": [{ "type": "string" }, { "instanceof": "Function" }]
            }
          }
        }
      }
    },
    "additionalProperties": false
  }
  ```

  上方描述简单来说就是对 `options` 的参数进行了规则描述，比如 `"type": "object"`，就是声明该参数是一个对象， `"required": ["rules"]` 声明该对象必须存在 `rules` 属性，`"properties"` 就是对该对象其它属性进行描述。

  具体可查看 [schema-utils](https://github.com/webpack/schema-utils) 说明，官方 `README` 没有并没有太详细的指南，那么也可以从其 [单元测试用例 schema.json](https://github.com/webpack/schema-utils/blob/master/test/fixtures/schema.json) 中查看、参考更多不同的用法。

- 调用校验方法。

  修改 `getOptions.js`。

  ```js
  const { getOptions } = require('loader-utils')
  const { validate } = require('schema-utils')
  const schema = require('./schema.json')

  module.exports = (ctx) => {
    const options = getOptions(ctx)
    // 参数检验
    validate(schema, options, {
      name: 'webpack replace loader'
    })
    return options
  }
  ```

配置完成之后，尝试传入不合法的 `options`，再次执行构建，可以看见控制台报错，并且输出了可读性较高的错误提示。

## 单元测试

`loader` 已经完成，接下来添加单元测试，来进一步保证 `loader` 的正确运行。

- 安装、使用 [jest](https://jestjs.io/) 作为我们的测试框架。

  ```sh
  npm install --save-dev jest
  ```

- 配置 `jest`，添加 `jest.config.js` 配置文件。

  这里声明了在 `test` 目录中，以 `.spec.js` 结尾的文件，都是单元测试文件。

  ```js
  module.exports = {
    testMatch: ['**/test/**/*.spec.js']
  }
  ```

- 编写单元测试。

  新增 `test/index.spec.js` 文件。单元测试其实就是编写函数来判断方法的输入、输出是否符合预期，所以要想办法拿到 `webpack` 的构建结果。可以使用 `webpack` 的 [nodejs api](https://webpack.js.org/api/node/)，来达成这一目的。

  下方的两个用例都使用了 `webpack` 的 `nodejs api` 来进行构建，在 [stats](https://webpack.js.org/configuration/stats/) 对象中可以获取输出的构建内容。

  ```js
  const webpack = require('webpack')

  test('Replace correctly', async (done) => {
    webpack(require('./webpack.config.js'), (err, stats) => {
      const error = err || stats.hasErrors()
      const json = stats.toJson({ source: true })
      const output = json.modules[0].source
      expect(output).toEqual(
        expect.stringContaining('Hello replace with string replace with regex.')
      )
      done(error)
    })
  })

  test('Invalid options', async (done) => {
    const options = require('./webpack.config.js')
    options.module.rules[0].use[0].options.rules = 1
    webpack(options, (err, stats) => {
      const error = err || stats.hasErrors()
      expect(error).toBeTruthy()
      done()
    })
  })
  ```

执行 `jest` 测试，可以看到两个用例通过。

## 参考

1. [webpack loaders api](https://webpack.js.org/api/loaders/)
2. [webpack loaders](https://webpack.js.org/concepts/#loaders)
3. [webpack writing-a-loader](https://webpack.js.org/contribute/writing-a-loader/)
