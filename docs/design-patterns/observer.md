# 观察者模式

## 参考

[https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html](https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html)

## 定义

建立一种对象间的一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。

发布订阅模式是最常用的一种观察者模式的实现，发布订阅模式让两个对象低耦合的联系在一起，双方不必清楚彼此的实现，依然能够进行互相通信。

## 应用场景

在JavaScript开发中常见的事件模型，就属于发布订阅模式。另外常见的dom绑定事件，ajax异步请求回调都属于发布订阅模式的一种体现。

## 优点

- 实现了对象的解耦，以及在异步编程中时间的解耦。

## 缺点

- 为了实现对象间的解耦，弱化了对象之间的联系。过度的使用，使得对象必要的联系被深埋在后，会导致程序难以跟踪、维护。

## 代码实例

<design-patterns-observer />

<<< @/docs/design-patterns/js/observer.ts