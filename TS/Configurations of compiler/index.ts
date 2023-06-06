const setPilot = async (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
  spaceship.pilot = newPilot;
}

const accelerate = async (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
  spaceship.speed = targetSpeed;
}

const sendToMission = async (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
  spaceship.inMission = true;
}

const pilot = 'Han Solo'
const spaceShip = {
  name:'',
  pilot:'',
  speed:0,
  inMission:false,
}
spaceShip.name = 'Millenium Falcon'
setPilot(pilot,spaceShip)
accelerate(50,spaceShip)
sendToMission(spaceShip)
console.log(spaceShip)