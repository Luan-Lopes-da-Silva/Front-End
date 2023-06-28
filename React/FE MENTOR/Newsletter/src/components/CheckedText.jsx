import ImgSucess from '../assets/Imgs/icon-success.svg'
import Proptypes from "prop-types"
import style from './checkedText.module.css'

Checked.propTypes = {
text:Proptypes.string,
}

export default function Checked(props){
  return(
    <div className={style.container}>
      <img src={ImgSucess} alt={ImgSucess}  />
      <p className={style.span}
      >{props.text}</p>
    </div>
  )
}