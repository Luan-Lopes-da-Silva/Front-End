export default function(){
  const num1 = parseFloat(prompt('Insert the first number'))
  const num2 = parseFloat(prompt('Insert the second number'))
  const num3 = parseFloat(prompt('Insert the third number'))

  if(num1>num2 && num1>num3){
    alert('The first number is the bigger of all')
  }else if(num2>num1 && num2>num3){
    alert('The second number is the bigger of all')
  }else{
    alert('The third number is the bigger of all')
  }
}

