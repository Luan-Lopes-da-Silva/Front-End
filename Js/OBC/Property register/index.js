let interativeMenu = ''
let properties =[]
let nameOfOwner=''
let quantityOfRooms=''
let quantityOfBathroom=''
let garage=''

do{
  interativeMenu = prompt('Total of Properties '+properties.length+ '\n'+'Property register \na)Save property \nb)Show properties \nc)Exit')

switch(interativeMenu){
  case'a':
  const property = {}
  property.owner = prompt('Name of owner')
  property.rooms = prompt('Quantity of rooms')
  property.bathroom =prompt('Quantity of bathrooms')
  property.garage = prompt('Have a garage')
  if(garage==='yes'||garage==='Yes'){
  garage = 'Yes have a garage'
  }else{
  garage = 'Don´t have a garage'
  }
  const confirmation = confirm('Are you sure?\n' + 'Owner: '+property.owner + '\n' + 'Rooms: '+property.rooms + '\n' +'Bathrooms: '+property.bathroom+ '\n' + 'Garage: '+property.garage)
  if(confirmation){
  properties.push(property)
  }
  break 
  case'b':
  for(index=0; index<properties.length;index++){
  alert(
  'Property ' + (index+1) + 
  '\nOwner: ' + properties[index].owner+
  '\nRooms: ' + properties[index].rooms+
  '\nBathrooms: ' + properties[index].bathroom+
  '\nGarage: '+ properties[index].garage
  )
  }
  break
  case 'c':
    alert('Finishing')
    breakc
    default:
      alert('Incorrect option')
}

}while(interativeMenu!=='c')

