import { display } from "./consts.js"

export function calculate(){
  result.value = 'ERROR'
  result.classList.add('error')
  const resultValue = eval(display.value)
  result.value=resultValue
  result.classList.remove('error')
}
