# 自定义 ESLint 规则，统一团队代码规范

## 为什么需要 ESLint

都知道 `ESLint` 是代码规范校验工具，并且能帮助我们在开发过程中提前发现问题，所以 `ESLint` 已经是项目中不可缺少的一部分。

然而下面这种场景会不会很熟悉呢？

在团队中的新项目为了尽快搭建完成，会不断复制粘贴已有项目的 `ESLint` 配置文件，久而久之随着项目的增加以及维护者的不同带来的差异，一个团队中的项目出现了许多不同的代码规范、`ESLint` 配置，这不利于项目基础规范的统一以及维护。

根据 `DRY` 原则，我们是否能够将配置封装成统一的库来复用？答案是肯定的。目前主流的通用配置 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 和
[eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard) 等就是做成了 `ESLint` 插件，并且含有自定义规则。

下面将介绍如何编写一个 `ESLint` 插件，以及自定义规则。

## 插件基本结构

`ESLint` 的基本配置可以是下面这样的一个 `js` 文件，其中的 `standard` 就是一个插件、通用配置，可以理解为当前配置继承了 `standard` 配置。所以 `ESLint` 插件其实也就是一个 `ESLint` 的配置对象，可供其它配置继承使用。

```js
module.exports = {
  extends: ['standard'],
  rules: {
    quotes: ['error', 'double']
  }
}
```

## 项目生成

知道了 `ESLint` 插件的基本结构之后，当然可以自己手动创建一个 `npm package` 项目开始写插件了，但社区中已经有脚手架 [generator-eslint](https://www.npmjs.com/package/generator-eslint)，能够通过简单的 `CLI` 交互，快速完成插件项目搭建。

- 安装依赖

  ```sh
  npm i -g yo
  npm i -g generator-eslint
  ```

- 执行生成命令

  ```sh
  yo eslint:plugin
  ```

  根据问题输入相关信息之后，就可以看见项目的基本结构创建完成了。`lib/index.js` 就是插件的主入口了， `rules` 文件夹里面存放我们的自定义规则。

## 继承通用规范

社区中已有许多成熟的规范，所以该插件选择先继承这些通用规范。

这里选择了使用 [https://www.npmjs.com/package/eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard) 和 [https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)。

安装完对应依赖之后，修改 `lib/index.js`。

```js
module.exports = {
  extends: ['standard', 'prettier']
}
```

## 目标需求

每个团队中因为各自的业务需求特性，多少都会需要一些自定义的编码规则来让项目更可控。

比如公司中的项目需要私有化，简单来说就是将应用部署到甲方公司内部，使用甲方自己的域名进行访问，这就要求代码中的域名都要替换成甲方要求的域名，如果一个应用中都是把域名硬编码在代码中，那么私有化开发将变得难以进行，最好是全局引用统一的变量，那么私有化中只要改这个变量即可。

所以这里就有一个需求，我们要自定义一个规则禁止代码中出现硬编码的域名。

## 自定义 rule

### 创建 rules 相关文件

看到 `rules` 文件夹里面还是空的，所以执行 `yo eslint:rule` 可以快速创建自定义 `rule` 的相关文件。执行命令创建了一个 `id` 为 `no-domain` 的规则，可以看到 `rules` 以及 `tests` 文件夹中都出现了对应的文件。

### rules 基本结构

打开 `lib/rules/no-domain.js` 可以看见一个 `rule` 是大致如下的一个对象。

```js
module.exports = {
  meta: {
    docs: {
      description: 'no-domain'
    }
  },

  create: function(context) {
    return {}
  }
}
```

`meta` 是该规则的基本信息。`create` 就是规则的主要逻辑，该函数返回一个都是方法的对象，`ESLint` 在执行的时候会遍历 `AST`，调用该对象里面对应的方法，所以自定义规则就是在这些方法里面“干活”。

更多关于 `rules` 的介绍可查看 [Working with Rules](https://eslint.org/docs/developer-guide/working-with-rules)。

因为下方内容会涉及到 `AST`， 所以请先简单了解什么是 `AST`，推荐阅读 [AST 与 Babel](/blogs/ast-and-babel.html)。
`ESlint` 使用了 [ESTree](https://github.com/estree/estree) 规范的 `AST`。

### 基本思路

既然了解到了 `ESlint` 会解析遍历 `AST`，那么我们的需求就可以转化为：

1. 访问 `AST` 中的字面量。
2. 对字面量进行检测，如果匹配判断到该字面量是域名则抛出错误。

要访问到字面量，那么就需要知道字面量在 `AST` 解析器中的类型，推荐使用 [https://astexplorer.net/](https://astexplorer.net/)，该网站可以选择你想要的 `AST` 解析器让代码解析成 `AST`。

在解析网站中输入 `'https://test.com'`，可以看到大致如下的解析结果。根据 `type` 属性可知，我们将要访问的节点类型就是 `Literal`。

```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "https://test.com",
        "raw": "'https://test.com'"
      },
      "directive": "https://test.com"
    }
  ],
  "sourceType": "module"
}
```

### 测试驱动开发

找到 `tests` 文件夹中，发现里面也自动创建了 `no-domain` 的测试文件，脚手架默认使用 `mocha` 还有 `ESLint` 自带的 [RuleTester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester) 来进行单元测试。

修改 `/tests/lib/rules/no-domain.js`。插件的单元测试，简单来说就是由一组能够通过 `rule` 校验的 `case`，如下方的 `valid`，以及一组会抛出错误的 `case`，如下方的 `invalid`，所组成。

执行单元测试 `npm test`，发现 `valid` 的 `case` 通过了，而 `invalid` 里面的没通过。这是必然的，因为我们的自定义 `rule` 还没有写入任何逻辑。

```js
const rule = require('../../../lib/rules/no-domain')
const { RuleTester } = require('eslint')
const ruleTester = new RuleTester()

ruleTester.run('no-domain', rule, {
  valid: ['var a = 123'],

  invalid: [
    {
      code: `var a = 'https://test.com'`,
      errors: [
        {
          message: '不允许在代码中硬编码域名'
        }
      ]
    }
  ]
})
```

### 完善 rule 逻辑

修改 `lib/rules/no-domain.js`，通过上面的介绍我们可知，在`create` 返回的对象里面的 `Literal` 方法能过访问到 `AST` 的字面量，该方法会传入一个 `node` 属性，表示当前访问到的 `AST` 节点。

通过断点调试（推荐使用 `VS Code` 的 `Debug Terminal`）执行单元测试，可以看到 `node` 中有一个属性 `value`，就是该节点的值，那么可以使用正则对值进行匹配，如果发现是域名，那么就使用 `ESLint` 提供的 [context.report()](https://eslint.org/docs/developer-guide/working-with-rules#contextreport) 方法来抛出问题，这样一个简单的 `rule` 就编写完成了。

```js
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'no-domain'
    }
  },

  create: function(context) {
    return {
      Literal(node) {
        if (/https?:\/\/\w+\.\w+/.test(node.value)) {
          context.report({
            node,
            message: '不允许在代码中硬编码域名'
          })
        }
      }
    }
  }
}
```

再次执行 `npm test`，通过所有的 `case`。（注：当前插件只是 `demo` 而且，只是用于阐述 `rule` 的基本编写，仅供参考。）

## 共享插件

从官方的 [Configs in Plugins](https://cn.eslint.org/docs/developer-guide/working-with-plugins#configs-in-plugins) 中可知，当我们想共享自定义规则的时候可以使用 `Configs` 属性，该属性能设定多组不同的基础配置，供第三方使用。

修改 `package` 的入口文件 `lib/index.js`。下方的 `@xuwenchao0606/base` 是本人发布的一个插件，`package` 的名字为 `@xuwenchao0606/eslint-plugin-base`，配置中可以缩写为 `@xuwenchao0606/base`。

```js
module.exports = {
  rules: {
    'no-domain': require('./rules/no-domain')
  },
  configs: {
    base: {
      extends: ['standard', 'prettier'],
      plugins: ['@xuwenchao0606/base'],
      rules: {
        '@xuwenchao0606/base/no-domain': 'error'
      }
    }
  }
}
```

最后，在需要的地方安装、继承该插件、配置即可。

```js
module.exports = {
  extends: ['plugin:@xuwenchao0606/base/base']
}
```

本文相关代码可从 [https://github.com/xuwenchao66/mono-packages/tree/master/packages/eslint-plugin-base](https://github.com/xuwenchao66/mono-packages/tree/master/packages/eslint-plugin-base) 中查看。

## 参考

1. [Shareable Configs](https://cn.eslint.org/docs/developer-guide/shareable-configs)
2. [Working with Rules](https://eslint.org/docs/developer-guide/working-with-rules)
3. [Working with Plugins](https://eslint.org/docs/developer-guide/working-with-plugins)
4. [RuleTester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester)
