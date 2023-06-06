function spaceShip(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("The ship ".concat(spaceShip.name, " commanded by the captain ").concat(spaceShip.captain, " was send in a mission"));
    return spaceShip;
}
function acelerate(targetSpeed, spaceShip) {
    if (spaceShip.speed > targetSpeed) {
        alert("Reducing the velocity of ".concat(spaceShip.name, " for ").concat(targetSpeed, "..."));
    }
    else if (spaceShip.speed < targetSpeed) {
        alert("Increasing the velocity of ".concat(spaceShip.name, " for ").concat(targetSpeed, "..."));
    }
    else {
        alert("Keeping the velocity of ".concat(spaceShip.name, "..."));
    }
}
var shipName = prompt('Insert the name of spaceship');
var shipCaptain = prompt('Insert the name of captain');
var ship = spaceShip(shipName, shipCaptain);
var speed = Number(prompt('Insert the velocity which you wish increase'));
acelerate(speed, ship);
