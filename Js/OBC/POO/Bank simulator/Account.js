const Deposit = require("./Deposit")
const dayJs = require("dayjs")
const Loan = require("./Loan")

module.exports = class Account {
  #balance
  constructor(balance){
    this.#balance = balance
    this.deposits = []
    this.loans = []
    this.transfers = []
  }

  get balance(){
    return this.#balance
  }

  deposit(value){
  this.#balance+= value
  const deposit = new Deposit(value,dayJs().format('DD/MM/YYYY'))
  this.deposits.push(deposit)
  }
  loan(value,numberOfInstalments,situation){
    this.#balance+= value
    const loan = new Loan(value,numberOfInstalments,situation,dayJs().format('DD/MM/YYYY'))
    this.loans.push(loan)
  }
  transfer(value){
    this.#balance+= value
    const loan = new Loan(value,numberOfInstalments,situation,dayJs().format('DD/MM/YYYY'))
    this.loans.push(loan)
  }
}

