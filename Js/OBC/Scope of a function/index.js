//Global scope
let pokemon = 'Charmander'

function evolved(){
  pokemon = 'Charmeleon'
}
//We saw that in a global scope we can change a let or var value inside a function.
console.log(pokemon)
evolved()
console.log(pokemon)

//Internal scope
function createAnimal(){
  let animal = 'Dog'
}

createAnimal()
//console.log(animal)
//We saw that in a internal scope we can´t change or acess a var or let, outside of the function.

function rating(rate){
if(rate>60){
  var approved = true
  let situation = 'Approved'
}else{
  var approved = false
  let situation = 'Reproved'
}
console.log(rate)
console.log(approved)
console.log(situation)
}

rating(80)
rating(40)

//We saw the principal difference in beetwen let and var, var is acessible in any scope now let don´t is acessible ou changeable in anything context.


function hello(){
var text = 'Hello, world'
}

console.log(text)

//We saw wich despite var to be more acessible he can´t to be acessed of outside of the scope of function


