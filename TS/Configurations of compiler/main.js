const setPilot = async (newPilot, spaceship) => {
    spaceship.pilot = newPilot;
};
const accelerate = async (targetSpeed, spaceship) => {
    spaceship.speed = targetSpeed;
};
const sendToMission = async (spaceship) => {
    spaceship.inMission = true;
};
const pilot = 'Han Solo';
const spaceShip = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false,
};
spaceShip.name = 'Millenium Falcon';
setPilot(pilot, spaceShip);
accelerate(50, spaceShip);
sendToMission(spaceShip);
console.log(spaceShip);
