function createContact(){
  const section = document.getElementById('contacts')
  const ul = document.createElement('ul')
  const h3 = document.createElement('h3')
  h3.innerText = 'Contacts'
  
  const nameLi = document.createElement('li')
  nameLi.innerText = 'Name: '
  nameLi.className = 'test'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'name'



  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Phone: '
  phoneLi.className = 'test'
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'

  const addressLi = document.createElement('li')
  addressLi.innerHTML= '<label for = "address"> Address: </label>'
  addressLi.className = 'test'
  const addressInput = document.createElement('input')
  addressInput.name = 'address'
  addressInput.id = 'address'

  nameLi.appendChild(nameInput)

  ul.appendChild(nameLi)
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)

  section.append(h3,ul)
  
}

function removeContact(){
  const section = document.getElementById('contacts')

  const titles = document.getElementsByTagName('h3')
  const ul = document.getElementsByTagName('ul')

  section.removeChild(titles[titles.length-1])
  section.removeChild(ul[ul.length-1])
}