
let options = ""
let initQuestion = prompt("How money you have?")

do{
  options = prompt("You have " + initQuestion + " of money \n\nSelect option wich you wish \n\na)Add Money \nb)Remove Money \nc)Finish Program")
  switch(options){
  case "a":
  let valueAdd = prompt('How money you wish add?')
  initQuestion = parseFloat(initQuestion) + parseFloat(valueAdd)
  break
  case "b":
  let valueRemove = prompt('How money you wish remove?')
  initQuestion = parseFloat(initQuestion) - parseFloat(valueRemove)
  break
  case "c":
  alert("Program gone finished")
  }
}
  while(options !=="c")

