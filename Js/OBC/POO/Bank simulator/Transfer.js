const dayjs = require("dayjs");
const Deposit = require("./Deposit");

module.exports = class Transfer {
  constructor(fromUser,toUser,value){
    this.fromUser = fromUser
    this.toUser = toUser
    this.value = value
    this.createdAt = dayjs().format('DD/MM/YYYY')
  }
}