import CardStyle from './Card.module.css'
import Img from './assets/Image.jpg'
import Button from './components/Button'
import InformText from './components/InformText'
import Title from './components/title'

export default function Card(){
  return(
      <div className={CardStyle.container}>
        <img src={Img} alt="Star-war poster"/>
        <Title/>
        <InformText/>
        <Button/>
      </div>
  )
}