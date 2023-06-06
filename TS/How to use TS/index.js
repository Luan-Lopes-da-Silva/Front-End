var setPilot = function (newPilot, spaceship) {
    spaceship.pilot = newPilot;
};
var accelerate = function (targetSpeed, spaceship) {
    spaceship.speed = targetSpeed;
};
var sendToMission = function (spaceship) {
    spaceship.inMission = true;
};
var pilot = 'Han Solo';
var spaceShip = {
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
