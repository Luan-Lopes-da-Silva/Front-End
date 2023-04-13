function acelerateShip(){
const shipName = prompt('Which is the name of ship?')
let velocityOfShip = parseFloat(prompt('The which velocity you want start?'))
if(velocityOfShip>10){
alert('You current velocity is ' + velocityOfShip + 'km/s')
velocityOfShip-=5
alert('Now your velocity is ' + velocityOfShip + 'km/s')
alert('Your ship name is ' + shipName + '\nand your final velocity is ' + velocityOfShip) 
}else{
velocityOfShip-=5
 alert('Your ship name is ' + shipName + '\nand your final velocity is ' + velocityOfShip) 
}
}

acelerateShip()