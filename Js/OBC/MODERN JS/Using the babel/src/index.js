const arithmeticMedian = (...numbers)=>{
return numbers.reduce((accum,num)=>accum+num,0)/numbers.length
}

const weightedArithmeticMean = (...entries)=>{
 const sum = entries.reduce((accum,{number,weight})=>accum+(number*weight),0)
 const sumWeight = entries.reduce((accum,entry)=>accum+entry.weight,0)
 return sum/sumWeight
}

const median = (...numbers)=>{
const orderedNumbers = [...numbers].sort((a,b)=>a-b)
const middle = Math.floor(orderedNumbers.length/2)
if(orderedNumbers.length%2!==0){
  return orderedNumbers[middle] 
}else{
  const firstMedian = orderedNumbers[middle-1]
  const secondMedian = orderedNumbers[middle]
  return arithmeticMedian(firstMedian,secondMedian)
}
}

const mode = (...numbers)=>{
  const quantities = numbers.map(num=>[
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a,b)=>b[1] - a[1])
  return quantities[0][0]
} 

console.log(`${mode(1,1,5,4,9,7,4,3,5,2,4,0,4)}`)
console.log(`${median(15,14,8,7,3)}`)

console.log(arithmeticMedian(2,6,3,7,4))
console.log(`${weightedArithmeticMean(
 {number:9,weight:3},
 {number:7,weight:1},
 {number:10,weight:1}
 )}`)