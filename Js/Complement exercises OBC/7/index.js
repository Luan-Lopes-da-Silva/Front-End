const spaceShipName = prompt('Which is the name of spaceship?')
let newSpaceShipName = ''
for(let index=spaceShipName.length-1; index>=0;index--){
newSpaceShipName+=spaceShipName[index]
}

alert('The new spaceship name is ' + newSpaceShipName +
      '\nAnd the old spaceship name is ' + spaceShipName
)