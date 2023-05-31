function createBill(bill){
const article = document.createElement('article')
article.classList.add('finance')
article.id = bill.id

const name = document.createElement('h2')
name.classList.add('name')
name.textContent = bill.name

const value = document.createElement('span')
value.classList.add('value')
value.textContent = bill.value

article.append(name,value)
document.querySelector('#finances').appendChild(article)
}

async function fetchFinances(){
const finances = await fetch('http://localhost:3000/finances').then((res=>res.json()))
finances.forEach(createBill)
}

document.addEventListener('DOMContentLoaded', ()=>{
  fetchFinances()
})

const form = document.querySelector('#form1')
form.addEventListener('submit', async (ev)=>{
ev.preventDefault();

const bill = {
  name: document.querySelector('#name').value,
  value: document.querySelector('#value').value
}

const response = await fetch('http://localhost:3000/finances',{
  method:'POST',
  headers:{
  'Content-Type':'application/json'  
  },
  body:JSON.stringify(bill)
})
const savedArticle = await response.json()
form.reset()
createBill(savedArticle)
})



const form2 = document.querySelector('#form2').addEventListener('submit', async (ev)=>{
  ev.preventDefault();
  const url = 'http://localhost:3000/finances'
  const id = document.querySelector('#form2 #id')
  
fetch(url, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.json().filter(bill=>bill.id == id.value)) {
    console.log('Requisição PUT enviada com sucesso!');
  } else {
    console.error('Erro ao enviar a requisição PUT:', response.status);
  }
})
})


