export default function(){
  const num =  parseFloat(prompt('Insert an number'))
  if(num%3==0 && num%5 ==0){
  alert(`The number ${num} is divisible for 3 and 5`)
  }else{
  alert(`The number ${num} doesn´t is divisible for 3 and 5`)
  }
}