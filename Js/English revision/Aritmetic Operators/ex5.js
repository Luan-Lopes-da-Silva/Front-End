export default function(){
const base = parseFloat(prompt('What is to base of rectangle?')) 
const height = parseFloat(prompt('What is to height of rectangle?')) 
alert(`
The area of the rectangle is ${base*height} cm²
The perimeter of the retangle is ${2*(base+height)} cm
`)

}