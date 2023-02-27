// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var Iam = {
  name:'Luan',
  surName : 'Lopes',
  age:23,
  MyCompleteName(){
    return `My complete name is ${this.name} ${this.surName} and i have ${this.age} years old`
  },
}

console.log(Iam)
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(Iam.MyCompleteName())
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco)
carro.preco = 3000
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dog = {
race :  'Labrador',
color : 'Black',
age: 10,
barks(genre){
  if(genre === 'man'){
    return `Dog barks the see a man`
  }else{
    return `Dog not barks`
  }
}
}

console.log(dog.barks('woman'))

