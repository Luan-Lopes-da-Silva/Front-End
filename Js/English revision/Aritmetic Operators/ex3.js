export default function(){
const temperature = parseFloat(prompt('Type to temperature in celsius graus'))
alert(`
To temperature in celsius graus is ${temperature}°
To temperature converted for Fahrenheit is ${temperature * (9/5) + 32}°F
`)
}
