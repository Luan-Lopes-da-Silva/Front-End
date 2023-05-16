export default function(){
  let x = 10
  
  function printValue(){
  let y = 20
  x = 30
  console.log({x,y})
  }
  console.log(x)
  printValue();
}

//First console show the number 10 that is of the variable global after in function console show the number 30 that is the value of declaration for this variable in scope of function.