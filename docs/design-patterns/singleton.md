# 单例模式

## 参考

1. [https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/singleton.html](https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/singleton.html)。
2. [https://refactoringguru.cn/design-patterns/singleton](https://refactoringguru.cn/design-patterns/singleton)。

## 定义

确保一个类仅有一个实例，并为该实例提供一个全局访问点。

## 应用场景

程序中某个类需要保证只存在一个可用的实例，如浏览器 `window` 对象，应用中的 `toast`，`dialog` 组件等等。

## 实现思路

1. 在类或者函数中添加一个变量用于保存单例实例。

2. 声明一个方法专门用于获取该单例实例。

3. 获取实例的方法中，首次调用会创建该实例并且保存到一个变量之中，之后每次调用都返回该实例。

## 优点

1. 实现了全局唯一实例，共享的概念。

2. 实例永远只有一个，比较节省内存。

## 缺点

1. 违背了“单一职责原则”，单例类既充当产品，作为产品类本身，又充当工厂，提供获取实例的方法。

## 代码实例

<<< @/docs/design-patterns/js/singleton.ts

<design-patterns-singleton />
