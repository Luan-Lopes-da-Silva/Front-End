function imcAss(weight,height){
return new Promise((resolve,reject)=>{
if(typeof weight ==='number' && typeof height==='number'){
console.log('Promise are being executed')
  console.log('Resolving the promise')
  resolve(weight/(height*height))
}else{
console.log('Promise are being executed')
setTimeout(() => {
console.log('Rejecting the promise')
reject(`One of the params not is an number`)
}, 1000);
}
})
}


function calculateImc(weight,height){
imcAss(weight,height).then((result)=>{
console.log(`The result of imc was ${result}`)  
if(result<18.5){
  console.log(`Thinness`)  
}else if(result<25){
  console.log(`Normal`)  
}else if(result<30){
  console.log(`Overweight`)  
}else if(result<40){
  console.log(`Obesity`)  
}else{
  console.log(`Severe obesity`)  
}
}).catch((err)=>{
 console.log(err) 
})
console.log(`Calculing the imc for weight ${weight} and height ${height}...`)
}

calculateImc(55,1.95)
calculateImc(55,'1.95')