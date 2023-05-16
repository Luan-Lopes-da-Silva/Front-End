export default function(){
const year = parseFloat(prompt('Insert an year'))
function leapYear(){
if(year%400==Number.isInteger()){
alert(`Year ${year} is an leap year`)
}else{
alert(`Year ${year} doesn´t is an leap year`)
}
}
leapYear()
}
