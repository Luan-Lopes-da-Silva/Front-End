const firstVehicleName = prompt('Insert first vehicle name')
const secondVehicleName = prompt('Insert second vehicle name')
const firstVehicleVelocity = prompt('Insert first vehicle velocity')
const secondVehicleVelocity = prompt('Insert second vehicle velocity')

if(firstVehicleVelocity>secondVehicleVelocity){
  alert('The first vehicle is more fast that the second')
}else if(firstVehicleVelocity<secondVehicleVelocity){
  alert('The second vehicle is more fast that the one')
}else if(firstVehicleVelocity===secondVehicleVelocity){
  alert('The velocity of both is equal')
}