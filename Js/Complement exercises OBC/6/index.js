let spaceShipName = prompt('Which is the spaceship name?')
let character= prompt(
  'Which character you want to replace?' + 
  '\nObs:Number of index please'
  )
let answer= prompt(
  'For which character you want do replace?'
)
let newSpaceShip= ''

for(let index = 0 ; index<spaceShipName.length; index++){
  if(spaceShipName[index] == character){
    newSpaceShip+=answer
  }else{
    newSpaceShip+=spaceShipName[index]
  }
}
alert('The new name of spaceship is ' + newSpaceShip)