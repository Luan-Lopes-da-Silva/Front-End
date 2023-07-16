import {Link} from 'react-router-dom'
import style from './items.module.scss'
import products from '../../db.json'

export default function Items(){  
async function excludeItem(ev){
const container = ev.parentElement.parentElement.parentElement 
const containerId = parseFloat(container.id)

if(containerId){
  const response =  await fetch(`http://localhost:3000/products/${containerId}`,{
  method:'DELETE',
  headers:{
    "Content-Type": "application/json"  
  },
  })
  const product = await response.json() 
  const findItem = products.products.findIndex((p)=>p.id === containerId)
  products.products.slice(findItem,1,product)
  container.remove();    
  }else{
  console.log('Algo esta errado')  
  } 

}
return(
 <div>
  <div className={style.nav}>
    <span>ID</span>
    <span>Nome</span>
    <span>Em Estoque</span>
    <span>Categoria</span>
    <span>Ações</span>
  </div>
  <main>
   <div className={style.item}>
    <ul>
     {products.products.map((product)=>(
     <div key={product.id} id={product.id}>
       <li >
       <span>{product.id}</span>
       <span>{product.name}</span>
       <span>{product.quantity} unid</span>
       <span>{product.category}</span>
       <div>
       <Link to={`${product.id}`}> <button>Ver</button></Link>
         <button><Link to={`/edit-item/${product.id}`}>Atualizar</Link></button>
         <button onClick={(ev)=>excludeItem(ev.currentTarget)}>Excluir</button>
       </div>
       </li>
     </div>
     ))}
    </ul>
   </div>
  </main>
 </div> 
)
}