function Book(title,pages,tags,author){
this.title = title
this.pages = pages
this.tags = tags
this.author = author
this.published = false
this.inStock = 0
this.addOnStock = function addOnStock(quantity){
this.inStock+=quantity
}
}

const author = {name:'Koushun Takami'}
const tags = ['Romance','Distopia','Horror']
const book = new Book ('Battle Royale',666,tags,author)
book.addOnStock(20)
book.published = true
console.log(book)