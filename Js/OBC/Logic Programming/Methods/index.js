let person ={
  name:'Luan',
  age:23,
  sayMyname(){
  console.log('Hello my name is ' + this.name + ' i`am ' + this.age + ' years old')
  }
}
console.log(person)
person.sayMyname()