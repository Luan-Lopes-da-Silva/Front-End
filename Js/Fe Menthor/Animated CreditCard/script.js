const inputName = document.querySelector('#cardName')
const cardfrontName = document.querySelector('#cardfront-name')
const inputMM = document.querySelector('#inputMM')
const cardfrontMM = document.querySelector('#cardFront-MM')
const inputYY = document.querySelector('#inputYY')
const cardfrontYY = document.querySelector('#cardFront-YY')
const inputNumber = document.querySelector("#cardNumber")
const cardFront = document.querySelector("#card-front")
const inputCvc =  document.querySelector("#cardCvc")
const cardBack = document.querySelector("#card-back")
const btn = document.querySelector("#btn")




function copiarCampo(){
 cardfrontName.value = inputName.value
 cardFront.value = inputNumber.value
 cardBack.value = inputCvc.value
 cardfrontMM.value = inputMM.value
 cardfrontYY.value = inputYY.value
}
inputName.addEventListener('keyup', copiarCampo)
inputNumber.addEventListener('keyup', copiarCampo)
inputCvc.addEventListener('keyup', copiarCampo)
inputMM.addEventListener('keyup', copiarCampo)
inputYY.addEventListener('keyup', copiarCampo)



