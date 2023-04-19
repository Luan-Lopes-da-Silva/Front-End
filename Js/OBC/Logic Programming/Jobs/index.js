const vacancies = []

function listVacancies(){
  const textVacancies = vacancies.reduce(function(finalText,vacancy,index){
    finalText+=index+ '. '
    finalText+=vacancy.name
    finalText+= ' (' + vacancies[index].candidates.length + ' candidates)\n'
    return finalText
  }, '')
  alert(textVacancies)
}
function newVacancy(){
  const name = prompt('What is the name of vacancy? ')
  const descript = prompt('What is the description of this vacancy? ')
  const limitDate = prompt('What is the limit date for if apply for this vacancy? ')
  const confirmation = confirm(
    'This is the informations of vacancy wich you wish create he is sure?\n'+
    '\nThe name of vacancy is ' + name + 
    '\nThe limit date for apply is ' + limitDate + 
    '\nand your description is bellow ' + descript    
    )
    if(confirmation){
      const newVacancy = {
      name,
      descript,
      limitDate,
      candidates:[]
      }
    vacancies.push(newVacancy)
    }
}

  function viewVacancy(){
  const index = prompt('What is the index of vacancy? ')
  const vacancy = vacancies[index]
  const candidateInText = vacancy.candidates.reduce(function(finalText,candidate){
    return finalText+ "\n - " + candidate
  },"")
  alert(
    'Vacancy ' + (index+1) + 
    '\nName of vacancy: ' + vacancy.name + 
    '\nDescription of vacancy: ' + vacancy.descript+
    '\nLimit date: ' + vacancy.limitDate + 
    '\nCandidates: ' + vacancy.candidates.length+
    '\nRegistered candidates: ' + candidateInText
    )
  }

  function registerNewCandidate(){
  const candidate = prompt('What your name?')
  const index = prompt('What is the index of vacancy?')
  const vacancy = vacancies[index]
  const confirmation = 
  confirm(
    'This is vacancy wich your wish apply ' + candidate + '?' +
    '\nYour name is ' + vacancy.name + 
    '\nyour description is ' + vacancy.descript + 
    '\nand your limit date for apply is ' + vacancy.limitDate
  )
  if(confirmation){
    vacancy.candidates.push(candidate)
    alert('Subscribed successfully')
  }
  }

  function deleteVacancy(){
  const index = prompt('What is the index of vacancy?')
  const vacancy = vacancies[index]
  const confirmation = 
  confirm(
    'This is vacancy wich your wish delete?'+
    '\nYour name is ' + vacancy.name + 
    '\nyour description is ' + vacancy.descript + 
    '\nand your limit date for apply is ' + vacancy.limitDate
  )
  if(confirmation){
    vacancies.splice(index,1)
    alert('Vacancy deleted with sucessfully!!')
  }
  }

  function displayMenu(){
  const option = 
  prompt(
  '\na)Available vacancies'+
  '\nb)Create a new vacancy'+
  '\nc)View vacancy'+
  '\nd)Apply candidate'+
  '\ne)Delete vacancy'+
  '\nf)Exit'  
  )
  return option
  }
  function execute(){
    let option = ''
    do{
    option = displayMenu()
    switch(option){
    case 'a':
    listVacancies()
    break
    case 'b':
    newVacancy()
    break
    case 'c':
    viewVacancy()
    break
    case 'd':
    registerNewCandidate()
    break
    case 'e':
    deleteVacancy()
    break
    case 'f':
    alert('Exiting of application....')
    break  
    }
    }while(option!=='f')
    alert('Bye!!!')
  }

  execute();
