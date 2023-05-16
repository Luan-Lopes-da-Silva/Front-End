export default function(){
  const age = parseFloat(prompt('Type your age'))
  if(age<=3){
    alert('The ticket for the movie theater is free')
  }else if(age>=4 && age<=12){
    alert('The ticket for the movie theater is $10')
  }else if(age>=13 && age<=64){
    alert('The ticket for the movie theater is $20,00')
  }else{
    alert('The ticket for the movie theater is $15,00')
  }
}