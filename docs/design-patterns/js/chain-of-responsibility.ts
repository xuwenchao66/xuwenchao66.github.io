/* 用责任链模式设计一个请假条审批模块
假如规定学生请假小于或等于 2 天，班主任（ClassAdviser）可以批准；小于或等于 7 天，系主任（DepartmentHead）可以批准；
小于或等于 10 天，院长（Dean）可以批准；其他情况不予批准 */

/* 在日常工作中这很快会想到用if-else来写这一业务代码，代码大概如下。这样会产生以下问题：
1. 随着业务增长leaveApproval会巨大到难以阅读。
2. 修改、维护都会“牵一发而动全身”。
3. 我们可以把相关的具体业务逻辑继续拆分成多个函数来缓解问题1、2，但是可以看到
  任务请求在链条传递中非常僵硬，如果要改变请求顺序，或者增加请求节点，都必须打破
  此链条，同样会有比较高的维护成本。 */

const leaveApproval = days => {
  if (days <= 2) {
    // ClassAdviser
  } else if (days <= 6) {
    // DepartmentHead
  } else if (days <= 10) {
    // Dean
  } else {
    // do not approve
  }
}

/* 用责任链模式重构上面的代码，重构之后我们可以随意增删节点、以及设置起始请求点，
不会影响原有的节点逻辑 */

// 抽象处理者（Handler）角色
abstract class Leader {
  private next: Leader
  setNext(next: Leader) {
    this.next = next
  }
  getNext(): Leader {
    if (this.next) return this.next
    console.log('请假天数太多，没有人批准该假条！')
  }
  abstract handleRequest(days: number): void
}
// 具体处理者班主任类
class ClassAdviser extends Leader {
  constructor() {
    super()
  }
  handleRequest(days) {
    if (days <= 2) {
      console.log(`班主任允许你请${days}天假`)
    } else {
      this.getNext() && this.getNext().handleRequest(days)
    }
  }
}
// 具体处理者系主任类
class DepartmentHead extends Leader {
  handleRequest(days) {
    if (days <= 7) {
      console.log(`系主任允许你请${days}天假`)
    } else {
      this.getNext() && this.getNext().handleRequest(days)
    }
  }
}
// 具体处理者院长类
class Dean extends Leader {
  handleRequest(days) {
    if (days <= 10) {
      console.log(`院长允许你请${days}天假`)
    } else {
      this.getNext() && this.getNext().handleRequest(days)
    }
  }
}
// 客户类（Client）角色
class LeaveApproval {
  // 请求起始对象
  private statr: Leader = null
  // 设置请求链
  constructor() {
    const leader1 = new ClassAdviser()
    const leader2 = new DepartmentHead()
    const leader3 = new Dean()
    leader1.setNext(leader2)
    leader2.setNext(leader3)
    this.setStart(leader1)
  }
  setStart(statr: Leader) {
    this.statr = statr
  }
  // 处理申请
  apply(days: number) {
    this.statr.handleRequest(days)
  }
}

const LA = new LeaveApproval()
LA.apply(1)
LA.apply(3)
LA.apply(9)
LA.apply(11)


/* 在JavaScript中使用AOP实现责职链模式是一种更便捷的方式
什么是面向切面编程AOP？参考：https://www.zhihu.com/question/24863332/answer/48376158
AOP：面向切面编程，这种在运行时，动态地将代码切入到类的指定方法、指定位置上的编程思想就是面向切面的编程。
一般而言，我们管切入到指定类指定方法的代码片段称为切面，而切入到哪些类、哪些方法则叫切入点。
有了AOP，我们就可以把几个类共有的代码，抽取到一个切片中，等到需要时再切入对象中去，从而改变其原有的行为。
在下面的例子中，我们可以把Function.prototype.next方法看作是切面，而handleRequest1,2,3...等看作是切入点，
next方法动态改变了handleRequest方法的行为。 */

const handleRequest1 = days => {
  if (days <= 2) {
    console.log(`班主任允许你请${days}天假`)
  } else {
    return true
  }
}
const handleRequest2 = days => {
  if (days <= 7) {
    console.log(`系主任允许你请${days}天假`)
  } else {
    return true
  }
}
const handleRequest3 = days => {
  if (days <= 10) {
    console.log(`院长允许你请${days}天假`)
  } else {
    return true
  }
}
const handleRequest4 = () => {
  console.log('请假天数太多，没有人批准该假条！')
}

interface Function {
  next(fun: Function): Function
}
Function.prototype.next = function (fn: Function): Function {
  return (days: number) => {
    const isNext = this(days)
    if (isNext) return fn.call(fn, days)
  }
}

const handleRequest = handleRequest1
  .next(handleRequest2)
  .next(handleRequest3)
  .next(handleRequest4)

handleRequest(1)
handleRequest(4)
handleRequest(8)
handleRequest(20)