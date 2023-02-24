const inputMyAge = document.querySelector('#myAge')
const inputYourAge = document.querySelector('#yourAge')
const btn = document.querySelector('button')
const spanText = document.querySelector('span')

function verifyAge(){
  if(inputMyAge.value < inputYourAge.value){
    spanText.innerText = 'I am more young'
  }else if(inputMyAge.value > inputYourAge.value){
    spanText.innerText = 'I am more old'
  }else if(inputMyAge.value === inputYourAge.value){
    spanText.innerText = 'You are the same age as me'
  }
}


btn.addEventListener('click',verifyAge)