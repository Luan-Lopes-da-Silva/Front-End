const distanceInLightYears = parseFloat(prompt('What is the distance in light years which you want convert?'))
const options = 
prompt(
'Converter of speed'+
'\na)Parsec(pc)'+
'\nb)Astronomic unit(AU)'+
'\nc)Kilometers(km)'
)
let valueConverted = ''


switch(options){
case 'a':
valueConverted = distanceInLightYears*0.30660
alert(
 'Distance in light years: ' + distanceInLightYears +
 '\nConversion wished: Parsec(pc)' + 
 '\nDistance converted: ' + valueConverted  
)
break
case 'b':
valueConverted = distanceInLightYears*63241,1
alert(
  'Distance in light years: ' + distanceInLightYears +
  '\nConversion wished: Astronomic unit(AU) '  + 
  '\nDistance converted: ' + valueConverted  
 )
 break
case 'c':
valueConverted = distanceInLightYears*9,5*Math.pow(10,12)
alert(
  'Distance in light years: ' + distanceInLightYears +
  '\nConversion wished: Kilometers(km) ' + 
  '\nDistance converted: ' + valueConverted  
 )
 break
default:
alert(
  'Distance in light years: ' + distanceInLightYears +
  'Unit not identified: conversion out of scope'
  )
  break
}