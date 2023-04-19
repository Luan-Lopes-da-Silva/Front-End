function register(element){
const userName = element.children.username.value
const password = element.children.password.value
const confirmPassword = element.children.passwordConfirmation.value

if(password === confirmPassword){
alert('User ' + userName + ' registered')
}else{
alert('Passwords do not match')
}
}