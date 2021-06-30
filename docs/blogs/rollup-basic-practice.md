# rollup 基础实践

本文中的示例代码可以在 [https://github.com/xuwenchao66/rollup-practice](https://github.com/xuwenchao66/rollup-practice) 中查阅。

## 开始使用

1. 全局安装 `rollup`。

   ```sh
   npm install --global rollup
   ```

2. 新建测试工程。

   新建一个文件夹，用于测试。新建需要编译的文件 `index.js` 内容如下。

   ```js
   export const log = () => console.log('hello rollup')
   ```

3. 通过全局 `CLI` 执行构建。

   执行下方命令，开始构建。

   ```sh
   rollup index.js --file dist/bundle.js --format es
   ```

   执行成功后可以发现，出现了一个 `dist` 文件夹，里面有一个 `bundle.js`，就是构建输出的文件。

   命令简析：

   - `rollup index.js`： 使用 `rollup` 对 `index.js` 进行编译。
   - `--file dist/bundle.js`： 输出路径为 `dist/bundle.js`。
   - `--format es`：输出格式为 `ES` 模块。

## 使用配置文件

使用 `CLI` 能快速上手，但是落实到实践的时候，使用可读性以及可维护性更好的配置文件是更合适的选择。

通常配置文件是一个名为 `rollup.config.js` 的文件，该文件在项目根目录。配置文件导出一个对象。

1. 新增 `rollup.config.js`，其内容如下。

   ```js
   export default {
     input: 'index.js',
     output: {
       file: 'dist/bundle.js',
       format: 'es'
     }
   }
   ```

2. 指定配置文件，执行构建。

   执行下方命令，成功构建。`--config` 用于指定配置文件，也可用缩写 `-c`。

   ```sh
   rollup --config rollup.config.js
   ```

## 常用配置

### 常用配置项

- `input`

  构建入口描述，常用的是使用一个字符串来描述入口文件的所在位置。`input` 也可以是一个数组、对象，更多详细用法可查看 [rollupjs#input](http://rollupjs.org/guide/en/#input)。

- `output`

  构建输出描述，通常一个对象，`output` 常用的属性有：

  - `output.file` 指定输出文件。

  - `output.format` 指定输出的格式。可以是 `es`、`cjs`、`umd` 等常见的模块格式。

  更多详细用法可查看 [rollupjs#output](http://rollupjs.org/guide/en/#outputdir)。

### 常用配置方案

- 单入口、单出口。

  ```js
  export default {
    input: 'index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'es'
    }
  }
  ```

- 单入口、多出口。

  某些场景，我们的库可能需要同时提供给 `browser`、`server` 端使用。

  所以需要同时输出 `es`、`commonjs` 规范的模块，这时候可以把 `input` 声明为一个数组，这样一个入口能输出不同规范的模块。

  ```js
  export default {
    input: 'index.js',
    output: [
      {
        file: 'dist/bundle.es.js',
        format: 'es'
      },
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs'
      }
    ]
  }
  ```

- 多入口、多出口。

  一个库可能有多个不同的入口文件，这时候可以使用数组来声明配置对象。我们新增一个 `main.js` 入口文件，然后使用如下配置就能够实现多入口、出口的构建。

  ```js
  export default [
    {
      input: 'index.js',
      output: [
        {
          file: 'dist/index.es.js',
          format: 'es'
        },
        {
          file: 'dist/index.cjs.js',
          format: 'cjs'
        }
      ]
    },
    {
      input: 'main.js',
      output: [
        {
          file: 'dist/main.es.js',
          format: 'es'
        },
        {
          file: 'dist/main.cjs.js',
          format: 'cjs'
        }
      ]
    }
  ]
  ```

## 常用插件

在实践中我们往往会引用外部的 `npm package`，比如 `lodash`。同时为了兼容较低版本的浏览器，也需要将代码编译成 `ES5`。

在项目中安装 `lodash`，`npm i lodash`。

在 `index.js` 中引入使用 `lodash`，修改文件为。

```js
import cloneDeep from 'lodash/cloneDeep'
export const log = () => {
  console.log('hello rollup')
  return cloneDeep({})
}
```

执行构建，可以发现，控制台中出现了警告，而且编译出来的代码，箭头函数还存在，没有编译为 `ES5` 版本的代码。

这是因为 `rollup` 本身只包含了其核心功能，也就是对代码文件的读取、解析、转换，其它功能以**插件**的形式来实现。这样同时保证了 `rollup` 的扩展性、可维护性。

### [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)

通过控制台可以看到如下警告。

```sh
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
```

这是因为 `rollup` 默认只会解析相对路径的模块，如 `import main from './main.js'`。

当使用如 `import cloneDeep from 'lodash/cloneDeep'` 时，`rollup` 是不知道该如何找到该模块的，所以把此模块认为是 `external`（外置依赖）。

为了让 `rollup` 能够使用 [nodejs 的模块解析方案](https://nodejs.org/api/modules.html#modules_all_together)，需要使用 [node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) 插件。

安装依赖 `npm install @rollup/plugin-node-resolve --save-dev`。

在配置中使用插件。

```js
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  ...,
  plugins: [nodeResolve()]
}
```

这时候在此执行构建，会发现原有的警告消失了，说明 `rollup` 已经成功找到了模块。但是出现了另外一个报错。

```sh
[!] Error: 'default' is not exported by ../node_modules/lodash/cloneDeep.js, imported by index.js
https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
```

这是因为 `rollup` 使用的是 `ES` 模块机制，无法解析 `commonjs` 的模块，所以如果需要引入 `commonjs` 模块，需要使用 `@rollup/plugin-commonjs` 插件。

### [@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)

能够将 `commonjs` 模块转换成 `ES` 模块，这样 `rollup` 就能解析 `commonjs` 模块了。

安装依赖 `npm install @rollup/plugin-commonjs --save-dev`。

修改配置文件。

```js
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  ...,
  plugins: [nodeResolve(), commonjs()]
}
```

再次构建，这次代码 `import` `lodash` 进来了，构建成功。

### [@rollup/plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel)

根据上面的了解，可知语法转译也需要安装插件来处理。

安装依赖 `npm install @rollup/plugin-babel @babel/core --save-dev`。

修改配置文件。

```js
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'

export default {
  ...,
  plugins: [nodeResolve(), commonjs(), babel()]
}
```

再次执行构建可以发现 `ES6` 的箭头函数、`const` 等语法糖都转译成 `ES5`。

### 更多常用插件

- [@rollup/plugin-eslint](https://github.com/rollup/plugins/tree/master/packages/eslint)，`ESLint` 插件。
- [@rollup/plugin-alias](https://github.com/rollup/plugins/tree/master/packages/alias)，类似 `Webpack` 的 `alias` 配置，为模块设置别名。
- [rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser)，代码压缩。
- [rollup-plugin-filesize](https://github.com/ritz078/rollup-plugin-filesize)，展示构建输出的文件体积。

## 参考

1. [rollupjs](http://rollupjs.org/guide/en/)
2. [rollupjs#faqs](http://rollupjs.org/guide/en/#faqs)
3. [rollupjs#how-do-i-use-rollup-in-nodejs-with-commonjs-modules](http://rollupjs.org/guide/en/#how-do-i-use-rollup-in-nodejs-with-commonjs-modules)
4. [rollupjs#troubleshooting](http://rollupjs.org/guide/en/#troubleshooting)
