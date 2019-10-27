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