import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header"
import style from './root.module.scss'
export default function RootLayout(){
  return(
<div>
    <Header/>
    <h1>Stock Items</h1>
    <div>
    <ul className={style.ul}>
      <li><Link to='/items'>Todos os itens</Link></li>
      <li><Link to='new-item'>Novo Item</Link></li>
    </ul>
    </div>
    <main>
      <Outlet/>
    </main>
    <footer>
    <span>Feito com React e React Router! </span> 
    </footer>
  </div>
  )
  }