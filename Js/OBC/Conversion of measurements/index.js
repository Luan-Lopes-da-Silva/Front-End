const valueInMeter = prompt('Insert one measurements in meters')
const answer = prompt('Convert for measurements wich you prefer\n a)Milimeter(mm)\n b)centimeter(cm)\n c)decimeter(dm)\n d)decameter(dam)\n e)hectometer(hm)\n f)kilometer(km)')

switch(answer){
  case 'a':
    alert('The measurements converted in Milimeter result in ' + valueInMeter*1000 + ' Milimeters')
    break
  case 'b':
    alert('The measurements converted in Centimeter result in ' + valueInMeter*100 + ' Centimeters')
    break
  case 'c':
    alert('The measurements converted in Decimeter result in ' + valueInMeter*10 + ' Decimeters')
    break
  case 'd':
    alert('The measurements converted in Decameter result in ' + valueInMeter/10 + ' Decameters')
    break
  case 'e':
    alert('The measurements converted in Hectometer result in ' + valueInMeter/100 + ' Hectometers')
    break
  case 'f':
    alert('The measurements converted in Kilometer result in ' + valueInMeter/1000 + ' Kilometers')
    break
  default:
    alert('Invalid option')
  }