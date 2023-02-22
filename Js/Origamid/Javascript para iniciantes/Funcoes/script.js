// Crie uma função para verificar se um valor é Truthy
function truthyOrFalsy(value){
if(value){
  console.log('Is true')
}else{
  console.log('Is falsy')
}
}
truthyOrFalsy('80kg'/2)
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimeterOfSquare(sides){
return sides*sides
}
console.log(perimeterOfSquare(6))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function myNameIs(name,surname){
  return `My name is ${name} ${surname}`
}

console.log(myNameIs('Luan','Lopes'))
// Crie uma função que verifica se um número é par
function pairOrOdd(num){
  if(num%2===0){
    console.log("This number is pair")
  }else{
    console.log("This number is odd")
  }
}
pairOrOdd(8)
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeGiven(given){
console.log(typeof given)
}

typeGiven('Luan Lopes da Silva')
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll',function(){
  console.log('Luan Lopes da Silva')
})
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
