/**
 * 策略模式
 * 
 * 定义：定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。策略模式让算法独立于使用它的客户而变化，也称为政策模式(Policy)
 *
 * 应用场景： 
 *
 * 
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