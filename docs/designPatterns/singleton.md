# 单例模式

## 参考

[https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/singleton.html](https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/singleton.html)

## 定义

保证一个类仅有一个实例，并且提供一个访问它的全局访问点

## 应用场景

浏览器window对象，应用中的toast，dialog组件等等

## 实现思路

用一个变量来标志当前是否已经为某个类创建过对象，如果是则在下一次获取该类的实例时，直接返回之前创建的对象

## 代码实例

<<< @/docs/designPatterns/js/singleton.js

<designPatterns-singleton />