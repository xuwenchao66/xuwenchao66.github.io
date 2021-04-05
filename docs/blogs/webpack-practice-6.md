# webpack 实践(6): 使用 ESLint

为了能够尽早发现低级错误以及统一代码风格，一个项目中 `ESLint` 也是少不了的。

下方实践代码可从[https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice)中查阅。

## 安装依赖

从 [webpack migrate-from-eslint-loader](https://webpack.js.org/plugins/eslint-webpack-plugin/#migrate-from-eslint-loader) 中可知，`eslint-loader` 已经不推荐使用了，取而代之的是更加完善的 `eslint-webpack-plugin`。

```sh
npm install eslint eslint-webpack-plugin eslint-plugin-vue --save-dev
```

## 添加 eslint 配置文件 .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
```

## 在 webpack 中使用 eslint 插件

```js
...,
const ESLintPlugin = require('eslint-webpack-plugin')
const appSourcePath = resolvePath('app')

module.exports = {
  ...,
  plugins: [
    ...,
    new ESLintPlugin({
      context: appSourcePath,
      extensions: ['.js', '.vue']
    })
  ]
}
```

- `context`： eslint 作用的根目录
- `extensions`： extensions 声明了的后缀文件都会被 eslint 所检测。

故意弄一个不符合规范的错误，然后执行构建，控制台输出对应错误， eslint 生效。

## 参考

1. [webpack migrate-from-eslint-loader](https://webpack.js.org/plugins/eslint-webpack-plugin/#migrate-from-eslint-loader)
