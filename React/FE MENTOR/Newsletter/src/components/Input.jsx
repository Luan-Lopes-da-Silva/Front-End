import Proptypes from "prop-types"


Input.propTypes = {
input:Proptypes.string,
label:Proptypes.string,
className:Proptypes.string,

}

export default function Input(props){
  return(
    <div>
    <label htmlFor="email" {...props} className={props.label}>Email adress</label>
    <input type="text" placeholder="email@company.com" name="email" id="email" {...props} className={props.input}/>
    </div>
  )
}