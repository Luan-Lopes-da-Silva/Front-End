const inputName = document.querySelector('#yourName')
const inputSurname = document.querySelector('#yourSurname')
const inputAge = document.querySelector('#yourAge')
const radioInputs = document.querySelectorAll('input[type=radio]')
const btnConfirm = document.querySelector('button')
const spanData = document.querySelector('.data')
const inputFem = document.querySelector('#femGenre')
const inputMasc = document.querySelector('#mascGenre')


function dataPersonal(){
  spanData.innerHTML = `My name is ${inputName.value}, my surname is ${inputSurname.value}, i have ${inputAge.value} years old and my genre is ${localStorage.getItem("genre")} `

}



function checkGenre(event){
if(event.currentTarget == inputMasc){
  localStorage.genre = 'Masculine'
}else if(event.currentTarget == inputFem){
  localStorage.genre = 'Feminine'
}
}

radioInputs.forEach((input) =>{
  input.addEventListener('change',checkGenre)
})
btnConfirm.addEventListener('click',dataPersonal)