import img from "/react.png"
import './index.css'
export default function FirstComponent() {
  return (
    <div className="div">
      <img src={img} alt="" />
      <h2>React</h2>
      <p>A biblioteca para interfaces de usuario web e nativas</p>
      <button>Aprenda React</button>
      <button>Referencia da API</button>
    </div>
  )
}
