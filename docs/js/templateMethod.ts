// 泡茶跟冲咖啡有些步骤是一致的，所以将这些一致的行为抽离到抽象父类Beverage中，
// 然后具体差异分别在Coffee、tea中

class Beverage {
  init() {
    this.brew()
    this.pourInCup()
    this.wantCondiments() && this.addCondiments()
  }
  boilWater() {
    console.log('把水煮沸')
  }
  // 钩子函数用于在子类中改变模板流程
  wantCondiments() {
    return true
  }
  brew() { }
  pourInCup() { }
  addCondiments() { }
}

class Coffee extends Beverage {
  brew() {
    console.log('用沸水冲泡咖啡')
  }
  pourInCup() {
    console.log('将咖啡倒进杯子')
  }
  addCondiments() {
    console.log('加糖和牛奶')
  }
}

class PureCoffee extends Coffee {
  wantCondiments() {
    return false
  }
}

class Tea extends Beverage {
  brew() {
    console.log('用沸水冲泡茶叶')
  }
  pourInCup() {
    console.log('将茶倒进杯子')
  }
  addCondiments() {
    console.log('加柠檬')
  }
}

const coffee = new Coffee()
const pureCoffee = new PureCoffee()
const tea = new Tea()

console.log('\n')
coffee.init()
console.log('\n')
pureCoffee.init()
console.log('\n')
tea.init()