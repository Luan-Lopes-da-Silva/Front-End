const btnLogin = document.querySelector('.btn-login')
const form = document.querySelector('form')
const email = document.querySelector('#login-email')
const password = document.querySelector('#login-password')

btnLogin.addEventListener('click', event =>{
event.preventDefault()
const fields =  [...document.querySelectorAll('.input-block input')]
fields.forEach(field =>{
if(field.value === '')form.classList.add('validate-error')    
})
const formError = document.querySelector('.validate-error')
if (formError){
 formError.addEventListener('animationend', (event)=>{
  if(event.animationName= 'nono'){
    form.classList.remove('validate-error')
  }  
 })   
} else{
    form.classList.add('form-hide')
}

})

form.addEventListener('animationstart',()=>{
   if(event.animationName==='down'){
    document.body.style.overflow='hidden' 
   } 
})

form.addEventListener('animationend', ()=>{
    if(event.animationName === 'down'){
        form.style.display='none' 
        document.body.style.overflow='none' 
     
}})


