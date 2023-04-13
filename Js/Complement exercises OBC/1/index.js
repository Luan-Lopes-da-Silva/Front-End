const message = alert('Welcome! Next we will ask some datas')
let name = prompt('Input your name please')
let age = prompt('Input your age please')
const confirmation = confirm('Your age it´s correct? ' + age +  ' years old')
function createObject(){
if(name&&age&&confirmation){
const newObject = {
  name,
  age
}
alert(
        'Thanks'+
        '\n' + name +
        '\n' + age + ' years old'
      )
console.log(newObject)
}else{
  age = prompt('Input your age please')
  const newObject = {
    name,
    age
  }
  alert(
    'Thanks'+
    '\n' + name +
    '\n' + age + ' years old'
  )
  console.log(newObject)
}
}



createObject();