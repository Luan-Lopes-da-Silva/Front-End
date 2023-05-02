const person = {
  name : 'Luan',
  age: 23,
  parents:['José','Maria']
}

const name = person.name
console.log(name)

const {age,parents} = person
console.log(age,parents)

const[father,mother] = parents
console.log(`${father} and ${mother}`)

function createUser({name,age,parents}){
const id = Math.floor(Math.random()*9999)
return{
id,
name,
age,
parents,
}
}

console.log(createUser(person))