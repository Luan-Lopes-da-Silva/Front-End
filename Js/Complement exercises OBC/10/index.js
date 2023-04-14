

function velocityDecrease(velocity,printer){
let decrease = 20
while(velocity>0){
printer(velocity)
velocity-=decrease  
}
alert('The spaceship this stop and floodgates they are open')  
}

let spaceShipVelocity = 150

//               first parameter ,    second parameter        
velocityDecrease(spaceShipVelocity,function(velocity){
  alert('Your current velocity is ' + velocity)
})