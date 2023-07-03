import { useState } from "react"
import style from './app.module.css'

const comentsArray = [
]


  
export default function App(){
  const [emailValue,setEmailValue] = useState('') 
  const [comentValue,setComent] = useState('')

  const addComent = ({emailValue,comentValue})=>{
    const newDate = new Date()
    const date = newDate.toLocaleString('pt-BR', {timeZone:'America/Sao_Paulo'})
    const id = Math.floor(Math.random() * 1000000)
    const newComent = {id,emailValue,date,comentValue}
    setComent(state=>{
    const newState = [...state,newComent]
    return newState
    })
    comentsArray.unshift(newComent)
    }

    const handleSubmit = (ev) =>{
    ev.preventDefault()
    addComent({emailValue,comentValue})
    setComent('')
    setEmailValue('')
    }

  return(
  <section className={style.container}>
    <h1 className={style.h1}>Seção de Comentários</h1>
    <form onSubmit={handleSubmit} className={style.form}>
    <label
     htmlFor="email"
     className={style.label}
     >Email</label>
    <input 
    type="text" 
    id="email"
    value={emailValue}
    onChange={(ev) => setEmailValue(ev.target.value)}
    className={style.input}
    ></input>
    <label 
    htmlFor="coment"
    className={style.label}
    >Comentario</label>
    <textarea 
    id="coment" cols="30" rows="10"
    value={comentValue}
    onChange={(ev) => setComent(ev.target.value)}
    className={style.textarea}
    ></textarea>
    <button
    className={style.button}
    >
    Enviar comentario
    </button>
    </form>
   {comentsArray.length>0?(
    <div>
    {comentsArray.map((comment)=>(
    <div key={comment.id} className={style.comentContainer}>
    <span>{comment.emailValue}</span>
    <span>Em {comment.date}</span>
    <span>{comment.comentValue}</span>
    </div>  
    ))}
    </div>
   ):(
    <div>
      <p>Seja o primeiro a comentar!</p>
    </div>
   )}
  

  </section>
  )
}