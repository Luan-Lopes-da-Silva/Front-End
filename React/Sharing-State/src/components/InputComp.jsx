import PropTypes from 'prop-types'

InputComp.propTypes = {
  passwordSize: PropTypes.number,
  setPasswordSize: PropTypes.func
}
export default function InputComp(props){
return(
  <input type="number" 
  id='passwordSize'
  min={1}
  value={props.passwordSize}
  onChange={(ev) => props.setPasswordSize(ev.target.value)}
  />
)
}