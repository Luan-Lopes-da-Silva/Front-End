import Proptypes from "prop-types"
import style from './button.module.css'

Button.propTypes = {
showContainer:Proptypes.bool,
setShowContainer:Proptypes.bool
}

export default function Button(props){
  return(
  <button 
  className={style.button}
  value={props.showContainer}
  onClick={()=> props.setShowContainer(show => !show)}
  >Subscribe to monthly newsletter</button>
  )
}