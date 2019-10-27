# 代理模式

[https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/proxy.html#id5](https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/proxy.html#id5)

## 定义

给某一个对象提供一个代理，并由代理对象控制对原对象的引用。 通过引入代理对象来间接访问一个对象。
 
## 应用场景

在某些情况下，一个客户不想或者不能直接引用一个对象，此时可以通过一个称之为“代理” 的第三者来实现间接引用。 

代理对象（如下loadImgWithHolder）可以在客户端和目标对象（如下loadImg）之间起到中介的作用， 并且可以通过代理对象去掉客户不能看到的内容和服务或者添加客户需要的额外服务。

## 代码实践应用

<proxy />

<<< @/docs/js/proxy.js