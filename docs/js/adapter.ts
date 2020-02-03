/* 我们从不同的地方收购了两个机器人，一个攻击方式是用枪射击，一个是用剑刺击。
我们系统原有的机器人统一都是调用fight攻击接口，为了保留现有接口以及不改动第三方
机器人的接口，我们增加了对应的适配器来让刚购入的机器人能在我们系统中运行。 */

// 目标接口，所有机器人都需要实现该接口
interface Target {
  fight: Function
}

// 适配者类（刚购入的两个机器人）
class Robot1 {
  shot() {
    console.log('枪攻')
  }
}

class Robot2 {
  stab() {
    console.log('刺击')
  }
}

// 适配器类
class Robot1WithAdapter implements Target{
  robot: Robot1
  constructor() {
    this.robot = new Robot1()
  }
  fight() {
    this.robot.shot()
  }
}

class Robot2WithAdapter implements Target {
  robot: Robot2
  constructor() {
    this.robot = new Robot2()
  }
  fight() {
    this.robot.stab()
  }
}

const r1 = new Robot1WithAdapter()
const r2 = new Robot2WithAdapter()

// 最后都是调用fight接口来进行攻击
r1.fight()
r2.fight()
