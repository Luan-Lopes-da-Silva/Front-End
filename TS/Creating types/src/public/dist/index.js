var literal;
var pi;
literal;
pi;
var option;
option = 'Hello';
option = 1;
var planet;
var home;
home = "Terra";
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log('We are in earth');
    }
}
function greet(callback) {
    var name = prompt("What is your name?");
    callback(name);
}
greet(function (name) {
    alert("Hello, ".concat(name, "! This is a greeting executed how callback!"));
});
