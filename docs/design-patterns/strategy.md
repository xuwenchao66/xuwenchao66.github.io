# 策略模式

## 参考

[https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/strategy.html](https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/strategy.html)

## 定义

定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。策略模式让算法独立于使用它的客户而变化，也称为政策模式(Policy)。

## 应用场景

在一个系统里面有许多类，它们之间的区别仅在于它们的行为，使用策略模式可以动态地让一个对象在许多行为中选择一种行为；一个系统需要动态地在几种算法中选择一种；避免使用难以维护的多重条件选择语句；希望在具体策略类中封装算法和与相关的数据结构。

## 实现思路

一个给予策略模式的程序至少由两部分组成，分别是Strategy策略类(比如下面的class PerformanceS)，以及Context环境类(比如下面的class Bonus)，不同的算法都在不同的策略类中，程序由环境对象把请求委托给对应不同的策略对象进行计算。

## 优点

利用组合、委托、和多态等思想，避免了重复的选择&条件语句。算法独立在策略组中，使得他们易于切换、理解、扩展，是继承的一种更加轻便的代替方案。

## 缺点

要使用策略模式，必要了解各个的策略的特点，需要向客户端（环境类）暴露接口的实现，违背了最少知识原则。

## 代码实例

<<< @/docs/design-patterns/js/strategy.js

<design-patterns-strategy />