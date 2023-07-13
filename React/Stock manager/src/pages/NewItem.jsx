import useCategory from '../hooks/useCategory'
import useDescription from '../hooks/useDescription'
import useName from '../hooks/useName'
import usePrice from '../hooks/usePrice'
import useQuantity from '../hooks/useQuantity'
import style from './newitem.module.scss'

export default function NewItem(){
const {name,setName} = useName()
const {quantity,setQuantity} = useQuantity()
const {price,setPrice} = usePrice()
const {category,setCategory} = useCategory()
const {description,setDescription} = useDescription()
async function createProduct(ev){
ev.preventDefault()
  const product ={
  name,
  quantity,
  price,
  category,
  description,
  createdAt: new Date().toLocaleString('pt-br')  
}

const response = await fetch('http://localhost:3000/products',{
method:'POST',
headers:{
  'Content-Type': 'application/json'  
},
body:JSON.stringify(product)  
})
response
}
return(
<div>
  <form
  id='form' 
  className={style.form}
  onSubmit={(ev)=>createProduct(ev)}
  >
  <div className={style.inputs}>
    <div>
      <label htmlFor="name">Nome</label>
      <input 
      type="text"
      id="name"
      value={name}
      onChange={(ev)=>setName(ev.currentTarget.value)}
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
      <select 
      id="category"
      value={category}
      onChange={(ev)=>setCategory(ev.currentTarget.value)}
      >
      <option value="Selecione uma categoria...">Selecione uma categoria...</option>
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
)
}