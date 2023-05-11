class Account{
  #password
  #balance 

  constructor(user){
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }
  setBalance(email,password,quantity){
  if(this.email === email && this.#password === password){
  this.#balance+=quantity
  return this.#balance
  }else{
  return null
  }
  }
}


const user = {
  email:'devbolt@gmail.com',
  password:392469
}
const userAccount = new Account(user)

console.log(userAccount)
console.log(userAccount.setBalance('devbolt@gmail.com', 392469 , 200.10))