function asyncSum(a,b){
  return new Promise((resolve, reject) => {
    if(typeof a!=='number' || typeof b!=='number'){
      reject('Arguments must be a number 1')
    }else{
      resolve(a+b)
    }
  })
}

function asyncSubtract(a,b){
  return new Promise((resolve, reject) => {
    if(typeof a!=='number' || typeof b!=='number'){
      reject('Arguments must be a number 2')
    }else{
      resolve(a-b)
    }
  })
}

const sum = asyncSum(10,2)
const sub = asyncSubtract(40,2)
Promise.all([sum,sub]).then((results)=>{
console.log(results)
}).catch((err)=>{
console.log(err)
})


const numbers = [2,4,6,8,9,10]

function asyncSquare(x){
  return new Promise((resolve, reject) => {
    if(typeof x!=='number'){
      reject('Argument must be a number')
    }else{
      resolve(x*x)
    }
})
}

Promise.all(numbers.map((number=>asyncSquare(number)))).then((squares)=>{
console.log(squares)
}).catch((err)=>{
console.log(err)
})
