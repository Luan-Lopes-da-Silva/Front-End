import { Character } from "./Chraracter.js";

export class Warrior extends Character {
  constructor(name,life,atk,def,shield,position){
    super(name,life,atk,def)
    this.shield = shield
    this.position = 'attack'
  }

  attack(target){
    if(this.position === 'attack'){
    super.attack(target)
    }  
  }
  changePosition(){
  if(this.position === 'attack'){
  this.position = 'defense'
  this.def+=this.shield
  return console.log('The warrior is in defense position')
  }else{
  this.position = 'attack'
  return console.log('Now the warrior is in attack position')
  }
  }
}