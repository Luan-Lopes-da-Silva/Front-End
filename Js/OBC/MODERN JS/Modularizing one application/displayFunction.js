 import { display,result,keyAllowed,charKey} from "./consts.js"
 import { calculate } from "./calc.js"
 
 function clearDisplay(){
  display.value=""
  display.focus()
  result.value = ""
}

function printOnDisplay(ev){
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
}
  
  charKey.forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click',function(){
  const value = charKeyBtn.dataset.value
  display.value+=value
  })  
  })



export{clearDisplay,printOnDisplay}