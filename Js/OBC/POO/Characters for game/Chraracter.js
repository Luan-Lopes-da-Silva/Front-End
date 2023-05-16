export class Character{
  constructor(name,life,atk,def){
    this.name = name
    this.life = life
    this.atk = atk
    this.def = def
  }
  attack(target){
  if(this.atk>target.def){
  var dif = this.atk-target.def
  target.life-=dif
  console.log(`You took out ${dif} points of life of your enemy`)
  }
  }
  isLife(target){
    if(target.life<=0){
      console.log(`Your enemy is dead`)
    }
  }
  

}