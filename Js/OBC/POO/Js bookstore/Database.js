module.exports = class Database{
  #storage = {
    authors:[],
    books:[],
    posters:[],
    orders:[],
    users:[],
  }
  find(key){
    return this.#storage[key] // As keys nesse caso serão o index dos arrays no objeto storage
  }

  saveAuthor(author){
    this.#storage.authors.push(author)
  }

  findBookByName(bookName){
    return this.#storage.books.find(b=>b.name === bookName)
  }

  saveBooks(bookName){
    const bookExists = this.findBookByName(bookName)
    if(!bookExists){
      this.#storage.books.push(bookName)
    }
  }

  saveBookToStock(bookName,quantity){
    const book = this.findBookByName(bookName)
    book?.addToStock(quantity)
  }
  removeBookFromStock(bookName,quantity){
    const book = this.findBookByName(bookName)
    book?.removeToStock(quantity)
  }
  
  findPostersByName(posterName){
    return this.#storage.posters.find(b=>b.name === posterName)
  }

  savePosters(poster){
    const posterExists = this.findPostersByName(posterName)
    if(!posterExists){
      this.#storage.posters.push(poster)
    }
  }

  savePosterToStock(posterName,quantity){
    const poster = this.findPosterByName(posterName)
    poster?.addToStock(quantity)
  }
  removePosterFromStock(posterName,quantity){
    const poster = this.findPosterByName(posterName)
    poster?.removeToStock(quantity)
  }
  saveUser(user){
    const userExists = this.#storage.users.find(u=> u.email === user.email)
    if(!userExists){
      this.#storage.users.push(user)
    }
  }

  saveOrder(order){
    this.#storage.orders.push(order)
  }
  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }
}