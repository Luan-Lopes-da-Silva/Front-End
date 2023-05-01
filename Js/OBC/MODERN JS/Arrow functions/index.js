function normalSum(a,b){
return a+b
}

console.log(`The normal sum is ${normalSum(4,2)}`)


const anonymousSum = function(a,b){
return a+b
}

console.log(`The anonymous sum is ${anonymousSum(4,7)}`)

const arrowSum = (a,b) =>{
  return a+b
}

console.log(`The arrow function sum is ${arrowSum(10,2)}`)

const arrowSubtract = (a,b) => a-b


console.log(`The arrow function simplified is ${arrowSubtract(10,2)}`)


const double = n => `The double of ${n} is ${n*2}`
const number = 37
console.log(double(number))

const names = ['Luan', 'Leonardo','Kauan','Kaue']

const startingWithL = names.filter(name => name[0] === 'L')

console.log(startingWithL)