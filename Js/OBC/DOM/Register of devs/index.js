const formContainer = document.getElementById('dev-form')
const name = document.getElementById('name')
const hideForm = document.getElementById('hide-form')
const devs = []

formContainer.addEventListener('submit',function registerDevs(ev){
ev.preventDefault();
if(name.value){
const labelTechnology = document.createElement('label')
labelTechnology.innerText = 'Technology'
labelTechnology.setAttribute('for', 'technology')
const inputTechnology = document.createElement('input')
inputTechnology.type = 'text'
inputTechnology.name = 'technology'
inputTechnology.id = 'technology'
const labelRadio1 = document.createElement('label')
labelRadio1.innerText = '0-2 years'
const radio1= document.createElement('input')
radio1.type = 'radio'
radio1.name = 'exp'
radio1.id = 'radio1'
radio1.value = '0-2 years'
const labelRadio2 = document.createElement('label')
labelRadio2.innerText = '3-4 years'
const radio2= document.createElement('input')
radio2.type = 'radio'
radio2.name = 'exp'
radio2.id = 'radio2'
radio2.value = '3-4 years'
const labelRadio3 = document.createElement('label')
labelRadio3.innerText = '5+ years'
const radio3= document.createElement('input')
radio3.type = 'radio'
radio3.name = 'exp'
radio3.id = 'radio3'
radio3.value = '5+ years'


const btnRegister = document.createElement('button')
btnRegister.innerText = 'Register dev'
btnRegister.addEventListener('click',function register(ev){
  ev.preventDefault()

  const devObject={
    name:name.value,
    technology: inputTechnology.value,
    experience: document.querySelector('input[type="radio"]:checked').value
  }
devs.push(devObject)
alert('Dev registered')
console.log(devs)
name.value= ''
inputTechnology.value = ''
radio1.checked = false
radio2.checked = false
radio3.checked = false
hideForm.removeChild(labelTechnology)
hideForm.removeChild(inputTechnology)
hideForm.removeChild(labelRadio1)
hideForm.removeChild(radio1)
hideForm.removeChild(labelRadio2)
hideForm.removeChild(radio2)
hideForm.removeChild(labelRadio3)
hideForm.removeChild(radio3)
hideForm.removeChild(btnRegister)
hideForm.removeChild(btnRemove)
})
const btnRemove = document.createElement('button')
btnRemove.innerText = 'Remove input list'
btnRemove.addEventListener('click', function(){
  formContainer.removeEventListener('submit', registerDevs)
})
hideForm.append(labelTechnology,inputTechnology,labelRadio1,radio1,labelRadio2,radio2,labelRadio3,radio3,btnRegister,btnRemove)
}else{
  alert('Fill the form please!')
}
})