function step2(){
  console.log('Step 2')
}

console.log('Step 1')
step2()
console.log('Step 3')
console.log('Step 4')
setTimeout(()=>{
  console.log('Step 5')
},1000)
console.log('Step 6')


