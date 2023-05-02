function sum(...numbers){
return numbers.reduce((accum,num) => accum+num,0)
}

console.log(sum(20,20,10,5,80,100,90,120))