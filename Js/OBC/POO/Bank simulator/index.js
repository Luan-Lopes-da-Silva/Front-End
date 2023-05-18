const Account = require("./Account");
const Deposit = require("./Deposit");
const Loan = require("./Loan");


const account = new Account(400)
console.log(account.balance)
account.deposit(400)
account.deposit(800)
account.loan(400,8,'Pagamento não iniciado')
account.loan(600,8,'Pagamento não iniciado')
console.log(account.balance)
console.log(account.deposits)
console.log(account.loans)
