import{Link} from 'react-router-dom'
import style from './header.module.scss'
export default function Header(){
return(
  <nav className={style.nav}>
  <ul className={style.ul}>
    <h3>React Stock</h3>
    <div className={style.div}>
      <Link to='/'>Inicio</Link>
      <Link to='/items'>Items</Link>
    </div>
  </ul>
  </nav>
)
}