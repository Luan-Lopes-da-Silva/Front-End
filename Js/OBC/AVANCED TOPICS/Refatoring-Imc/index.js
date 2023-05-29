async function imcAss(weight,height){
  if(typeof weight !=='number' || typeof height!=='number'){
  return Promise.reject('Arguments must be a number')
  }else{
  return weight/(height*height)
  }
  }
 
async function execute(weight,height){
    try {
      const result = await imcAss(weight,height)
      console.log(`The result of imc was ${result}`)  
    if(result<18.5){
      console.log(`Thinness`)  
    }else if(result<25){
      console.log(`Normal`)  
    }else if(result<30){
      console.log(`Overweight`)  
    }else if(result<40){
      console.log(`Obesity`)  
    }else{
      console.log(`Severe obesity`)  
    }
    } catch (error) {
      console.log(error)
    }
  }

  execute(71, 1.74)
  execute(48, 1.60)
  execute(71, "texto")
  execute(82, 1.72)
  execute(120, 1.80)