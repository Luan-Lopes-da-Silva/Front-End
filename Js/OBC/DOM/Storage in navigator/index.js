document.getElementById('sessionBtn').addEventListener('click',function(){
  const input = document.getElementById('session')
  sessionStorage.setItem('info',input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click',function(){
  const info = sessionStorage.getItem('info')
  alert('The info is ' + info)
})


document.getElementById('localBtn').addEventListener('click',function(){
  const input = document.getElementById('local')
  localStorage.setItem('info',input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click',function(){
  const info = localStorage.getItem('info')
  alert('The info is ' + info)
})

document.getElementById('cookieBtn').addEventListener('click',function(){
  // syntaxe of cookies 
  //cookieName=value; expires=UTCStringDate; path=/;
 const input = document.getElementById('cookie')
 const cookie =  'text=' + input.value + ';'
 const expires = 'expires=' + new Date(2023,3,29) + ';'
 const path = 'path=/;'
 document.cookie = cookie+expires+path
 input.value = ''
 console.log(document.cookie)
 })

document.getElementById('cookie2Btn').addEventListener('click',function(){
  // syntaxe of cookies 
 //cookieName=value; expires=UTCStringDate; path=/;
const input = document.getElementById('cookie2')
const cookie = 'phrase=' + input.value + ';'
const expires = 'expires=' + new Date(2023,3,28)
const path = 'path=/;'
document.cookie = cookie+expires+path
console.log(document.cookie)
})
