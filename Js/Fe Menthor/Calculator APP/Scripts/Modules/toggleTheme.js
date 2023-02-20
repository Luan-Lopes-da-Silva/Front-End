export default function toggleTheme(){
  let btn =  document.querySelector('.header-calc .toggle')
  let btnBackground = document.querySelector('.header-calc .background')
  let body = document.querySelector('body')
  let headerCalc =document.querySelector('.header-calc')
  let display = document.querySelector('.display')
  let numberScreen = document.querySelector('.number-screen')
  let numberContainer =document.querySelector('.numbers-container')
  let number = document.querySelectorAll('.number')
  let operator = document.querySelectorAll('.operator')
  let separator = document.querySelector('.separator')
  let blueKey = document.querySelector('.blue-key')
  let resetKey = document.querySelector('.reset')
  let equalKey = document.querySelector('.equal-key')


  let clique = 0
  function switchTheme(){
    clique++
    if(clique == 1){
      btn.style.marginLeft = 30+"px"
      body.classList.add('light-scheme')
      btn.classList.add('light-scheme')
      btnBackground.classList.add('light-scheme')
      headerCalc.classList.add('light-scheme')
      display.classList.add('light-scheme')
      numberScreen.classList.add('light-scheme')
      numberContainer.classList.add('light-scheme')
      number.forEach((numberItem)=>{
        numberItem.classList.add('light-scheme')
      })
      operator.forEach((operatorItem)=>{
        operatorItem.classList.add('light-scheme')
      })
      separator.classList.add('light-scheme')
      blueKey.classList.add('light-scheme')
      resetKey.classList.add('light-scheme')
      equalKey.classList.add('light-scheme')
    }
    else if(clique ==2){
      btn.style.marginLeft = 50+"px"
      body.classList.add('dark-scheme')
      btn.classList.add('dark-scheme')
      btnBackground.classList.add('dark-scheme')
      headerCalc.classList.add('dark-scheme')
      display.classList.add('dark-scheme')
      numberScreen.classList.add('dark-scheme')
      numberContainer.classList.add('dark-scheme')
      number.forEach((numberItem)=>{
        numberItem.classList.add('dark-scheme')
      })
      operator.forEach((operatorItem)=>{
        operatorItem.classList.add('dark-scheme')
      })
      separator.classList.add('dark-scheme')
      blueKey.classList.add('dark-scheme')
      resetKey.classList.add('dark-scheme')
      equalKey.classList.add('dark-scheme')
    }
    else{
      clique = 0
      btn.style.marginLeft = 8+"px"
      body.classList.remove('dark-scheme','light-scheme')
      btn.classList.remove('dark-scheme','light-scheme')
      btnBackground.classList.remove('dark-scheme','light-scheme')
      headerCalc.classList.remove('dark-scheme','light-scheme')
      display.classList.remove('dark-scheme','light-scheme')
      numberScreen.classList.remove('dark-scheme','light-scheme')
      numberContainer.classList.remove('dark-scheme','light-scheme')
      number.forEach((numberItem)=>{
        numberItem.classList.remove('dark-scheme','light-scheme')
      })
      operator.forEach((operatorItem)=>{
        operatorItem.classList.remove('dark-scheme','light-scheme')
      })
      separator.classList.remove('dark-scheme','light-scheme')
      blueKey.classList.remove('dark-scheme','light-scheme')
      resetKey.classList.remove('dark-scheme','light-scheme')
      equalKey.classList.remove('dark-scheme','light-scheme')
    }
  }

  
btn.addEventListener('click',switchTheme)
}

