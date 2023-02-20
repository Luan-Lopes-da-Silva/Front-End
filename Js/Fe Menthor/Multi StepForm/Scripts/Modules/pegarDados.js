import trocaDePasso from './trocaDePasso.js'

export default function getData(){
 const name= document.querySelector('#name')
 let validName = false
 const email= document.querySelector('#email')
 let validEmail = false
 const phone = document.querySelector('#phone')
 let validPhone = false
 const btnNext = document.querySelector('.btnNext')
 const spanError = document.querySelectorAll('.error')


 function validaNome(){
  if(name.value.length >= 12){
    validName = true
    console.log(validName)
    return validName
  }else{
    validName = false
    console.log(validName)
  }
  return validName
}
function validaEmail(){
  if(email.value.length >= 18){
    validEmail = true
    console.log(validEmail)
  }else{
    validEmail = false
    console.log(validEmail)
  }
  return validEmail
}
function validaPhone(){
  if(phone.value.length>=9){
    validPhone = true
    console.log(validPhone)
  }else{
    validPhone = false
    console.log(validPhone)
  }
}

function validaCampos(){
  if(validName){
    name.style.borderColor = 'hsl(229, 24%, 87%)'
    spanError[0].innerHTML = ''
  }else{
    name.style.borderColor = ' hsl(354, 84%, 57%)'
    spanError[0].innerHTML = 'This field is required'
  }if(validEmail){
    email.style.borderColor = 'hsl(229, 24%, 87%)'
    spanError[1].innerHTML = ''
  }else{
    email.style.borderColor = 'hsl(354, 84%, 57%)'
    spanError[1].innerHTML = 'This field is required'
  }if(validPhone){
    phone.style.borderColor = 'hsl(229, 24%, 87%)'
    spanError[2].innerHTML = ''
  }else{
    phone.style.borderColor = 'hsl(354, 84%, 57%)'
    spanError[2].innerHTML = 'This field is required'
  }
  
  if(validName && validEmail && validPhone){
    trocaDePasso();
  }
}
 name.addEventListener('keyup',validaNome)
 email.addEventListener('keyup',validaEmail)
 phone.addEventListener('keyup',validaPhone)
 btnNext.addEventListener('click', validaCampos)

}