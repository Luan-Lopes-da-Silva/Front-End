export default function(){
  const age = parseFloat(prompt('What is your age?'))

  if(age>=18){
    alert('You can to vote')
  }else{
    alert('You doesn´t can to vote')
  }
}