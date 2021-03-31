# webpack 实践(0): 项目基础搭建

在[webpack 入门](/blogs/webpack-introduction.html)一文中我们已经对 webpack 有一个基本的了解了，`webpack` 实践系列文章将从零开始一步步搭建一个基于`webpack5` 和 `vue3`的应用开发、生产环境。

下方实践代码可从[https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice)中查阅。

## 项目初始化

为了方便对本系列博客相关实践代码进行分类，此次实践相关代码均在`app`目录中。

### 安装相关依赖

```sh
npm install webpack webpack-cli --save-dev
```

```sh
npm install vue@next
```

### 添加入口 html 文件

当用户访问 web 应用时，其实也就是获取服务端返回 `html` ，所以下面添加一个 `index.html` 作为应用入口。

文件内容如下。`body` 中有一个 `id="app"` 的 `div` 也就是用于挂载 `vue` 应用的根节点。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack-build-app</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### 添加入口 js 文件

`index.js` 内容如下。

```js
import { createApp, h } from 'vue'
const app = createApp({
  render() {
    return h('h1', this.content)
  },
  data() {
    return {
      content: 'Hello webpack & vue.'
    }
  }
})
app.mount('#app')
```

## 添加基础配置

在[webpack 入门](/blogs/webpack-introduction.html)中了解到，webpack 默认不能识别 `html` 文件，现在是需要将指定的 `js` 文件构建后自动绑定注入到指定的 `html` 中。

所以需要通过[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)插件来实现。

### 安装 html-webpack-plugin

```sh
npm i --save-dev html-webpack-plugin
```

### 添加 `webpack.config.js`

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: resolvePath('app/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('app/index.html')
    })
  ]
}
```

配置中除了指定了 `entry` 、 `output` 之外，还使用了 `HtmlWebpackPlugin`，插件的 `template` 选项用来告诉 `HtmlWebpackPlugin` 该使用哪个 `html` 模版文件来生成 html bundle。

`HtmlWebpackPlugin` 的更多用法可查看[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)。

### 添加 npm scripts 构建命令

修改 `package.json`，添加如下 `build:app` 命令。

```json
"scripts": {
  ...,
  "build:app": "webpack --config app/webpack.config.js"
},
```

执行 `npm run build:app`，可以看到生成的 `dist` 目录中输出了 `html` 文件，在浏览器打开该文件，可看见浏览器渲染了 `h1` 标题，内容为 `Hello webpack & vue.`，至此基础配置完成。

## 参考

1. [webpack development guides](https://webpack.js.org/guides/development/)
2. [webpack production guides](https://webpack.js.org/guides/production/)
