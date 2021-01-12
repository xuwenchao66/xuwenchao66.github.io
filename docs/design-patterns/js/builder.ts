// 抽象产品
export abstract class Coffee {
  abstract bean: number
  abstract water: number
  abstract milk: number
  abstract price: number
}
// 具体产品，美式咖啡
class American extends Coffee {
  bean = 0
  water = 0
  milk = 0
  price = 10
}
// 具体产品，拿铁咖啡
class Latte extends Coffee {
  bean = 0
  water = 0
  milk = 0
  price = 20
}
// 抽象建造者
abstract class CoffeeBuilder {
  abstract type: string
  abstract coffee: Coffee
  abstract addCoffeeBean(grams: number): void
  abstract addWater(grams: number): void
  abstract addMilk(grams: number): void
  getCoffee() {
    return this.coffee
  }
}
// 具体建造者，美式建造者
class AmericanBuilder extends CoffeeBuilder {
  type: string = 'AmericanCoffee'
  coffee: Coffee
  constructor() {
    super()
    this.coffee = new American()
  }
  addCoffeeBean() {
    this.coffee.bean = 3
  }
  addWater() {
    this.coffee.water = 3
  }
  addMilk() {
    this.coffee.milk = 0
  }
}
// 具体建造者，拿铁建造者
class LatteBuilder extends CoffeeBuilder {
  type: string = 'LatteCoffee'
  coffee: Coffee
  constructor() {
    super()
    this.coffee = new Latte()
  }
  addCoffeeBean() {
    this.coffee.bean = 2
  }
  addWater() {
    this.coffee.water = 2
  }
  addMilk() {
    this.coffee.milk = 2
  }
}
// 主管类
class Director {
  makeAmerican() {
    const americanBuilder = new AmericanBuilder()
    americanBuilder.addCoffeeBean()
    americanBuilder.addWater()
    americanBuilder.addMilk()
    return americanBuilder.getCoffee()
  }
  makeLatte() {
    const latteBuilder = new LatteBuilder()
    latteBuilder.addCoffeeBean()
    latteBuilder.addWater()
    latteBuilder.addMilk()
    return latteBuilder.getCoffee()
  }
}
// 客户端
class Client {
  constructor() {
    const director = new Director()
    const american = director.makeAmerican()
    const latte = director.makeLatte()
    console.log(american, latte)
  }
}

new Client()
