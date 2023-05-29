function checkAge(age){
  return new Promise((resolve, reject) => {
    if(age){
    resolve(age>18)
    }else{
    reject(new Error('age is required'))
    }
  })
}


function getAge(birthday){
  return new Promise((resolve, reject) => {
    if(birthday){
      const birthYear = new Date(birthday).getFullYear()
      const yearCurrent = new Date().getFullYear()
      resolve(yearCurrent-birthYear)
    }else{
      reject(new Error('Birthday is required'))
    }
  })
}


getAge('2012-09-02').then((age)=>{
return checkAge(age)
}).then((isOver18)=>{
 if (isOver18){
 console.log('Of age')
 }else{
 console.log('Minor')
 }
}).catch((err)=>{
console.log(err.message)
})



