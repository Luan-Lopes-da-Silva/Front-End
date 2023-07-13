import {Link} from 'react-router-dom'
import style from './items.module.scss'
import products from '../../db.json'
export default function Items(){
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
     <li key={product.id}>
      <span>{product.id}</span>
     <span>{product.name}</span>
     <span>{product.quantity} unid</span>
     <span>{product.category}</span>
     <div>
     <Link to={`${product.id}`}> <button>Ver</button></Link>
       <button><Link to={`/edit-item/${product.id}`}>Atualizar</Link></button>
       <button>Excluir</button>
     </div>
     </li> 
     ))}
    </ul>
   </div>
  </main>
 </div> 
)
}