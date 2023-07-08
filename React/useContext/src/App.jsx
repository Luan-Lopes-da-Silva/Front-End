import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"

export default function App(){
  
  const user ={
  name:'Luan',
  email:'luan@email.com'
  }
 

  return(
    <UserContext.Provider value={user}>  
    <div id="app">
      <Header/>
      <h1>Aplicação</h1>
      <UserInfo/>
    </div>
    </UserContext.Provider>
  )
}