const hitchedSpaceShips = [
  ["Fenix", 8 , true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

const moreCrew = hitchedSpaceShips.filter(function(ship){
  return ship = ship[1]>8
})

const firstShip = hitchedSpaceShips.findIndex(checkIndex)

function checkIndex(element,index,array){
return element[0] == "Fenix"
}

const lowerCase = hitchedSpaceShips.map(function(ship){
  return ship[0].toUpperCase()
})



alert('The ships which have more eight crews are\n' + moreCrew)
alert('The platform which the first ship is located is the platform n° ' + firstShip+1)
alert(lowerCase)