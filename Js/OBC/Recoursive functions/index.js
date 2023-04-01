//Recoursive function is a function wich call she same 
 function divide(num){
  console.log(num)
  if(num%2===0){
    divide(num/2)
  }else{
    return num
  }
 }
 divide(16)

 //We have to make sure the function has a way to stop calling it repeatedly.

 function factorial(num) {
  console.log("num = " + num)
  if (num === 0) { // base case
    return 1
  } else if (num === 1) { // base case
    return 1
  } else {
    console.log(num + " * !" + (num - 1))
    return num * factorial(num - 1)
  }
}

console.log("\n!8 = " + factorial(8))