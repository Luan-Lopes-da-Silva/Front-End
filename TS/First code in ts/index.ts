function spaceShip(name:string,captain:string){
  const spaceShip ={
    name,
    captain,
    speed:20,
    inMission:true,
  }
  alert(`The ship ${spaceShip.name} commanded by the captain ${spaceShip.captain} was send in a mission`)
  
  return spaceShip
}

function acelerate(targetSpeed:number, spaceShip:{name:string; speed:number}){
if(spaceShip.speed > targetSpeed){
  alert(`Reducing the velocity of ${spaceShip.name} for ${targetSpeed}...`)
}else if(spaceShip.speed<targetSpeed){
  alert(`Increasing the velocity of ${spaceShip.name} for ${targetSpeed}...`)
}else{
  alert(`Keeping the velocity of ${spaceShip.name}...`)
}
}

const shipName = prompt('Insert the name of spaceship')
const shipCaptain = prompt('Insert the name of captain')
const ship = spaceShip(shipName,shipCaptain)
const speed = Number(prompt('Insert the velocity which you wish increase'))
acelerate(speed,ship)
