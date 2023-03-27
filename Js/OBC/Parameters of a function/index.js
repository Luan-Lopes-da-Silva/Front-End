function double(x = 1){
alert('The double of ' + x + ' is ' + (x*2))
}
double(10)
double()


//Parameter = Define a default parameter for case in call of function no gone passed the parameter
function sayHello(name = 'default'){
alert('Hello ' + name)
}

sayHello('Luan')
sayHello()

function sum(a,b){
  alert('This result of sum is ' + (a+b))
}

sum(2,4)
//Ever put a optional param as last
function createUser(name,email,password,type = 'Admin'){
const user = {
  name,
  email,
  password,
  type
}
console.log(user)
}

function manyParams(name2,email,password,adress,phone,birthday,age){

}
function objectAsParam(user){
  console.log(user)
}

const datasOfUser = {
name:'Luan',
email:'luan@email.com',
password:1234,
adress:'Find Us',
phone:12345678,
birthday:03022000,
age:23
}

objectAsParam(datasOfUser)
createUser('Luan','devbolt@email.com',1234)