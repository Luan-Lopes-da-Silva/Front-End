import { Character } from "./Chraracter.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";


const artur = new Mage('Arthur',90,4,2,14)
const beatrice = new Thief('Beatrice',140,22,8)
const cain = new Warrior('Cain',200,14,12,4)
cain.changePosition()
artur.attack(cain)
beatrice.attack(artur)
console.log({artur,cain})
cain.attack(artur)
console.log({artur})
cain.changePosition()
cain.attack(artur)
console.log({artur})
artur.gaveLife(cain)
console.log(cain)

