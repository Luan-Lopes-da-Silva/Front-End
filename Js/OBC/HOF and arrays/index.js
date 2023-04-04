const persons = [
  {name:'Luan',age:23,genre:'Masc'},
  {name:'José',age:49,genre:'Masc'},
  {name:'Maria',age:45,genre:'Fem'},
  {name:'Luiza',age:8,genre:'Fem'},
  {name:'Leonardo',age:10,genre:'Masc'},
  {name:'Kauan',age:15,genre:'Masc'}
]

//Map

//const names = []

//for(let index = 0; index<persons.length; index++){
//  names.push(persons[index].name)
//}
//For each person we will go to take just the name and we will go to put in an array of names but exists one shape more ease of if make this


const names = persons.map(function(person){
return person.name
})
console.log(names)

//Filter
//const orcs = []
//for (let index = 0; index < persons.length; index++) {
//  if(persons[index].genre === 'Masc'){
//    orcs.push(persons[index])
//  }
//}

const masc = persons.filter(function(person){
  return person.genre === 'Masc' // Condition
})

console.log(masc)

//Reduce
const totalOfAges= persons.reduce(function(accumulatedValue,person){
  return accumulatedValue+person.age
},0) //<= Initial value of acummulated value

console.log(totalOfAges)


const genres = persons.reduce(function(accumulatedValue,person){
  if(accumulatedValue[person.genre]){ //The same thing wich say accumulatedValue.masc
    accumulatedValue[person.genre].push(person)
  }else{
    accumulatedValue[person.genre] = [person]
  }
  return accumulatedValue
},{})

console.log(genres)