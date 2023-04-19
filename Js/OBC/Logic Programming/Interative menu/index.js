
let interativeMenu = ""
let optionWish = ""

do{
  interativeMenu = prompt("Which option do you prefer? \na) \nb) \nc) \nd) \ne)Finish")
  switch(interativeMenu){
    case "a":
    optionWish = alert('You select the option a')
    interativeMenu = prompt("Which option do you prefer? \na) \nb) \nc) \nd) \ne)Finish")
    break
    case "b":
    optionWish = alert('You select the option b')
    interativeMenu = prompt("Which option do you prefer? \na) \nb) \nc) \nd) \ne)Finish")
    break
    case "c":
    optionWish = alert('You select the option c')
    interativeMenu = prompt("Which option do you prefer? \na) \nb) \nc) \nd) \ne)Finish")
    break
    case "d":
    optionWish = alert('You select the option d')
    interativeMenu = prompt("Which option do you prefer? \na) \nb) \nc) \nd) \ne)Finish")
    break
    case "e":
    alert("The program gone closed")
  }
}while(interativeMenu!=="e")

alert("Finishing....")