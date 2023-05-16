export default function(){
const age = parseFloat(prompt('What is your age?'))
function canWatchMovie(){
if(age>=18 && age!=17){
  return true
}
else{
  return false
}
}

canWatchMovie();
console.log(canWatchMovie())
}