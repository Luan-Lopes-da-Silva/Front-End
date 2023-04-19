function newElement(){
  const ulList = document.getElementById('inputs')
  
  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerText = 'New input: '

  const newInput = document.createElement('input')
  newInput.type= 'text'
  newInput.name = 'input1'

  newLi.appendChild(newInput)
  ulList.appendChild(newLi)
}