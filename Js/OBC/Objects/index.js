let person={
  name:'Luan',
  age:23,
  work(work){
  if(work==='yes'){
  console.log('Yes i work')
  }else{
  console.log('No i´dont work')
  }
  },
  adress:{
  street:'Here close',
  neighborhood:'Center',
  number:150
  }
}

console.log(person)
console.log(person.name)
console.log(person.adress)
console.log(person.adress.street)
console.log(person.work)
console.log(person.work('yes'))

let name = 'prop'

let object={
  prop:'Hello word'
}

console.log(object.prop===object[name])