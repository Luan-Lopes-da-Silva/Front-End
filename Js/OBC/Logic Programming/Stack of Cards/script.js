let interativeMenu = ""
let arrayCards = []
do{
 let cards = ""
 for(let index = 0; index<arrayCards.length; index++){
  cards+= (index+1) + "° - " + arrayCards[index]+ "\n"
 }
 interativeMenu = prompt(
  "Cars:\n" + cards + 
  "Choice a option\n\n a)Add Card\n b)Remove Card\n c)Exit")

 switch(interativeMenu){
  case 'a':
  const addCard = prompt('Add a card')
  arrayCards.push(addCard)
  break
  case 'b':
  let removeCart = alert('The first card in top is '+ arrayCards[0])
  break
  case 'c':
  alert("Finishing Application")
  break
 }
}while(interativeMenu !=='c')