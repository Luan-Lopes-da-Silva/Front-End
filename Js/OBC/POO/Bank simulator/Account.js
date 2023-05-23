const Deposit = require("./Deposit")
const dayJs = require("dayjs")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class Account {
  #balance
  constructor(user){
    this.#balance = 0
    this.owner = user
    this.deposits = []
    this.loans = []
    this.transfers = []
  }

  get balance(){
    return this.#balance
  }

  addDeposit(deposit){
  this.#balance+= deposit.value
  this.deposits.push(deposit)
  }
  addLoan(loan){
    this.#balance+= loan.value
    this.loans.push(loan)
  }
  addTransfer(transfer){
    if(transfer.toUser.email === this.owner.email){
      this.#balance += transfer.value
      this.transfers.push(transfer)
    }else if(transfer.fromUser.email === this.owner.email){
      this.#balance-=transfer.value
      this.transfers.push(transfer)

    }
  }
}

