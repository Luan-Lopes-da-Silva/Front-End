import { Character } from "./Chraracter.js";

export class Mage extends Character{
    constructor(name,life,atk,def,magic){
      super(name,life,atk,def)
      this.magic = magic
    }
    attack(target){
        if(this.atk>target.def){
        const dif = (this.atk+this.magic)-target.def
        target.life-=dif
        console.log(`You took out ${dif} points of life of your enemy`)
        }  
    }
    gaveLife(target){
    target.life += this.magic*2
    console.log(`You gave ${this.magic*2} points of life for you ally.`)
    }
}
