const name = prompt('What is the name of ship?')
const type = prompt('What is the type of ship?')
let velocity = 0
let menuInteractive = ''
const maxVelocity = prompt('What is the maximum speed of ship?')


const objectShip = {
  name,
  type,
  maxVelocity
}

do{
   menuInteractive = prompt(
    'Menu of ship'+
    '\na)Acelerate' + 
    '\nb)Desacelerate' +
    '\nc)Exit' 
  )


  switch(menuInteractive){
    
  case 'a':
  let incrementVelocity = parseFloat(prompt('How mush do you want to acelerate'))
  velocity+=incrementVelocity
  if(velocity>maxVelocity){
    alert(
      'The ship it is in one velocity of ' + velocity + 
      '\nand your maximum speed is ' + maxVelocity
    )
  }
  break
  case 'b':
    objectShip.velocity = velocity
  alert(
    'The datas of ship are the following\n'+
    '\nName of ship: ' + objectShip.name + 
    '\nType of ship: ' + objectShip.type +
    '\nMaximum speed: ' + objectShip.maxVelocity + ' km/s' +
    '\nCurrent velocity: ' + objectShip.velocity + ' km/s'
  ) 
  break
  case 'c':
  alert('Exiting of app.... Bye')
  break
  }

}while(menuInteractive!=='c')



console.log(objectShip)



