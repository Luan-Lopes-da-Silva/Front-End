console.log('Started program')

const timeOutId = setTimeout(()=>{
console.log('3 seconds if pass since that the program was started')
},3000)
clearTimeout(timeOutId)



let seconds = 0
const intervalId = setInterval(()=>{
seconds+=3
console.log(`If pass ${seconds} seconds`)
if(seconds>10){
  clearInterval(intervalId)
  console.log('Time is over!')
}
},1000*3)
console.log('Finished program')