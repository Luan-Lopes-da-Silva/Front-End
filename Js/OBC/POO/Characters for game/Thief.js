import { Character } from "./Chraracter.js";

export class Thief extends Character{
  attack(target){
    if(this.atk>target.def){
    var dif = (this.atk-target.def)*2
    target.life-=dif
    console.log(`You took out ${dif} points of life of your enemy`)
    }
  }
}