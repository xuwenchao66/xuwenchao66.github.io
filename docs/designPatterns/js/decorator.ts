// 通过装饰器模式让一个机器人变得更强

class Robot {
  fight() {
    console.log('用拳头攻击')
  }
}

class RobotCanShooting {
  robot: Robot
  constructor(robot) {
    this.robot = robot
  }
  fight() {
    this.robot.fight()
    console.log('用枪攻击')
  }
}

class RobotWithRocket {
  robot: Robot
  constructor(robot) {
    this.robot = robot
  }
  fight() {
    this.robot.fight()
    console.log('用火箭攻击')
  }
}

let robot = new Robot()
console.log('robot开始攻击')
robot.fight()
console.log('---升级---')
// 通过装饰类（包装类）RobotCanShooting和RobotWithRocket的动态修饰，robot的攻击变得更强了
robot = new RobotCanShooting(robot)
robot = new RobotWithRocket(robot)
robot.fight()

/* 作为动态语言，在JavaScript中改变对象的行为是比较简单的，我们可以直接改变对象或者对象的方法，
并不一定需要使用类来实现装饰模式,如下 */

const fightWithGun = () => console.log('用枪攻击')
const fightWithRocket = () => console.log('用火箭攻击')
const robot2 = new Robot()
let { fight } = robot2
fight = () => {
  robot2.fight()
  fightWithGun()
  fightWithRocket()
}
console.log('\nrobot2开始攻击')
fight()

// 如果装饰行为较多，可以通过AOP来实现相对优雅装饰模式
interface Function {
  after(fun: Function): Function
}
Function.prototype.after = function (afterFn) {
  const self = this
  return function () {
    const result = self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return result
  }
}
const robot3 = new Robot()
const filght = robot3.fight.after(fightWithGun).after(fightWithRocket)
console.log('\nrobot3开始攻击')
fight()