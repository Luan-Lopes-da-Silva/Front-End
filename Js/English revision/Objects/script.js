var inputName = document.querySelector('#yourName')
var inputSurname = document.querySelector('#yourSurname')
var inputAge = document.querySelector('#yourAge')
const btnCreate = document.querySelector('button')


function createObject(){
var newPerson = {
  name: inputName.value,
  surname: inputSurname.value,
  age: inputAge.value
}
console.log(newPerson)
}

btnCreate.addEventListener('click',createObject)

