const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('George Rexrot','120','Piraporinha','Diadema','São Paulo')
const person = new Person('Luan',addr)

console.log(person)
console.log(person.address.fullAddress())