# 命令模式

## 参考

[https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/command.html](https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/command.html)

## 定义

命令模式的本质是对命令进行封装，将发出命令的责任和执行命令的责任分割开。

命令模式可以使请求发送者和接收者完全解耦，发送者与接收者之间没有直接引用关系，发送请求的对象只需要知道如何发送请求，而不必知道如何完成请求。

命令模式与策略模式从代码结构上看非常相似，但是两种模式的意图是不同的。策略模式所指向的问题域更小，所有的策略都是为了解决同一个问题，
只是其中的算法不同而已。而命令模式所要解决的问题域更广，不同的命令可能是为了解决不同的问题。

## 应用场景

宏命令、命令操作的撤销恢复

## 优点

1. 降低系统的耦合度。
2. 新的命令可以很容易地加入到系统中。
3. 可以比较容易地设计一个命令队列和宏命令（组合命令）。
4. 可以方便地实现对请求的Undo和Redo。

## 缺点

使用命令模式可能会导致某些系统有过多的具体命令类。

因为针对每一个命令都需要设计一个具体命令类，因此某些系统可能需要大量具体命令类，这将影响命令模式的使用。

## 代码实例

<designPatterns-command />

<<< @/docs/designPatterns/js/command.ts