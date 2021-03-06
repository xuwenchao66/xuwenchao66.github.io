# 原型模式

## 参考

1. [原型模式](https://refactoringguru.cn/design-patterns/prototype)
2. [原型模式（原型设计模式）详解](http://c.biancheng.net/view/1343.html)

## 定义

亦称，克隆、Clone、Prototype模式。由对象自身提供一个克隆方法，以对象作为原型，克隆方法能够返回一个相同或相似的新对象。

## 应用场景

1. 对象属性并非总是外部可见的，如私有变量、不可枚举时，客户端难以甚至无法进行完整的对象复制。

2. 客户端希望减少耦合，仅需要获得类的实例，无需知道对象所属类即可获取对象、克隆对象。

## 实现、应用思路

1. 抽象原型接口、类：规定具体类必须实现clone方法。

2. 具体原型类：能够实例化具体可复制的对象，实现clone方法。

3. 访问（客户端）类：调用具体对象中的clone方法来复制对象。

4. 原型模式的扩展，增加一个原型管理器 PrototypeManager 工厂类来中心化原型注册表，客户端通过搜索参数，比如简单的字符串，就能够获取原型对象，无需关注对象所属类，进一步减少耦合。

## 优点

1. 可以克隆对象，而无须与所属具体类耦合。

2. 克隆对象避免反复运行初始化代码。

3. 方便生成复杂对象。

## 缺点

1. 类需要增加clone方法，需要对已有类进行改造，违背开闭原则。

2. 克隆循环引用的复杂对象需要小心处理，要意识到深、浅克隆的区别。

## 代码实例

<<< @/docs/design-patterns/js/prototype.ts

<design-patterns-prototype />
