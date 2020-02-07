/* OriginBook这个类作为图书馆系统中的一个对象，如果书本少的话可能没什么问题，
但是如果书本多，每本书都要new一个对象，那么就会产生大量的内存占用，
这里可以看到书本的title和author、ISBN其实都是不变的,变化的是借阅者checkoutMember和书本id,
所以我们将不变的内部状态title和author与变化的外部状态id、checkoutMember分离，
让相同的书本都复用同一个类，这样就能达到节省内存空间的作用。 */

class OriginBook {
  id: string
  title: string
  ISBN: number
  author: string
  checkoutMember: string
  constructor(id, ISBN, title, author, checkoutMember) {
    this.id = id
    this.title = title
    this.ISBN = ISBN
    this.author = author
    this.checkoutMember = checkoutMember
  }
}

// 将OriginBook重构为更细粒度的Book享元类
class Book {
  title: string
  ISBN: number
  author: string
  constructor(ISBN, title, author) {
    this.title = title
    this.ISBN = ISBN
    this.author = author
  }
  getAuthor(): string {
    return this.author
  }
}

// 创建一个函数享元工厂来管理享元类，保证一本书只创建一个对象
const bookFactory = (() => {
  const books = {}
  return {
    create: (ISBN, title, author) => {
      let book = books[ISBN]
      if (book) return book
      book = new Book(ISBN, title, author)
      books[ISBN] = book
      return book
    }
  }
})()

// 创建一个函数来管理外部状态
const bookManager = (() => {
  const bookRecordDatabase = {}
  return {
    // 添加借书记录
    addBookRecord: (ISBN, title, author, id, checkoutMember) => {
      const book = bookFactory.create(ISBN, title, author)
      bookRecordDatabase[id] = {
        id,
        checkoutMember,
        book
      }
    },
    getBookRecord: id => bookRecordDatabase[id]
  }
})()

bookManager.addBookRecord(123, '橘子', '鲁迅', 1, '小明')
console.log(bookManager.getBookRecord(1))