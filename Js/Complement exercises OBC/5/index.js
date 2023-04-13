const name = prompt('Which is plane name?')
let yesOrNo= prompt('Wishes to enter into space warp?')
let fold = 0

while(yesOrNo=='Yes' || yesOrNo=='yes'){
fold++
alert('Count of fold: ' +fold)
yesOrNo= prompt('Wishes to enter into space warp?')
}
alert(
  'In the plane '+ name+
  '\nThe space warp occured ' + fold  + ' times')