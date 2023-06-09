let literal : 'Hello world'
let pi : 3.14159

literal
pi

let option:string|number

option = 'Hello'
option = 1

let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"


type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let home : Planet
home = "Terra"

function checkPlanet(planet:Planet){
if(planet === "Terra"){
  console.log('We are in earth')
}
}

type greetingCallBack = (name:string)=> void

function greet(callback: greetingCallBack){
  const name = prompt("What is your name?")
  callback(name)
}

greet((name)=>{
  alert(`Hello, ${name}! This is a greeting executed how callback!`)
})                          