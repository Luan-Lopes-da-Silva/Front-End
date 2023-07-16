import {Link} from 'react-router-dom'
import style from './home.module.scss'
import products from '../../db.json'
export default function Home(){
const totalItems = products.products.map(p=>p.quantity)
const sumItems = totalItems.reduce((acc,cur)=>{
return acc+parseFloat(cur)  
},0)
const finishingItems = products.products.filter(p=>p.quantity<5)

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
      {isNaN(sumItems)?(
        <h1>0</h1>
      ):(
        <h1>{sumItems}</h1>
      )}
    
      </div>
      <div className={style.count}>
      <span>Itens recentes</span>
      {isNaN(sumItems)?(
      <h1>0</h1>  
      ):(
      <h1>{products.products.length}</h1>
      )}
      </div>
      <div className={style.count}>
      <span>Itens acabando</span>
      <h1>{finishingItems.length}</h1>
      </div>
      </div>
      <div className={style.flex}>
      <div>
      <div>
      <div>
      <nav className={style.nav}>
        <li>Itens Recentes</li>
        <li>Ações</li>
      </nav>
      {isNaN(sumItems)?(null):(
        <div>
        {products.products.map((product)=>(
        <div key={product.id} className={style.item}>
        <span>{product.name}</span>
        <Link to={`/items/${product.id}`}><button>Ver</button></Link>
        </div>  
        ))}
        </div>
      )}  
     
      </div>
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
      <div >
      {finishingItems.map((finish)=>(
      <div key={finish.id} className={style.item}>
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