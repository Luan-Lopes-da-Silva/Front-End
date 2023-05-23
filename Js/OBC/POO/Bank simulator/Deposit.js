const dayjs = require("dayjs")

module.exports = class Deposit{
  constructor(value,creatAt){
    this.value = value
    this.creatAt = dayjs().format('DD/MM/YYYY')
  }
}