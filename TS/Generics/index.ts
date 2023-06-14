function first(array){
return array[0]
}

function last<Type>(array: Type[]) :Type|undefined{
  return array[array.length-1]
}

const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']

//Any type
const firstPilot = first(pilots)

//Generic type 
const lastPilot = last(pilots)

interface Ship{
  name:string
  pilot:string
}

interface Fighter extends Ship{
  weapons:number
  shields:number
}

interface Trasport extends Ship{
  capacity:number
}

interface Speeder extends Ship{
  speed:number
  acceleration:number
}

function cloneShip(ship:Ship , newName:string, newPilot:string){
  const newShip = ship
  newShip.name = newName
  newShip.pilot = newPilot
  return newShip
}

const falcon: Ship = {
name:'Millenium Falcon',
pilot:'Han'
}

const xWing:Fighter = {
name:'Red Five',
pilot:'Luke',
weapons:4,
shields:1
}

// The copy works, but the tipyng are incorrect
// then the boths is assigned the type ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe')

function cloneShip2<ShipType extends Ship>(ship:ShipType , newName:string, newPilot:string){
  const newShip = ship
  newShip.name = newName
  newShip.pilot = newPilot
  return newShip
}

const falcon2: Ship = {
name:'Millenium Falcon',
pilot:'Han'
}

const xWing2:Fighter = {
name:'Red Five',
pilot:'Luke',
weapons:4,
shields:1
}

// Now the copy works and the types inferidos are corrects
// copy3 are of type Ship and copy4 of type Fighter
const copy3 = cloneShip2(falcon2, 'Milano', 'Peter')
const copy4 = cloneShip2(xWing2, 'Black One', 'Poe')


interface EnemyShip{
  name:string
  pilot:string
  flag?:string
}

//The typing are wrong
const enemyCopy = cloneShip(falcon,'Enemy','Enemy')
//The typing are right
const enemyCopy2 = cloneShip2<EnemyShip>(falcon,'Enemy','Enemy')

//Here we have an error because of the type Ship
enemyCopy.flag = 'Imperial'
//Already here we have the optional propertie flag
enemyCopy2.flag = 'Imperial'

class Pilot <ShipType> {
  name: string
  ship: ShipType

  constructor(name: string, ship: ShipType) {
    this.name = name
    this.ship = ship
  }
}

const han = new Pilot('Han Solo', falcon)
const luke = new Pilot<Fighter>('Luke Skywalker', xWing)