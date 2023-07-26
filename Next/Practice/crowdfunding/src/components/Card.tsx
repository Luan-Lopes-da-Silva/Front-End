import Image from 'next/image'
import style from './card.module.scss'

type Content = {
plan:string,
price:string,
content:string,
units: string
}

export default function Card(props:Content){
  return(
  <>
  {props.units === '0'?(
  <div className={style.card2}>
  <div className={style.header}>
    <h3>{props.plan}</h3>
    <h4>{props.price}</h4>
  </div>
  <p>{props.content}</p>
  <div className={style.footer}>
  <div className={style.text}>
    <h1>{props.units}</h1>
    <h6>left</h6>
  </div>
  <button>Out of stock</button>  
  </div> 
  </div>
  ):(
  <div className={style.card}>
  <div className={style.header}>
    <h3>{props.plan}</h3>
    <h4>{props.price}</h4>
  </div>
  <p>{props.content}</p>
  <div className={style.footer}>
  <div className={style.text}>
    <h1>{props.units}</h1>
    <h6>left</h6>
  </div>
  <button>Select Reward</button>  
  </div> 
  </div>
  )}
  
  </>
  )
}