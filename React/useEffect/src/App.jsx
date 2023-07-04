import { useEffect, useState } from 'react'
import './App.css'

function Counter(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
  console.log('O efeito colateral foi ativado')

  return()=>{
    console.log('Fazendo a limpeza...')
    console.log('Componente desmontado...')
  }
  },[])

  return(
    <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
    </button>
  )
}
function App() {
const [show,setShow] = useState(false)

  return (
    <>
    <h1>Conhecendo o useEffect</h1>
     <div>
      <input 
      type="checkbox" id="show" 
      onChange={()=>setShow(state=>!state)}
      />
      <label htmlFor="show">Exibir</label>
     </div>
     {show?(
      <Counter/>
     ):(
      null
     )}
    </>
  )
}

export default App
