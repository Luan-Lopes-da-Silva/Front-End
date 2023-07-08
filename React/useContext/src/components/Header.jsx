import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Header(){
  const user = useContext(UserContext)
  return(
    <div>
    <h1>Boa tarde {user.name} </h1>
    </div>
  )
}