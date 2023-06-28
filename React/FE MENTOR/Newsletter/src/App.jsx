import FirstColumn from './components/FirstColumn'
import style from './app.module.css'
import Img from './assets/Imgs/illustration-sign-up-desktop.svg'
import { useState } from 'react'
import Thanks from './components/Thanks'

export default function App() {
const [showContainer,setShowContainer] = useState(false)
  
return (
        <div >
        {showContainer?
        (
        <Thanks/>
        ):(
          <div className={style.container}>
          <FirstColumn
          setShowContainer={setShowContainer}
          showContainer={showContainer}
        />
          <img src={Img} alt={Img} className={style.img}/>
        </div>
        )}
        </div>
  
  )
}


