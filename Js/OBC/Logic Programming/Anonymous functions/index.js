helloWorld()
hiWorld()

function sum(a,b){
  return a+b
}

let operation = sum

console.log(operation(4,5))

operation = function(a,b){
  return a-b
}

console.log(operation(4,5))

function helloWorld(){
  console.log('Hello, world')
}

//When a function is create this form she already goes up code so don´t hide a message of error. 

const hiWorld = function(){
  console.log('Hi, world')
}
//In this case gives a message of error because cannot acess before initialization