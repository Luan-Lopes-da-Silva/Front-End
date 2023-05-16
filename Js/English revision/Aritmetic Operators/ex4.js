export default function(){
const valueOfSnack =  parseFloat(prompt('What was the cost of the meal'))
const tax = parseFloat(prompt('What is the taxes of service in percentage'))
const persons = parseFloat(prompt('How many peoples will split the bill'))
const percentage = (tax/100) * valueOfSnack
alert(`For ${persons} peoples the value of bill was R$ ${(valueOfSnack-percentage)/persons} for each people
`)
}