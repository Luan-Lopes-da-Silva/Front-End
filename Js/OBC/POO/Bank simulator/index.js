const App = require("./App")

App.createUser('lopesluan18@outlook.com','Luan Lopes')
App.createUser('lulamolusculo2009@hotmail.com','Luan Silva')

App.deposit('lopesluan18@outlook.com',600)

App.transfer('lopesluan18@outlook.com','lulamolusculo2009@hotmail.com',100)
App.takeLoan('lopesluan18@outlook.com',600,24)

console.log(App.findUser('lopesluan18@outlook.com').account)
console.log(App.findUser('lulamolusculo2009@hotmail.com').account)
console.log(App.findUser('lopesluan18@outlook.com').account.loans[0].installments.status)