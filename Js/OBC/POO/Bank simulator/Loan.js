const Installment = require("./Installment")


module.exports = class Loan extends Installment{
  constructor(value,numberOfInstalments,situation,creatAt,installmentPrice){
    super(value,numberOfInstalments,situation)
    this.creatAt = creatAt
    this.installmentPrice = value/numberOfInstalments
  }
  static #tax = 0
  get tax(){
    return Loan.#tax
  }
  set tax(percentage){
    return (Loan.#tax * 100) / percentage
  }
 
}

