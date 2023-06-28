import { useState } from 'react'
import './App.css'
import InputComp from './components/InputComp'


export default function App(){
  const [copyText,setText] = useState('Copy')
  const [passText,setPassText] = useState('')
  const [customSize,setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  
  function changeText(ev){
  ev.currentTarget.previousElementSibling.style.border = 'initial'
  ev.currentTarget.style.border = '1px solid #404489'
  window.navigator.clipboard.writeText(passText)
  setText('Copied')
  }

  function geraStringAleatoria(large) {
    var randomString = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < large; i++) {
        randomString += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return randomString;
}

  function generatePassword(ev){
  ev.currentTarget.nextElementSibling.style.border = 'initial'
  ev.currentTarget.style.border = '1px solid #404489'
  setText('Copy')
  setPassText(geraStringAleatoria(showInput?customSize:8))
  }

  return(
    <div className='container'>
      <div>
        <label htmlFor="customSize">Customizar tamanho</label>
        <input type="checkbox"
        id='customSize'
        value={showInput}
        onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      <h1>Gerador de senhas</h1>
      {showInput?(
        <div>
        <label htmlFor="passwordSize">Tamanho da senha</label>
        <InputComp passwordSize={customSize} setPasswordSize={setCustomSize}/>
      </div>
      ):null}
      
      <div className="buttons">
        <button onClick={generatePassword} >Gerar senha de {showInput?customSize:8} caracteres!</button>
        <button onClick={changeText}>{copyText}</button>
      </div>
     
      <span className='password'>{passText}</span>
    </div>
  )
}
