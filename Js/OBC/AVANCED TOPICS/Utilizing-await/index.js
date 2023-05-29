async function asyncSum(a,b){
  if(typeof a!=='number' || typeof b!=='number'){
  return Promise.reject('Number for sum must be a number')
  }else{
  return a+b 
  }
 
}

//async function execute(){
//  asyncSum(20,2).then((result)=>{
//  console.log(result)
//  })
//}

async function execute(){
  try {
  const result = await asyncSum(20,20)
  console.log(result)
  } catch (err) {
  console.log(err) 
  }
  
}

execute();