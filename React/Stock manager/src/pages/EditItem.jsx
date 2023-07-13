import Form from "../components/Form";
import products from '../../db.json'
import {useParams} from 'react-router-dom'


export default function EditItem(){
  const {itemId} = useParams()
  const product = products.products.find(i=>i.id === +itemId)
  return(
  <div>
  <h2 style={{color:'#FFF',marginBottom:'16px'}}>Atualizar Item - {product.name}</h2>
  <Form/>
  </div>
  )
  }