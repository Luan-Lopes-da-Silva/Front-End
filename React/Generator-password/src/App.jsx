import { useState } from 'react'
import './App.css'

export default function App(){
  const [copyText,setText] = useState('Copy')
  const [passText,setPassText] = useState('')
  
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
  setPassText(geraStringAleatoria(12))
  }

  return(
    <div className='container'>
      <h1>Gerador de senhas</h1>
      <div className="buttons">
        <button onClick={generatePassword} >Gerar!</button>
        <button onClick={changeText}>{copyText}</button>
      </div>
      <span className='password'>{passText}</span>
    </div>
  )
}
