class Vehicle{
  move(){
    console.log('The vehicle is moving')
  }
}

class Car extends Vehicle{
  move(){
    console.log('The car is moving')
  }
}

class Ship extends Vehicle{
  move(){
    console.log('The ship is sailing')
  }
}

class Plane extends Vehicle{
  move(speed){
    console.log(`The plane is flying to a velocity of ${speed} km/h `)
  }
}

const uno = new Car()
const preciosa = new Ship()
const plane = new Plane()

//uno.move()
//preciosa.move()
//plane.move(30)


function start(vehicle){
console.log(`Starting an vehicle`)
vehicle.move()
}

start(uno)
start(preciosa)
start(plane)