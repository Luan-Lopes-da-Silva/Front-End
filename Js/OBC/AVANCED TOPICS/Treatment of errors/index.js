function sum(a,b){
  const firstNumber = Number(a)
  const secondNumber = Number(b)

  if(isNaN(firstNumber)|| isNaN(secondNumber)){
    throw new Error('Arguments must be two numbers')
  }
  return firstNumber+secondNumber
}
try{
  console.log(sum(10,2))
  console.log(sum(10,'1'))
  console.log(sum(10,true))
  console.log(sum(10,false))
  console.log(sum(20,undefined))
  console.log(sum(20,null))
}catch(error){
console.log('An error ocurred')
console.log(error.message)
}finally{
  console.log('Calculations finished')
}

