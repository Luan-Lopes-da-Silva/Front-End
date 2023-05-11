class Product{
  constructor(name,description,price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addToStock(quantity){
   this.inStock+=quantity 
  }
  calculateDiscount(porcentage){
    const valueDiscount = this.price * porcentage/100
    return this.price - valueDiscount
  }
}

const keyboard = new Product('REDRAGON DARK AVENGER','Mechanical Keyboard', 235.18 )
keyboard.addToStock(20)

console.log(keyboard)
console.log(keyboard.calculateDiscount(15))