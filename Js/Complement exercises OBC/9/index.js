let menuInterative = ''


  function showMenu(){
  menuInterative = prompt(
  'Interative Menu'+
  '\na)Acelerate Ship'+
  '\nb)Desacelerate Ship'+
  '\nc)Print datas of board'+
  '\nd)Exit'
  )
  }


  showMenu();
  switch(menuInterative){
  case 'a':
  acelerate()
  case 'b':
  desacelerate()
  case 'c':
  printDatas()
  case 'd':
  alert('Exiting of app....')
  break
  default:
  alert('Invalid option')
  break
  }

  function acelerate(){
  let velocity = parseFloat(prompt('The which speed you wishes to leave?'))
  let acelerate = parseFloat(prompt('The which speed you wishes speed up?'))
  alert(
    '\nYour initial velocity it was ' + velocity + 
    '\nYou wanted speed up for ' + acelerate + 
    '\nand your final speed was '  + (velocity+acelerate)
    )
  
  }

  function desacelerate(){
    let velocity = parseFloat(prompt('The which speed you wishes to leave?'))
    let desacelerate = parseFloat(prompt('The which speed you wishes slow down?'))
     alert(
      '\nYour initial velocity it was ' + velocity + 
      '\nYou wanted slow down for ' + desacelerate + 
      '\nand your final speed was '  + (velocity-desacelerate)
    )
    const finalVelocityDesacelerate = velocity-desacelerate
    showMenu()
    return finalVelocityDesacelerate
  }

  function printDatas(){
  console.log(desacelerate())
  }



