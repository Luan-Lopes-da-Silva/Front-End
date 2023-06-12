interface CelestialBody{
  name:string
  mass:number
}

interface Star extends CelestialBody{
  age:number
  planets:Planet[]
}

interface Planet extends CelestialBody{
population:number
createSatellite:(name:string)=>void
}

let sun: Star = {
  name:'Sol',
  mass:1.989 *(10**30),
  age:4.603 *(10**9),
  planets:[]
}

class MilkyWayPlanet implements Planet{
  name: string
  mass: number
  population: number
  orbitedStar: Star

  constructor(name:string,mass:number,population:number){
  this.name = name
  this.mass = mass
  this.population = population
  }
  createSatellite(name: string){
  ////  
  }
}

type Asteroid = CelestialBody &{
  size:number
}

class BigAsteroid implements Asteroid{
  name: string
  mass: number
  size: number

    constructor(name:string,mass:number,size:number){
      this.name = name
      this.mass = mass
      this.size = size
    }
}

interface Planet{
  orbitedStar: Star
}

let earth:Planet = {
  name:'Terra',
  mass:5972*Math.pow(10,24),
  population:8000000000,
  createSatellite:(name:string)=>{
    //
  },
  orbitedStar:sun
}