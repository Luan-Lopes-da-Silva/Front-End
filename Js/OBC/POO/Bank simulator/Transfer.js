const Deposit = require("./Deposit");

module.exports = class Transfer extends Deposit{
  constructor(sender,receiver,value,creatAt){
    super(value,creatAt)
    this.sender = sender
    this.receiver = receiver
  }
}