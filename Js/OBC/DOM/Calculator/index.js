const display = document.getElementById('input')
const main = document.querySelector('main')
const root = document.querySelector(':root')
const result = document.getElementById('result')
const keyAllowed = ['(',')','/','C','7','8','9','4','5','6','1','2','3','0','.','=','+','-','*']

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
charKeyBtn.addEventListener('click',function(){
const value = charKeyBtn.dataset.value
display.value+=value
})  
})
document.getElementById('clear').addEventListener('click',function(){
display.value=""
display.focus()
result.value = ""
})

display.addEventListener('keydown',function(ev){
ev.preventDefault()
if(keyAllowed.includes(ev.key)){
display.value+=ev.key
return
}
if(ev.key==='Backspace'){
display.value = display.value.slice(0,-1)
}
if(ev.key === 'Enter'){
calculate()  
}
})

document.getElementById('equal').addEventListener('click',calculate)

function calculate(){
result.value = 'ERROR'
result.classList.add('error')
const resultValue = eval(display.value)
result.value=resultValue
result.classList.remove('error')
}

document.getElementById('themeSwitcher').addEventListener('click',function(){
if(main.dataset.theme==='dark'){
root.style.setProperty('--bg-color','#f1f5f9')
root.style.setProperty('--border-color','#aaa')
root.style.setProperty('--font-color', '#212529')
root.style.setProperty('--primary-color','#26834a')
main.dataset.theme = 'light'
}else{
  root.style.setProperty('--bg-color','#212529')
  root.style.setProperty('--border-color','#666')
  root.style.setProperty('--font-color', '#f1f5f9')
  root.style.setProperty('--primary-color','#4dff91')  
main.dataset.theme = 'dark'  
}
})

document.getElementById('copyToClipboard').addEventListener('click',function(ev){
const button = ev.currentTarget
if(button.innerText === 'Copy'){
  button.innerText = 'Copied'
  button.classList.add('success')
  navigator.clipboard.writeText(result.value)
}else{
  button.innerText = 'Copy'
  button.classList.remove('success')
}
})