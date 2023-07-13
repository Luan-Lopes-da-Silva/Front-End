import {Link} from 'react-router-dom'
import style from './home.module.scss'
import products from '../../db.json'
export default function Home(){
const totalItems = products.products.map(p=>p.quantity)
const sumItems = totalItems.reduce((acc,cur)=>{
return acc+parseFloat(cur)  
},0)
const finishingItems = products.products.filter(p=>p.quantity<5)
console.log(finishingItems)

  return(
    <div>
      <h1 className={style.h1}>Dashboard</h1>  
      <div className={style.countContainer}>
      <div className={style.count}>
      <span>Diversidade de itens</span>
      <h1>{5}</h1>
      </div>
      <div className={style.count}>
      <span>Inventario total</span>
      <h1>{sumItems}</h1>
      </div>
      <div className={style.count}>
      <span>Itens recentes</span>
      <h1>{products.products.length}</h1>
      </div>
      <div className={style.count}>
      <span>Itens acabando</span>
      <h1>{finishingItems.length}</h1>
      </div>
      </div>
      <div className={style.flex}>
      <div>
      <nav className={style.nav}>
        <li>Itens Recentes</li>
        <li>Ações</li>
      </nav>
        <div className={style.item}>
        <ul>
     {products.products.map((product)=>(
     <li key={product.id}>
      <span>{product.id}</span>
     <span>{product.name}</span>
     <span>{product.quantity} unid</span>
     <span>{product.category}</span>
     <div>
     <Link to={`/items/${product.id}`}> <button>Ver</button></Link>
  
     </div>
     </li> 
     ))}
    </ul>
        </div>
      </div>
      <div>
      <div>
      <div>
      <nav className={style.nav}>
        <li>Itens acabando</li>
        <li>Qtd</li>
        <li>Ações</li>
      </nav>  
      <div>
      {finishingItems.map((finish)=>(
      <div key={finish.id}>
      <span>{finish.name}</span>
      <span>{finish.quantity}</span>
      <Link to={`/items/${finish.id}`}><button>Ver</button></Link>
      </div>  
      ))}
      </div>
       
    
      </div>
      </div> 
      </div>
      </div>
      </div>
  )
}