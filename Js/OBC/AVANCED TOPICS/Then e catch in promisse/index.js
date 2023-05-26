function execute(name){
return new Promise((resolve,reject)=>{
console.log('The promise are being started')
if(name==='Luan'){
setTimeout(()=>{
console.log('Resolving the promise')
resolve('The name is the right')
},1000)
}else{
  setTimeout(()=>{
    console.log('Rejecting the promise')
    reject('The name is wrong')
    },1000)
}
})
}


execute('José').then((result)=>{
console.log(`The promise was resolved ${result}`)
}).catch((err)=>{
console.log(`The promise was rejected ${err}`)
}).finally(()=>{
console.log(`Finishing the promise`)
})