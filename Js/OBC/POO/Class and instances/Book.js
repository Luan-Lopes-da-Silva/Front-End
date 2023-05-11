class Book{
  constructor(title,pages,tags,author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
  }
  addOnStock(quantity){
  this.inStock+=quantity
  }
  publish(){
  this.published = true
  }
}

const author = {name:'Koushun Takami'}
const tags = ['Distopia','Romance','Horror']
const battleRoyale = new Book('Battle Royale',666,tags,author)
battleRoyale.addOnStock(20)
battleRoyale.publish()
console.log(battleRoyale)
console.log(battleRoyale instanceof Book)