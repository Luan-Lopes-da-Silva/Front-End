import products from '../../db.json'
import {useParams} from 'react-router-dom'
import style from './editItem.module.scss'
import {useState } from 'react'



export default function EditItem(){
  const {itemId} = useParams()
  let product = products.products.find(i=>i.id === +itemId)
  console.log(product.id)
  const [name,setName] = useState(product.name)
  const [quantity,setQuantity] = useState(product.quantity)
  const [price,setPrice] = useState(product.price)
  const [category,setCategory] = useState(product.category)
  const [description,setDescription] = useState(product.description)
  
  async function editedItem(ev){
    ev.preventDefault()
    const newProduct = {
    name,
    quantity,
    price,
    category,
    description,
    createdAt : product.createdAt,
    updated : new Date().toLocaleString('pt-br'),
    id:product.id  
    }
    if(product){
      const response =  await fetch(`http://localhost:3000/products/${product.id}`,{
      method:'PUT',
      body:JSON.stringify(newProduct),
      headers:{
        "Content-Type": "application/json"  
      },
      })
      const productResponse = await response.json() 
      products.products.slice(product,1,productResponse) 
      }
      setCategory('')
      setDescription('')
      setName('')
      setPrice('')
      setQuantity('')
    }
  return(
  <div>
  <h2 style={{color:'#FFF',marginBottom:'16px'}}>Atualizar Item - {product.name}</h2>
  <div>
  <form 
  className={style.form}
  onSubmit={(ev) => editedItem(ev)}
  >
  <div className={style.inputs}>
    <div>
      <label htmlFor="name">Nome</label>
      <input type="text" 
      id="name"
      value={name}
      onChange={(ev) => setName(ev.currentTarget.value)} 
      />
    </div>
    <div>
      <label htmlFor="quantity">Quantidade</label>
      <input 
      type="number" 
      id="quantity"
      value={quantity}
      onChange={(ev)=>setQuantity(ev.currentTarget.value)}
      />
    </div>
    <div>
      <label htmlFor="price">Preço</label>
      <input 
      type="number" 
      id="price"
      value={price}
      onChange={(ev)=>setPrice(ev.currentTarget.value)}
      />
    </div>
    <div>
      <label htmlFor="category">Categoria</label>
      <select id="category">
      <option 
      value={category}
      onChange={(ev)=>setCategory(ev.currentTarget.value)}
      >{category}
      </option> 
      <option value="Jogos">Jogos</option>
      <option value="Livros">Livros</option>
      <option value="Acessorios">Acessórios</option>
      <option value="Cozinha">Cozinha</option>
      <option value="Banho">Banho</option>
      </select>
    </div>
  </div>
  <label htmlFor="description">Descrição</label>
  <textarea 
  id="description" 
  cols="30" 
  rows="10"
  value={description}
  onChange={(ev)=>setDescription(ev.currentTarget.value)}
  ></textarea>
  <button>Salvar</button>
  </form>
  </div>
  </div>
  )
  }