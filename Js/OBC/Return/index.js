function calcAverage(a,b){
const average = (a+b)/2
return average
}
const resultAverage = calcAverage(2,12)
console.log(resultAverage)

function createProduct(name,price){
const product = {
  name,
  price,
  stock:1
}
return product
}

console.log(createProduct('Notebook intel core i3', 2400))


function rectangularArea(base,height){
return base*height
}

function squareArea(side){
  return side*side
}

function olderAge(age){
  if(age>18){
    return 'You is bigger of age'
  }else{
    return 'You is minor'
  }
}

console.log(rectangularArea(3,5))
console.log(squareArea(3))
console.log(olderAge(22))
console.log(olderAge(3))