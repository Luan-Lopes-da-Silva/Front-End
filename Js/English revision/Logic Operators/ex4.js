export default function(){
  function canRetire(age,genre){
    if(age>=65 && genre== 'Male' || age>=60 && genre == 'Female'){
      return true
    }else{
      return false
    }
  }

  console.log(canRetire(59,'Female'))
}

