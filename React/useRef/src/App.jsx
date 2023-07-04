import { useRef, useState } from "react"
import RefExample from "./RefExample"

export default function App() {
  let variable = 0
  let [state,setState] = useState(0) 
  const ref = useRef(0)

  const showValues =  ()=>{
  alert(`
  Variavel: ${variable}
  State: ${state}
  Ref: ${ref.current}
  `)
  }
  return (
    <div>
      <p>Variavel: {variable}</p>
      <p>State: {state}</p>
      <p>Ref:{ref.current}</p>
      <button onClick={()=> variable++}>Aumentar Variavel</button>
      <button onClick={()=> ref.current++}>Aumentar Ref</button>
      <button onClick={()=>setState(state=>state+1)}>Aumentar State</button>
      <hr />
      <button onClick={showValues}>Mostrar valores</button>
      <hr />
      <RefExample/>
    </div>
  )
}


