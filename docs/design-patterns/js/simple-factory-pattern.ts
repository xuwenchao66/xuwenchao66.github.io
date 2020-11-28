// 抽象产品
interface IUser {
  hello(): void
}
// 具体产品：普通用户
class User implements IUser {
  hello() {
    console.log('I am a user.')
  }
}
// 具体产品：管理员
class Admin implements IUser {
  hello() {
    console.log('I am a admin.')
  }
}
// 具体产品：超级管理员
class SuperAdmin implements IUser {
  hello() {
    console.log('I am a superAdmin.')
  }
}
// 简单工厂
class UserFactory {
  create(code: number): IUser {
    switch (code) {
      case 0:
        return new User()
      case 1:
        return new Admin()
      case 2:
        return new SuperAdmin()
      default:
        throw new Error('wrong code for user.')
    }
  }
}

const userFactory = new UserFactory()
userFactory.create(0).hello()
userFactory.create(1).hello()
userFactory.create(2).hello()
