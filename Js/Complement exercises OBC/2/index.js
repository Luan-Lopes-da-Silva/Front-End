const moreOldName = prompt('What is your name?')
const moreOldAge = prompt('What is your age?\nObs:Just numbers')
const moreYoungName = prompt('What is your name?')
const moreYoungAge = prompt('What is your age?\nObs:Just numbers')
function calcOfDifference(a,b){
  return a-b
}
alert(calcOfDifference(moreOldAge,moreYoungAge) + ' years of difference')