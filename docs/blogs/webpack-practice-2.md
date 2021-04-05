# webpack 实践(2): 使用 DevServer

在前面的文章中，我们每次修改代码都要手动构建，效率较低下。为此可以使用 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) 来自动化、加速这一过程。

`webpack-dev-server` 能够监听文件改变，然后自动执行构建、刷新页面，支持热更新，而且它启动后是将构建结果保存在内存中，所以读取速度更快。

下方实践代码可从[https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice)中查阅。

## 安装相关依赖

```sh
npm i npm install --save-dev webpack-dev-server webpack-merge -D
```

## 拆分配置文件

加入了 `DevServer` 之后，会发现配置中生产环境与开发环境有不少不同点，比如开发环境中需要添加便于调试的 `source-map`，`devServer` 配置等等，而生产环境需要对 bundle 进行压缩、构建优化。

所以为了将两者区分，便于维护、复用。下面将配置文件拆分为以下三个 js 文件，都放在新建的 `build` 目录下，然后通过 [webpack-merge](https://github.com/survivejs/webpack-merge) 来组合它们。

`build` 目录下新建 `utils.js`，用来存放通用的脚本辅助方法，如下。

```js
const path = require('path')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  resolvePath
}
```

- `webpack.common.js`：导出通用、可复用的配置。

  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const { resolvePath } = require('./utils')
  const { VueLoaderPlugin } = require('vue-loader')

  module.exports = {
    entry: './app/index.js',
    output: {
      filename: 'main.js',
      path: resolvePath('app', 'dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolvePath('app', 'index.html')
      }),
      new VueLoaderPlugin()
    ]
  }
  ```

- `webpack.prod.js`：导出生产环境配置。

  ```js
  const { merge } = require('webpack-merge')
  const base = require('./webpack.common')

  module.exports = merge(base, {
    mode: 'production'
  })
  ```

- `webpack.dev.js`：导出开发环境的配置。

  ```js
  const { merge } = require('webpack-merge')
  const { resolvePath } = require('./utils')
  const base = require('./webpack.common')

  module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
      contentBase: resolvePath('dist'),
      hot: true,
      compress: true,
      port: 3000
    }
  })
  ```

  - `devtool`：用于决定如何生成 `source maps`，为了方便调试，在开发环境中一般都会开启。
  - `target`： 告诉 webpack 编译环境目标，这里得声明为 `web`，否则如果项目中存在 `.browserslistrc` 配置文件，热更新可能会失效。
  - `devServer`： 该选项决定了 `webpack-dev-server` 的表现。

    - `contentBase`：静态服务器根目录。
    - `hot`：是否启用热更新。
    - `compress`：是否启用 `gzip` 压缩服务器响应的静态资源。
    - `port`：静态服务器的监听端口。

    更多选项请看[webpack dev-server](https://webpack.js.org/configuration/dev-server)

## 调整 npm scripts

```json
"scripts": {
  ...,
  "build:app": "webpack --config build/webpack.prod.js",
  "dev:app": "webpack serve --config build/webpack.dev.js"
}
```

配置成功后执行 `npm run dev:app`，启动 `DevServer`，浏览器访问 `http://localhost:3000/`，可访问应用，而且修改代码，页面会进行热更新。

## 参考

1. [webpack development guides](https://webpack.js.org/guides/development/)
2. [webpack production guides](https://webpack.js.org/guides/production/)
