# webpack 实践(4): 给应用添加样式

## 使用 css

给应用加上样式就是使用 `css`，同样的为了让 `webpack` 能够识别 `css` 文件，需要添加对应的 `loader`。

### 添加基础样式文件

新建 `style` 目录放置样式文件，在其中创建 `index.css`。

```css
html,
body {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
```

在入口 `index.js` 中引入。

```js
import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'

createApp(App).mount('#app')
```

### 安装 style-loader & css-loader

```sh
npm install --save-dev style-loader css-loader
```

- [style-loader](https://github.com/webpack-contrib/style-loader) 能把 `css` 插入 `dom` 中，比如将含有 `css` 样式的 `<style></style>` 标签，通过 `js` 插入 `html` 中。
- [css-loader](https://github.com/webpack-contrib/css-loader) 让 `webpack` 能够加载 `css` 文件，比如 `import css from "file.css";`。

两者经常搭配使用。

### 修改通用配置处理 css 文件

在 `webpack.common.js` 配置、使用 `css` 的相关 `loader`。

```js
...,
module.exports = {
  ...,
  module: {
    rules: [
      ...,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      ...,
    ]
  },
 ...,
}
```

执行 `npm run dev:app`，`css` 加载成功。

## 使用 css 预处理器

为了能在写样式的时候更快乐一些，开发中都会使用诸如 `less` 、 `sass` 的预处理器。要让 `webpack` 能够使识别这些预处理器，也是一样的套路。

### 添加、使用 less

`index.less`。

```less
div {
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  padding: 20px;
  img {
    transform: rotate(180deg);
    width: 200px;
  }
}
```

在 `index.js` 中导入。

```js
import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'
import './style/index.less'

createApp(App).mount('#app')
```

### 安装 less less-loader

```sh
npm install less less-loader --save-dev
```

### 修改通用配置处理 less 文件

在 `webpack.common.js` 配置、使用 `less` 的相关 `loader`。

```js
...,
module.exports = {
  ...,
  module: {
    rules: [
      ...,
      {
        test: /\.(css|less)$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      ...,
    ]
  },
  ...,
}
```

执行 `npm run dev:app`，`less` 加载成功。

## 使用 postcss

在一些低版本的浏览器中，部分 `css` 属性需要添加前缀才能生效，比如 `-webkit-transform: rotate(180deg);`，如果这些都需要手动一个个添加，那可太累了。

为此可以使用 `postcss` 将这些工作自动化。

### 安装相关依赖

```sh
npm install --save-dev postcss-loader postcss postcss-preset-env
```

### 配置

修改 `webpack.common.js` 配置。

```js
...,
module.exports = {
  ...,
  module: {
    rules: [
      ...,
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'less-loader'
        ]
      },
      ...,
    ]
  },
  ...,
}
```

添加 `.browserslistrc`，告诉工具我们的浏览器兼容目标。

```txt
last 1 version
> 1%
IE 10
```

再次 `npm run dev:app`，可见 `transform` 属性已自动添加前缀。

本文实践代码可从 [https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice) 中查阅。

## 参考

1. [webpack asset-management loading-css](https://webpack.js.org/guides/asset-management/#loading-css)
2. [webpack loaders](https://webpack.js.org/loaders/)
