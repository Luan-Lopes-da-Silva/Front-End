const btn = document.getElementById('button-register')
const btnRemove = document.getElementById('remove-event')

function register(ev){
const target = ev.currentTarget.parentNode
const userName = target.children.username.value
const password = target.children.password.value
const passwordConfirmation = target.children.passwordConfirmation.value

if(password===passwordConfirmation){
alert('User ' + userName + 'registered')
}else{
alert('Passwords don´t match')
}
}

function removeEvent(){
btn.removeEventListener('click',register)
alert('Event removed')
}

btn.addEventListener('click',register)
btnRemove.addEventListener('click',removeEvent)
