/**
 * 策略模式
 * 
 * 定义：定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。
 *      策略模式让算法独立于使用它的客户而变化，也称为政策模式(Policy)。
 *
 * 应用场景： 在一个系统里面有许多类，它们之间的区别仅在于它们的行为，
 *          使用策略模式可以动态地让一个对象在许多行为中选择一种行为；一个系统需要动态地在几种算法中选择一种；
 *          避免使用难以维护的多重条件选择语句；希望在具体策略类中封装算法和与相关的数据结构。
 *
 * 实现思路： 一个给予策略模式的程序至少由两部分组成，分别是Strategy策略类(比如下面的class PerformanceS)，
 *          以及Context环境类(比如下面的class Bonus)，不同的算法都在不同的策略类中，程序由环境对象把请求委托
 *          给对应不同的策略对象进行计算。
 * 
 * 优点： 利用组合、委托、和多态等思想，避免了重复的选择&条件语句。算法独立在策略组中，使得他们易于切换、理解、扩展，
 *       是继承的一种更加轻便的代替方案。
 * 
 * 缺点： 要使用策略模式，必要了解各个的策略的特点，需要向客户端（环境类）暴露接口的实现，违背了最少知识原则。
 */


/**
 * 面向对象版
 */
class PerformanceS {
  calculate(salary) {
    return salary * 4
  }
}

class PerformanceA {
  calculate(salary) {
    return salary * 3
  }
}

class PerformanceC {
  calculate(salary) {
    return salary * 4
  }
}

class Bonus {
  constructor(salary, strategy) {
    this.salary = salary
    this.strategy = strategy
  }
  getBonus() {
    return this.strategy.calculate(this.salary)
  }
}

const bonusS = new Bonus(10000, new PerformanceS())
const moneyS = bonusS.getBonus()
console.log(moneyS)

/** 
 * JavaScript对象版
 */
const strategies = {
  A: salary => salary * 3,
  B: salary => salary * 2
}
const calculateBouns = (performance, salary) => strategies[performance](salary)
const bonusA = calculateBouns('A', 10000)
console.log(bonusA)

/**
 * 使用策略模式实现动画
 */
class MoveSlow {
  speed = 1
  onEnd() {
    console.log('move slowly done')
  }
}

class MoveFast {
  speed = 5
  onEnd() {
    console.log('move fast done')
  }
}

const Animate = function(dom) {
  this.dom = dom
  this.queue = []
  this.target = 0
  this.movement = null
  this.runing = false
}

// 开始移动
Animate.prototype.move = function(distance, speed = 'slow') {
  if (this.runing) {
    this.queue.push(() => this.move(distance, speed))
  } else {
    this.runing = true
    this.movement = speed === 'slow' ? new MoveSlow() : new MoveFast()
    this.curPos = parseInt(this.dom.style.left) || 0
    this.target = this.curPos + distance
    this.step()
  }
  return this
}

// 移动中每一步要做的事情
Animate.prototype.step = function() {
  this.curPos += this.movement.speed
  this.dom.style.left = `${this.curPos}px`
  if (this.target > this.curPos) {
    requestAnimationFrame(() => this.step())
  } else {
    this.movement.onEnd()
    this.end()
  }
}

// 移动结束，出栈&开始下一步
Animate.prototype.end = function() {
  this.runing = false
  this.queue[0] && this.queue.shift()()
}



/**
 * 使用策略模式实现表单校验工具
 */

const validateFun = {
  isNotEmpty(val, { errMsg = '不能为空' }) {
    if (!/\S+/.test(val)) {
      return errMsg
    }
  },
  minLength(val, { errMsg, min }) {
    if (val.length < min) {
      return errMsg || `长度不能小于${min}位数`
    }
  }
}

class Validator {
  constructor() {
    this.validateFuns = []
  }
  add(val, rule, params = {}) {
    if (!validateFun[rule]) return
    this.validateFuns.push(() => validateFun[rule](val, params))
  }
  validate() {
    let errMsg = ''
    for (let i = 0; i < this.validateFuns.length; i++) {
      const result = this.validateFuns[i]()
      if (result) return errMsg = result
    }
    return errMsg
  }
}

export { Animate, Validator }