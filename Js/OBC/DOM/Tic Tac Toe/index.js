const main = document.querySelector('main')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const playName1 = document.querySelector('.play1')
const playName2 = document.querySelector('.play2')
const btnStart = document.getElementById('btnStart')
const message = document.querySelector('.message')


function littleChanges(){
main.style.display = 'block'
playName1.innerText = player1.value 
playName2.innerText = player2.value
player1.style.display='none'
player2.style.display='none'
document.querySelector('label[for="player1"]').style.display = 'none'
document.querySelector('label[for="player2"]').style.display = 'none'
btnStart.style.display = 'none'
message.style.display = 'block'
message.innerText = 'Who start the game is the player ' + player1.value
setTimeout(() => {
message.style.display = 'none'
},1200)
}

btnStart.addEventListener('click',littleChanges)
let count = 0
document.querySelectorAll('.area').forEach(function(area){
area.addEventListener('click',function(ev){
if(ev.currentTarget.innerText === '' && count === 0 ){
  ev.currentTarget.innerText = 'x'
  count++
  message.style.display = 'block'
  message.innerText = 'Now turn of player ' + player2.value
  setTimeout(() => {
  message.style.display = 'none'
  },1200)
}else if(ev.currentTarget.innerText === '' && count === 1){
  message.style.display = 'block'
  message.innerText = 'Turn of player ' + player1.value
  setTimeout(() => {
  message.style.display = 'none'
  },1200)
  ev.currentTarget.innerText = 'o'
  count = 0
}
})
})