let menuInterative = ''
let acelerateReturn = ''
let desacelerateReturn = ''

do{
  menuInterative = prompt(
    'Interative Menu'+
    '\na)Acelerate Ship'+
    '\nb)Desacelerate Ship'+
    '\nc)Print datas of board'+
    '\nd)Exit'
    
    )
    switch(menuInterative){
      case 'a':
      acelerate()
      break
      case 'b':
      desacelerate()
      break
      case 'c':
      printDatas()
      break
      case 'd':
      alert('Exiting of app....')
      break
      default:
      alert('Invalid option')
      break
      }
      }while(menuInterative!=='d')



  function acelerate(){
  let velocity = parseFloat(prompt('The which speed you wishes to leave?'))
  let acelerate = parseFloat(prompt('The which speed you wishes speed up?'))
  const messageAcelerate = alert(
    '\nYour initial velocity it was ' + velocity + 
    '\nYou wanted speed up for ' + acelerate + 
    '\nand your final speed was '  + (velocity+acelerate)
    )
  return acelerateReturn = 'Your initial velocity it was ' + velocity + 
  '\nYou wanted speed up for ' + acelerate + 
  '\nand your final speed was ' + (velocity+acelerate)
  }

  
  function desacelerate(){
    let velocity = parseFloat(prompt('The which speed you wishes to leave?'))
    let desacelerate = parseFloat(prompt('The which speed you wishes slow down?'))
     alert(
      '\nYour initial velocity it was ' + velocity + 
      '\nYou wanted slow down for ' + desacelerate + 
      '\nand your final speed was '  + (velocity-desacelerate)
    )

    return desacelerateReturn = 'Your initial velocity it was ' + velocity + 
    '\nYou wanted slow down for ' + desacelerate + 
    '\nand your final speed was ' + (velocity-desacelerate)
  }

  function printDatas(){
  alert(
    'In first process we collect the following datas\n' + acelerateReturn 
  )
  alert(
    'For last in second process we collect the following datas\n' + desacelerateReturn
  )
  }



