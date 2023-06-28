import Button from "./Button";
import Checked from "./CheckedText";
import Input from "./Input";
import style from './firstColumn.module.css'
import Proptypes from "prop-types"

FirstColumn.propTypes = {
showContainer:Proptypes.bool,
setShowContainer:Proptypes.bool,
className:Proptypes.string,
btnClass:Proptypes.string,
containerClass:Proptypes.string,
h1Class:Proptypes.string,
spanClass:Proptypes.string,
classSpan:Proptypes.string,
img:Proptypes.string,
labelClass:Proptypes.string
}

export default function FirstColumn(props){
  return(
    <div 
    className={props.containerClass}
    >
   <h1
    className={style.h1}
    >Stay updated</h1>
    <span
    className={style.span}
    >Join 60,000+ product managers receiving monthly updates on:
    </span>
    <Checked text={'Product discovery and building what matters'}/>
    <Checked text={'Measuring to ensure updates are a sucess'} spanClass={props.spanClass} img={props.img}/>
    <Checked text={'And much more'} spanClass={props.spanClass} img={props.img}/>
    <Input input={style.input} label={style.label}/>
    <Button className={props.btnClass} setShowContainer={props.setShowContainer} showContainer={props.showContainer}
    />
    </div>
  )
}