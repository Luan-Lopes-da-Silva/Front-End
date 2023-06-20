import CardStyle from './Card.module.css'
import InformText from './components/InformText'

// eslint-disable-next-line react/prop-types
export default function Card({posterImg,title,text}){
  return(
      <div className={CardStyle.container}>
        <img src={posterImg} alt="Star-war poster"/>
        <h1 style={{
        color:'#264653'
        }}>{title}</h1>
        <InformText/>
        <button>{text}</button>
      </div>
  )
}