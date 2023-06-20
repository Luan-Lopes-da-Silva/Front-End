import style from './App.module.css'
import Card from './Card'
import Img from './assets/Image.jpg'
import Img2 from './assets/Image2.jpg'
import Img3 from './assets/Image3.jpg'


export default function App() {
  return (
    <div className={style.app}>
      <Card posterImg={Img2} title='Poster: Pânico 1' text='Alugue Pânico 1'/>
      <Card posterImg={Img} title='Poster: Pânico 2' text='Alugue Pânico 2'/>
      <Card posterImg={Img3} title='Poster: Pânico 3' text='Alugue Pânico 3'/>
    </div>
  )
}


