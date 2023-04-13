const pilotName = prompt('What´s your name pilot?')
let velocity = 0
console.log(velocity)
velocity += parseFloat(prompt('The which velocity would you like to accelerate the plane?'))
console.log(velocity)
const confirmation = confirm('Is it at that speed? ' + velocity + 
' Km/s')


function checkVelocity(){
  if(velocity<=0){
  alert('Plane is stopped,increase the velocity')
  }else if(velocity<40){
  alert('You are slow,you can increase more')
  }else if(velocity>=40 && velocity<80){
  alert('Looks a good velocity for maintain')
  }else if(velocity>=80 && velocity<100){
  alert('Velocity high, decrease please')
  }else{
  alert('Dangerous velocity, automatic control forced')
  }
  alert(
    'Pilot: ' + pilotName+
    '\nThe your velocity current is: ' + velocity + ' Km/s'
    )
}
checkVelocity()