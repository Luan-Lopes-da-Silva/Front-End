const position = document.getElementById('position')
const name = document.getElementById('name')
const number = document.getElementById('number')

function escalatePlayer(){
const section = document.getElementById('players')
const ul = document.createElement('ul')
const liPosition = document.createElement('li')
liPosition.innerText = 'Position: ' + position.value
const liName = document.createElement('li')
liName.innerText = 'Name: ' + name.value
const liNumber = document.createElement('li')
liNumber.innerText = 'Name: ' + number.value

const confirmation = confirm(
  'Are you sure?' +
  '\nPosition: '+ position.value +
  '\nName: ' + name.value +
  '\nNumber: ' + number.value
)

if(confirmation){
  ul.append(liPosition,liName,liNumber)
  section.appendChild(ul)
  position.value = ''
  name.value = ''
  number.value = ''
}

}

function removePlayer(){
const section = document.getElementById('players')
const ul = document.getElementsByTagName('ul')
section.removeChild(ul[ul.length-1])
position.value = ''
name.value = ''
number.value = ''
}