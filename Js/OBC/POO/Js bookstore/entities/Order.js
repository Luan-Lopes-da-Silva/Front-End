module.exports = class Order{
  #total //Total da compra
  #items //Objeto com item e quantidade
  #user //Quem fez a compra

  constructor(items,user){
  items.forEach(({product,quantity})=>{
    if(quantity>product.inStock){
      throw new Error('Produto sem essa quantidade no estoque')
    }
  })  
  this.#items = items
  this.#user = user
  this.#total = items.reduce((sum,{product,quantity})=> sum + (product.price*quantity),0) //Nesse reduce ele usa a classe produto como referencia e faz um desestruturação na mesma
  }
  get data(){
    return{
      items:this.#items,
      user:this.#user,
      total:this.#total
    }
  }
}