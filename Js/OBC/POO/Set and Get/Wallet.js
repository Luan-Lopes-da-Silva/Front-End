class Wallet{
  #amount
  #username
  

  constructor(){
    this.#amount = 100.99 * 100
  }

get amount(){
  return this.#amount/100
}


set username (newUsername){
  if(typeof newUsername === 'string'){
    return this.#username = newUsername
  }else{
    console.log('Must be a string type')
  }

 
}
get username(){
  return this.#username
}
}

const wallet = new Wallet()
console.log(wallet.amount)
wallet.username = 'Luan'
wallet.username+= ' Lopes'
console.log(wallet.username)
wallet.username = 2
console.log(wallet.username)

