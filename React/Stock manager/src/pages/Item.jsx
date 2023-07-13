import {Link, useParams} from 'react-router-dom'
import style from './item.module.scss'
import products from '../../db.json'
export default function Item(){
const {itemId} = useParams()
const product = products.products.find(i=>i.id === +itemId)
return(
  <div>
    <div className={style.item}>
      <h3>{product.name}</h3>
      <button><Link to={`/edit-item/${product.id}`}>Atualizar</Link></button>
      <button>Excluir</button>
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
    <div className={style.datas}>
      <p>Cadastrado em: {product.createdAt}</p>
    </div>
    </div>
  </div>
)  
}