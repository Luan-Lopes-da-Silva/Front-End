export default function(){
const num = parseFloat(prompt('Insert an number'))
if(num%2==0 && num>0){
alert(`The number ${num} is pair and positive`)
}else{
alert(`The number ${num} doesn´t is pair or positive`)
}
}