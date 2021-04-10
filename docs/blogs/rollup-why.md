# 为什么选择 rollup

## rollup 简介

如对前端工程化稍有关注，那么我们经常可以看见 `rollup` 的身影，比如 `vue`、`react` 以及最近出来的构建工具 `vite`，它们有都用到 `rollup`。

简单来说 `rollup` 就是一个 JavaScript 模块构建工具，那么它与我们更为熟悉的 `webpack` 有什么区别呢？下面将介绍、分析 `rollup` 的特性，及其应用场景。

## rollup 特性

`rollup` 使用的是 `ES6` 标准的模块机制，也就是常见的 `import`、`export`。能支持导入、导出 `ES` 模块，同时支持导出 `common.js`、`AMD`、`IIEF` 等模块、脚本。

## rollup 优势

`rollup` 不仅使用 `ES` 模块，而且会对代码进行静态分析（ES 模块的静态特性，也是静态分析的前提），在构建、编译阶段分析、移除未使用到的代码，也就是所谓的 [tree-shaking](https://webpack.js.org/guides/tree-shaking/#root)。

这也是为什么 `rollup` 的构建输出体积更小、速度更快的原因。

### ES 模块与 commonjs 模块的不同、优劣

#### ES 模块

`ES` 模块的静态特性，在编译阶段就确定模块的依赖关系，所以不能用于需要在代码运行时才能确定的语法结构中。比如：

1. `import` 不能出现在 `function`、`if-else` 中。
2. `import` 的模块名只能是字符串常量，不能是变量。
3. 通过 `import` 绑定声明的变量无法重新赋值。

#### commonjs 模块

与 `ES` 模块相反的是，`commonjs` 是动态的，允许更加灵活的使用，比如条件 `require`、`require` 模块名使用变量等，如下。

```js
const module_name = 'lodash'
require(module_name)

if (true) {
  require('lodash')
}
```

但这种便利也让工具难以在编译阶段就能确定模块之间的依赖，不利于静态分析，导致难以进行 `tree-shaking` 等优化。所以从这个角度看 `ES` 模块机制是要优秀于 `commonjs` 等动态模块机制。

## rollup or webpack

两者有以下几点对比。

1. `rollup` 支持输出 `ES` 模块，`webpack` 暂不不支持。目前，2020 年 3 月 13 日，从官网中可知 `webpack` 的 [输出 ES 模块](https://webpack.js.org/configuration/output/#librarytarget-module)目前还是实验性特性。所以 `rollup` 构建速度更快、输出体积更小，更容易进行 `tree-shaking` 等优化。

2. `webpack` 有更成熟、完整的生态，对于多数主流框架、应用基础开发都有成熟的工具链。

综上，如果是开发一个应用，那么应该选择 `webpack`，其生态能满足应用开发复杂、多变的需求。而开发一个库时，功能往往比较单一，加之库的体积是使用者所关注的重要一点，所以使用 `rollup` 更合适。

## 参考

1. [rollup-introduction](http://rollupjs.org/guide/en/#introduction)
2. [rollup-faqs](http://rollupjs.org/guide/en/#faqs)
3. [import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
4. [import-命令](https://es6.ruanyifeng.com/#docs/module#import-%E5%91%BD%E4%BB%A4)
5. [tree-shaking](https://webpack.js.org/guides/tree-shaking/#root)
