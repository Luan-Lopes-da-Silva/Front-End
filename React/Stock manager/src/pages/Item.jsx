import {Link, useParams} from 'react-router-dom'
import style from './item.module.scss'
import products from '../../db.json'
export default function Item(){
const {itemId} = useParams()
const product = products.products.find(i=>i.id === +itemId)

async function excludeItem(ev){
ev.preventDefault()
if(product){
  const response =  await fetch(`http://localhost:3000/products/${product.id}`,{
  method:'PUT',
  body: JSON.stringify(),
  headers:{
    "Content-Type": "application/json"  
  },
  })
  const productResponse = await response.json() 
  const findItem = products.products.filter((p)=> p.id === product.id)
  console.log(findItem)
  products.products.slice(findItem,1,productResponse) 
  setTimeout(()=>{
  window.location.href = '/'
  },1000) 
  }
}
return(
  <div>
    <div className={style.item}>
      <h3>{product.name}</h3>
      <button><Link to={`/edit-item/${product.id}`}>Atualizar</Link></button>
      <button
      onClick={(ev)=>excludeItem(ev)}
      >Excluir</button>
    </div>
    <div className={style.descriptions}>
    <div>
    <span>Categoria: {product.category}</span>
    <span>Quantidade em estoque: {product.quantity}</span>
    <span>Preço: R$ {product.price}</span>  
    </div>
    </div>
    <div className={style.dataContainer}>
    <p>{product.description}</p>
    {product.updated?(
    <div className={style.datas}>
      <p>Cadastrado em: {product.createdAt}</p>
      <p>Atualizado em: {product.updated}</p>
    </div>
    ):(
    <div className={style.datas}>
      <p>Cadastrado em: {product.createdAt}</p>
    </div>
    )}
    
    </div>
  </div>
)  
}