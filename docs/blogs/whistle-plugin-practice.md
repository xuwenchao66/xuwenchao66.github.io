# whistle 插件开发入门 & 实践

## 什么是 whistle

[whistle](http://wproxy.org/whistle/) 是基于 `Node.js` 实现的跨平台 `web` 调试代理工具，类似 `Charles`、`Fiddler` 等。

常用的功能有查看、修改网络请求、响应。

在阅读下文之前最好对 [whistle](http://wproxy.org/whistle/) 有一个基础的使用经验。

## whistle 插件简介

### 什么是插件

`whistle` 提供了强大的插件扩展能力，一个插件就是一个 `npm` 包，也就是 `Node.js` 模块。

通过插件可以实现以下等功能。

1. 作为 `web` 服务。
2. 作为请求 `server`（直接响应或转发并修改请求响应）。
3. 扩展 `network` 右键菜单。
4. 在 `network` / `inspectors` 自定义 `tab`。

### 如何使用插件

比如现在有一个叫做 `whistle.modify` 的插件。

#### 安装插件

```sh
npm i -g whistle.modify
```

#### 查看 & 使用插件

安装成功之后，可以在 `whistle` 的插件管理页面中查看已经安装的插件。

![plugins-entry](./img//whistle-plugin-practice/plugins-entry.png)

## whistle 插件基本原理

`whistle` 是基于 `Node.js` 实现的，然而 `whistle` 插件是一个独立的进程，这样保证了插件不会影响到 `whistle` 主进程的稳定性。

`whistle` 插件会暴露一系列的 `http server` 来实现与 `whistle` 的交互。

![plugins-entry](./img//whistle-plugin-practice/plugin-server.png)

从上面图可知，`whistle` 插件可以通过以上的 `server`，从而实现相关的功能，所以一个插件的基本模板可大致如下图。

![server-example](./img//whistle-plugin-practice/server-example.png)

这里这简单介绍与下文即将实现的插件相关的 `server`。

- `server`：`whistle` 会把指定请求转发到该 `server`。（通过实现该 `server` 可以对请求响应进行修改等。）
- `uiServer`：可作为静态服务为插件提供 `UI` 界面以及 `API` 等。

关于 `server` 的更多介绍可查看 [whistle 插件开发](http://wproxy.org/whistle/plugins.html)。

## whistle 插件开发

下面将实现一个用于修改请求响应的 `whistle` 插件，详情可查看 [whistle.modify](https://www.npmjs.com/package/whistle.modify)。

### 插件功能分析

1. 首先是 `Rule` 的增删改查，`Rule` 用于描述是如何匹配请求，匹配之后该如何修改这个请求的响应等。
2. 当 `Rule` 变多之后，会变得难以查找，为此增加了 `Group`，用于分类管理 `Rule`。一个 `Group` 相当于一个文件夹，里面包含了多个 `Rule`。
   为此这里还有 `Group` 的增删改查。

### 技术实现任务拆解

## whistle 插件还能做什么

1. 简化、统一开发团队的环境切换
2. 请求数据解密

## 参考

1. [whistle](http://wproxy.org/whistle/)
2. [whistle 插件开发](http://wproxy.org/whistle/plugins.html)
3. [whistle-plugins examples](https://github.com/whistle-plugins/examples)
4. [lack - 生成 whistle 插件的脚手架](https://github.com/avwo/lack)
