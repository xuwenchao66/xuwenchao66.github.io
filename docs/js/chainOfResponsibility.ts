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
