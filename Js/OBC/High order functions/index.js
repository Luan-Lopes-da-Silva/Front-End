function calculate(a,b,operation){
console.log('Performing a operation')
const result = operation(a,b) // sum(5,3)
return result
}

function sum(a,b){
console.log('Performing a sum')
return a+b
}

console.log(calculate(5,3,sum))


console.log(calculate(8,3,function(a,b){
console.log('Performing a subtraction')
return a-b
}))//High order function using a anonymous function

function showElement(element,index,array){
console.log(
  element,
  index,
  array
)
}

const list = ['Luan','José','Kauan','Maria','Leonardo']

for(index=0;index<list.length;index++){
  showElement(list[index],index,list)
}

list.forEach(showElement)
list.forEach(function(element,index,array){
  console.log(
    element,
    index,
    array
  )
})

