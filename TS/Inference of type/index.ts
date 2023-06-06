const spaceShip = {
  name:'X-Wing',
  speed:0
}

function acelerate(spaceShip: { name: string; speed: number },speed: number){
spaceShip.speed = speed
}

acelerate(spaceShip,50)