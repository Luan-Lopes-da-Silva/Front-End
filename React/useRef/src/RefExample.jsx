import { useRef } from "react";

export default function RefExample(){
const refInput = useRef(null)

const handleClick = () => {
refInput.current.focus()
}
return(
  <div>
    <input ref={refInput} type="text"/>
    <button onClick={handleClick}>Focar</button>
  </div>
)
}