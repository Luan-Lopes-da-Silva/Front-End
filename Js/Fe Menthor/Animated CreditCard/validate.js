const botao = document.getElementById("btn")
const validaNameCard = document.getElementById("cardName")
let validaName = false
const validaNumberCard = document.getElementById("cardNumber")
let validaNumber = false
const validaCardMM = document.getElementById("inputMM")
let validaMM = false
const validaCardYY = document.getElementById("inputYY")
let validaYY = false
const validaCardCvc = document.getElementById("cardCvc")
let validaCvc = false
const msgSucessArray = document.querySelectorAll(".sucess")
const msgErroArray = document.querySelectorAll(".error")
const labelArray = document.querySelectorAll(".form label")
const pBotao = document.querySelector("#btn p")
const complete = document.querySelector(".completed")





validaNameCard.addEventListener('keyup' , function(){

  if(validaNameCard.value.length<=5){
    msgSucessArray[0].style.display="none"
    msgErroArray[0].style.display="block"
    msgErroArray[0].innerHTML = "<p>Preencha Corretamente<p/>"
    validaName = false
    }
    else if(validaNameCard.value.length>=6){
    msgErroArray[0].style.display="none"
    msgSucessArray[0].style.display="block"
    msgSucessArray[0].innerHTML = "<p>Campo corretamente Preenchido<p/>"
    validaName = true
  }
})



validaNumberCard.addEventListener('keyup', function(){
  if(validaNumberCard.value.length<=18){
    msgSucessArray[1].style.display="none"
    msgErroArray[1].style.display="block"
    msgErroArray[1].innerHTML = "<p>Preencha Corretamente<p/>"
    validaNumber = false
    }
    else{
    msgErroArray[1].style.display="none"
    msgSucessArray[1].style.display="block"
    msgSucessArray[1].innerHTML = "<p>Campo corretamente Preenchido<p/>"
    validaNumber = true
  }

  
})

function validaMMeYY(){
  if(validaCardMM.value.length<=1 || validaCardYY.value.length<=1){
    msgSucessArray[2].style.display="none"
    msgErroArray[2].style.display="block"
    msgErroArray[2].innerHTML = "<p>Preencha Corretamente<p/>"
    validaMM = false
    validaYY = false
  }else{
    msgErroArray[2].style.display="none"
    msgSucessArray[2].style.display="block"
    msgSucessArray[2].innerHTML = "<p>Campo corretamente Preenchido<p/>"
    validaMM = true
    validaYY = true
  }
}

validaCardMM.addEventListener('keyup', validaMMeYY)
validaCardYY.addEventListener('keyup', validaMMeYY)

validaCardCvc.addEventListener('keyup', function(){
if(validaCardCvc.value.length<=2){
  msgSucessArray[3].style.display="none"
  msgErroArray[3].style.display="block"
  msgErroArray[3].innerHTML = "<p>Preencha Corretamente<p/>"
  validaCvc = false
}
else{
  msgErroArray[3].style.display="none"
  msgSucessArray[3].style.display="block"
  msgSucessArray[3].innerHTML = "<p>Campo corretamente Preenchido<p/>"
  validaCvc = true
}
})

botao.addEventListener("click", validaCampos)
function validaCampos(){
  if(validaName&&validaNumber&&validaMM&&validaYY&&validaCvc){
    validaNameCard.style.display = "none"
    validaNumberCard.style.display = "none"
    validaCardCvc.style.display = "none"
    validaCardMM.style.display = "none"
    validaCardYY.style.display = "none"
    msgErroArray[0].style.display = "none"
    msgErroArray[1].style.display = "none"
    msgErroArray[2].style.display = "none"
    msgErroArray[3].style.display = "none"
    msgSucessArray[0].style.display="none"
    msgSucessArray[1].style.display="none"
    msgSucessArray[2].style.display="none"
    msgSucessArray[3].style.display="none"
    labelArray[0].style.display="none"
    labelArray[1].style.display="none"
    labelArray[2].style.display="none"
    labelArray[3].style.display="none"
     complete.style.display = "block"
     pBotao.innerText = "Continue"
  }else{
    alert("Preencha todos os campos!!!")
  }
}

