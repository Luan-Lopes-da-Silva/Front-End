const character1 = prompt('Insert the name of character 1')
const powerAttack = prompt('Which your power of attack?')
const character2 = prompt('Insert the name of character 2')
const lifePointsch2 = prompt('How much life points he have?')
const powerDefense = prompt('Which your power of defense?')
const shield = prompt('He has a shield? Answer Yes or No')


if(powerAttack>powerDefense && shield=== 'No'){
  console.log('The damage suffered was of ' + parseFloat(powerAttack-powerDefense))
}else if(powerAttack>powerDefense && shield=== 'Yes'){
  console.log('The damage suffered was of ' + parseFloat(powerAttack-powerDefense)/2)
}else if(powerAttack<=powerDefense){
  console.log('The damage suffered was of 0')
}

console.log(powerAttack, powerDefense, shield)
