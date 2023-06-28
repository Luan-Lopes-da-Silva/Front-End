import style from "./thanks.module.css"
import Img from '../assets/Imgs/icon-success.svg'

export default function Thanks(){
  return(
    <div className={style.container}>
      <img src={Img} alt={Img} />
      <h1 className={style.h1}>Thanks for Subscribing!</h1>
      <p className={style.text}>A confirmation email has been seent to <span className={style.span}>lopesluan18@outlook.com.</span> Please open it and click the button inside to confirm your subscription.</p>
      <button className={style.button}>Dismiss message</button>
    </div>
  )
}