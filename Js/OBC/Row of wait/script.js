let interativeMenu = ""
let arrayPatients = []
do{
 let patient = ""
 for(let index = 0; index<arrayPatients.length; index++){
  patient+= (index+1) + "° - " + arrayPatients[index]+ "\n"
 }
 interativeMenu = prompt(
  "Patients:\n" + patient + 
  "Choice a option\n\n a)New patient\n b)Consult patient\n c)Exit")

 switch(interativeMenu){
  case 'a':
  const newPatient = prompt('Add a new patient')
  arrayPatients.push(newPatient)
  break
  case 'b':
  let consultPatient = alert('The first patient in row is '+ arrayPatients[0])
  break
  case 'c':
  alert("Finishing Application")
  break
 }
}while(interativeMenu !=='c')
