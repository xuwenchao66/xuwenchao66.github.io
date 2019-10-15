/**
 * 策略模式
 * 
 * 定义：定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。
 *      策略模式让算法独立于使用它的客户而变化，也称为政策模式(Policy)
 *
 * 应用场景： 在一个系统里面有许多类，它们之间的区别仅在于它们的行为，
 *          使用策略模式可以动态地让一个对象在许多行为中选择一种行为；一个系统需要动态地在几种算法中选择一种；
 *          避免使用难以维护的多重条件选择语句；希望在具体策略类中封装算法和与相关的数据结构。
 *
 * 实现思路： 一个给予策略模式的程序至少由两部分组成，分别是Strategy策略类(比如下面的class PerformanceS)，
 *          以及Context环境类(比如下面的class Bonus)，不同的算法都在不同的策略类中，程序由环境对象把请求委托
 *          给对应不同的策略对象进行计算
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

/** 
 * JavaScript对象版本
*/
const strategies = {
  A: salary => salary * 3,
  B: salary => salary * 2
}
const calculateBouns = (performance, salary) => strategies[performance](salary)
const bonusA = calculateBouns('A', 10000)
console.log(bonusA)