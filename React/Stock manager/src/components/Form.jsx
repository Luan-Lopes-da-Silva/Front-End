import style from './form.module.scss'
import products from '../../db.json'
import {useParams} from 'react-router-dom'
export default function Form(){
const {itemId} = useParams()
const product = products.products.find(i=>i.id === +itemId)
return(
<div>
  <form className={style.form}>
  <div className={style.inputs}>
    <div>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" value={product.name}/>
    </div>
    <div>
      <label htmlFor="quantity">Quantidade</label>
      <input type="number" id="quantity" value={product.quantity}/>
    </div>
    <div>
      <label htmlFor="price">Preço</label>
      <input type="number" id="price" value={parseFloat(product.price).toFixed(2)}/>
    </div>
    <div>
      <label htmlFor="category">Categoria</label>
      <select id="category" placeholder="Selecione uma categoria...">
      <option value={product.category}>{product.category}</option> 
      <option value="Jogos">Jogos</option>
      <option value="Livros">Livros</option>
      <option value="Acessorios">Acessórios</option>
      <option value="Cozinha">Cozinha</option>
      <option value="Banho">Banho</option>
      </select>
    </div>
  </div>
  <label htmlFor="description">Descrição</label>
  <textarea id="description" cols="30" rows="10" value={product.description}></textarea>
  <button>Salvar</button>
</form>
</div>
)
}