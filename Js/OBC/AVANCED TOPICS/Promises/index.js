function execute(name){
if(name==='Luan'){
return new Promise((resolve)=>{
console.log('The promise are being executed')
setTimeout(()=>{
console.log('Resolved the promise')
resolve('Result')
},1000)
})
}else{
  return new Promise((reject)=>{
    console.log('The promise are being executed')
    setTimeout(()=>{
    console.log('Rejecting the promise')
    reject('Promise reject')
    },1000)
    })
}
}

//const p = execute('Luan')
//console.log(p)
//setTimeout(()=>{
//  console.log(p)
//},2000)

const p2 = execute('José')
console.log(p2)
setTimeout(()=>{
  console.log(p2)
},2000)
