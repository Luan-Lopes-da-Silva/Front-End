import { SpaceShip } from "./export";
import lodash from "lodash";

interface BattleShip extends SpaceShip{
  weapons:number
}

let xwing:BattleShip={
  name: 'X-wing',
  pilot:'Luke Skywalker',
  speed:50,
  weapons:4
}

console.log(lodash.camelCase(xwing.name))
console.log(lodash.kebabCase(xwing.pilot))