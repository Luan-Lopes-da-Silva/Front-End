let interativeMenu = ''
let detailsOfVacancy = []
let indexFunction = ''
let canditates = []
let confirmation = ''
let canditate = ''
do{
interativeMenu = prompt('Jobs\n a)Available vacancies\n b)Create a new vacancy\n c)View a vacancy\n d)Apply for a vacancy\n e)Exclude a vacancy\n f)Exit')
switch(interativeMenu){
  case 'a':
  alert('You choice the option a')
  break
  case 'b':
  const detailsObject = {}
  detailsObject.name = prompt('What name for the vacancy')
  detailsObject.description = prompt('Give a description for this vacancy')
  detailsObject.limit = prompt('Which is the limit date for if application of this vacancy') 
  detailsObject.index =  parseFloat(prompt('Which is the index of this element?'))
  detailsOfVacancy.push(detailsObject)
  console.log(detailsOfVacancy)
  break
  case 'c':
    indexFunction = parseFloat(prompt('Which is the index of vacancy?'))
    function checkIndex(){
      for(index=0; index<=detailsOfVacancy.length;index++){
        if(indexFunction == index){
        alert(
          '\nThe index of vacancy is ' + detailsOfVacancy[index].index+
          '\nThe name of this vacancy is ' + detailsOfVacancy[index].name+
          '\nyour description is ' + detailsOfVacancy[index].description+
          '\nand your limit date for if candidate for this vacancy is ' + detailsOfVacancy[index].limit
          )  
        }
        }
    }
    checkIndex()
  break  
  case 'd':
  canditate = prompt('What is your name?')
  indexFunction = parseFloat(prompt('Which is the index of vacancy?'))
  function confirmApplicate(){
    for(index=0; index<=detailsOfVacancy.length;index++){
      if(indexFunction == index){
     confirmation = confirm(
        '\nIs for this vacancy wich you wish to applicate? '+ canditate+
        '\nThe name of this vacancy is ' + detailsOfVacancy[index].name+
        '\nyour description is ' + detailsOfVacancy[index].description+
        '\nand your limit date for if candidate for this vacancy is ' + detailsOfVacancy[index].limit
        )  
      }
      }
      if(confirmation){
        alert('Finishing your candidature one moment....')
        canditates.push(canditate)
      }
    }

     
  confirmApplicate()
 
  break  
  case 'e':
  alert('You choice the option e')
  break  
  case 'f':
  alert('You choiced exit of application')
  break  
  default:
  alert('Incorrect option')
  break
}
}while(interativeMenu!=='f')
alert('Exiting.....')