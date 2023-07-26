import { Link,Outlet } from "react-router-dom";

export default function Layout(){
return(
<div>
  <header>
  <h1>Seja bem vindo</h1>
  <nav style={{display:'flex',gap:'2rem'}}>
  <Link to='/'>Home</Link>
  <Link to='/about'>Sobre</Link>
  <Link to='/contact'>Contato</Link>
    </nav>
  </header>
  <hr/>
  <main>
  <Outlet/>
  </main>
  <hr/>
  <footer>
  <nav>
    <li>DevsSolutions Ltda.</li>
    <li>Rua Exemplo, 123</li>
    <li>Cidade, Estado</li>
    <li>CEP: 12345-678</li>
  </nav>
  <nav>
    <li>Email: suporte@techsolutions.com</li>
    <li>Telefone: +55 12 9876-5432</li>
  </nav>
  </footer>
</div>

)
}