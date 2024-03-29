const main = document.querySelector('main')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const playName1 = document.querySelector('.play1')
const playName2 = document.querySelector('.play2')
const btnStart = document.getElementById('btnStart')
const message = document.querySelector('.message')
const areas = document.querySelectorAll('.area')
const winnerMessage = document.querySelector('.winner')
let count = 0
let score1 = 0
let score2 = 0
let scorePlayer1 = document.querySelector('.score1')
let scorePlayer2 = document.querySelector('.score2')

function littleChanges(){
main.style.display = 'block'
playName1.innerText = player1.value 
playName2.innerText = player2.value
player1.style.display='none'
player2.style.display='none'
document.querySelector('label[for="player1"]').style.display = 'none'
document.querySelector('label[for="player2"]').style.display = 'none'
btnStart.style.display = 'none'
message.style.display = 'grid'
message.innerText = 'Who start the game is the player ' + player1.value
setTimeout(() => {
message.style.display = 'none'
},1200)
scorePlayer1.innerText = score1  
scorePlayer2.innerText = score2  
}



function checkArea(){
  if(areas[0].innerText=='X' && areas[3].innerText=='X' && areas[6].innerText=='X' || areas[1].innerText=='X' && areas[4].innerText=='X' && areas[7].innerText=='X' || areas[2].innerText=='X' && areas[5].innerText=='X' && areas[8].innerText=='X'){
    winnerMessage.style.display = 'grid'
    winnerMessage.innerText = player1.value + ' is the winner'
    if( winnerMessage.innerText == player1.value + ' is the winner'){
    score1++
    scorePlayer1.innerText=score1
    }
    const newBtn = document.createElement("button")
    newBtn.innerText = 'Reset Game'
    newBtn.classList.add('reset')
    newBtn.addEventListener('click',function(){
      areas.forEach(function(area){
        area.innerText = ''
      })
    winnerMessage.style.display = 'none'
    winnerMessage.innerText = ''
    count = 1
    })
    winnerMessage.appendChild(newBtn) 
  }

  else if(areas[0].innerText=='X' && areas[1].innerText=='X' && areas[2].innerText=='X' || areas[3].innerText=='X' && areas[4].innerText=='X' && areas[5].innerText=='X' || areas[6].innerText=='X' && areas[7].innerText=='X' && areas[8].innerText=='X'){
    winnerMessage.style.display = 'grid'
    winnerMessage.innerText = player1.value + ' is the winner'
    if( winnerMessage.innerText == player1.value + ' is the winner'){
      score1++
      scorePlayer1.innerText=score1
    }
    const newBtn = document.createElement("button")
    newBtn.innerText = 'Reset Game'
    newBtn.classList.add('reset')
    newBtn.addEventListener('click',function(){
      areas.forEach(function(area){
        area.innerText = ''
        count = 1
      })
    winnerMessage.style.display = 'none'
    winnerMessage.innerText = ''
    })
    winnerMessage.appendChild(newBtn)
  }
    else if(areas[0].innerText=='X' && areas[4].innerText=='X' && areas[8].innerText=='X' || areas[2].innerText=='X' && areas[4].innerText=='X' && areas[6].innerText=='X'){
    winnerMessage.style.display = 'grid'
    winnerMessage.innerText = player1.value + ' is the winner'
    if( winnerMessage.innerText == player1.value + ' is the winner'){
      score1++
      scorePlayer1.innerText=score1
    }
    const newBtn = document.createElement("button")
    newBtn.innerText = 'Reset Game'
    newBtn.classList.add('reset')
    newBtn.addEventListener('click',function(){
      areas.forEach(function(area){
        area.innerText = ''
        count = 1
      })
    winnerMessage.style.display = 'none'
    winnerMessage.innerText = ''
    })
    winnerMessage.appendChild(newBtn)
  }


  if(areas[0].innerText=='O' && areas[3].innerText=='O' && areas[6].innerText=='O' || areas[1].innerText=='O' && areas[4].innerText=='O' && areas[7].innerText=='O' || areas[2].innerText=='O' && areas[5].innerText=='O' && areas[8].innerText=='O'){
    winnerMessage.style.display = 'grid'
    winnerMessage.innerText = player2.value + ' is the winner'
    if( winnerMessage.innerText == player2.value + ' is the winner'){
      score2++
      scorePlayer2.innerText=score2
    }
    const newBtn = document.createElement("button")
    newBtn.innerText = 'Reset Game'
    newBtn.classList.add('reset')
    newBtn.addEventListener('click',function(){
      areas.forEach(function(area){
        area.innerText = ''
        count = 0
      })
    winnerMessage.style.display = 'none'
    winnerMessage.innerText = ''
    })
    winnerMessage.appendChild(newBtn)
  }
  else if(areas[0].innerText=='O' && areas[1].innerText=='O' && areas[2].innerText=='O' || areas[3].innerText=='O' && areas[4].innerText=='O' && areas[5].innerText=='O' || areas[6].innerText=='O' && areas[7].innerText=='O' && areas[8].innerText=='O'){
    winnerMessage.style.display = 'grid'
    winnerMessage.innerText = player2.value + ' is the winner'
    if( winnerMessage.innerText == player2.value + ' is the winner'){
      score2++
      scorePlayer2.innerText=score2
    }
    const newBtn = document.createElement("button")
    newBtn.innerText = 'Reset Game'
    newBtn.classList.add('reset')
    newBtn.addEventListener('click',function(){
      areas.forEach(function(area){
        area.innerText = ''
        count = 0
      })
    winnerMessage.style.display = 'none'
    winnerMessage.innerText = ''
    })
    winnerMessage.appendChild(newBtn)
  }
  else if(areas[0].innerText=='O' && areas[4].innerText=='O' && areas[8].innerText=='O' || areas[2].innerText=='O' && areas[4].innerText=='O' && areas[6].innerText=='O'){
    winnerMessage.style.display = 'grid'
    winnerMessage.innerText = player2.value + ' is the winner'
    if(winnerMessage.innerText== player2.value + ' is the winner'){
      score2++
      scorePlayer2.innerText=score2
    }
    const newBtn = document.createElement("button")
    newBtn.innerText = 'Reset Game'
    newBtn.classList.add('reset')
    newBtn.addEventListener('click',function(){
      areas.forEach(function(area){
        area.innerText = ''
        count=0
      })
    winnerMessage.style.display = 'none'
    winnerMessage.innerText = ''
    })
    winnerMessage.appendChild(newBtn)
}

else if(areas[0].innerText!='' && areas[1].innerText!='' && areas[2].innerText!='' && areas[3].innerText!='' && areas[4].innerText!='' && areas[5].innerText!='' && areas[6].innerText!='' && areas[7].innerText!='' && areas[8].innerText!='' && winnerMessage.innerText===''){
  winnerMessage.style.display = 'grid'
    winnerMessage.innerText = 'The match finished draw'
    const newBtn = document.createElement("button")
    newBtn.innerText = 'Reset Game'
    newBtn.classList.add('reset')
    newBtn.addEventListener('click',function(){
      areas.forEach(function(area){
        area.innerText = ''
        count=1
      })
    winnerMessage.style.display = 'none'
    winnerMessage.innerText = ''
    })
    winnerMessage.appendChild(newBtn)
}
}



function playGame(ev){
  if(ev.currentTarget.innerText === '' && count === 0 ){
    ev.currentTarget.innerText = 'x'
    count++
    message.style.display = 'grid'
    message.innerText = 'Now turn of player ' + player2.value
    setTimeout(() => {
    message.style.display = 'none'
    },1200)
  }else if(ev.currentTarget.innerText === '' && count === 1){
    message.style.display = 'grid'
    message.innerText = 'Turn of player ' + player1.value
    setTimeout(() => {
    message.style.display = 'none'
    },1200)
    ev.currentTarget.innerText = 'o'
    count = 0
  }
  checkArea()
}
btnStart.addEventListener('click',littleChanges)
document.querySelectorAll('.area').forEach(function(area){
area.addEventListener('click',playGame)
})











