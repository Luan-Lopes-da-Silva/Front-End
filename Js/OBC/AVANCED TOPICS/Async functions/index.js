async function asyncSum(a,b){
  return a+b 
}

async function asyncSubtract(a,b){
  return a-b
}

const sum = asyncSum(10,2)
const sub = asyncSubtract(40,2)
Promise.all([sum,sub]).then((results)=>{
console.log(results)
}).catch((err)=>{
console.log(err)
})


const numbers = [2,4,6,8,9,10]

async function asyncSquare(x){
  return x*x
}

Promise.all(numbers.map((number=>asyncSquare(number)))).then((squares)=>{
console.log(squares)
}).catch((err)=>{
console.log(err)
})
