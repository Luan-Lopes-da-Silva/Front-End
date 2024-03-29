const ships = []

let options = ''

while(options!='e'){
  options = prompt(
    `Qual opção deseja escolher?
     a)Criar uma nova nave
     b)Adicionar um novo membro a nave
     c)Enviar nave em uma missão
     d)Informações das naves
     e)Sair
  `)
  switch(options){
  case 'a':
    const nameShip = prompt('Qual é o nome da nave')
    const namePilot = prompt('Qual é o nome do piloto')
    const crewLimit = prompt ('Qual é o limite da tripulação?')
    const createShip = createSpaceship(nameShip,namePilot,crewLimit)
    ships.push(createShip)
    alert(`
        A nave de nome ${createShip.name}
        do piloto ${createShip.pilot}
        com a tripulação maxima de ${createShip.crewLimit}
        foi criada com sucesso`)
    break  
    case 'b':
    const searchShip = prompt('Qual é o nome da nave que deseja inserir o tripulante')
    
    addPassanger(searchShip)
    break  
    case 'c':
    const ship =  prompt('Qual é a nave que deseja enviar em missão?')
    sendShip(ship)
    break  
    case 'd':
    sendInformation()
    break  
    case 'e':
    alert('Você saiu da estacao')
    break  
    }
}

function createSpaceship(name:string,pilot:string,crewLimit:string){
  const ship = {
  name,
  pilot,
  crewLimit,
  crew:[],
  inMission:false
  }
  return ship
}

function addPassanger(searchShip:string){
const findShip = ships.find((ship=>ship.name===searchShip))

if(findShip){
const passanger = prompt('Qual é o nome do passageiro que deseja embarcar na nave?')
alert(`O passageiro ${passanger} foi adicionado a nave ${searchShip} com sucesso`)
findShip.crew.push(passanger)
}
else{
alert('Nave nao encontrada')
}
}

function sendShip(searchShip:string){
  const findShip = ships.find((ship=>ship.name===searchShip))
  const crew = findShip.crew.length
  const regexCrew = parseFloat(findShip.crewLimit.replace(/[a-z\s]/gi,'')) 
  const minCrew = crew/regexCrew*100

  if(findShip && !findShip.inMission==true && minCrew>=33){
  findShip.inMission = true
  alert(`A nave ${findShip.name} foi enviada com sucesso`)
  }else if(findShip && !findShip.inMission==true && minCrew<33){
  alert(`A nave ${findShip.name} não tem a tripulação necessaria pra ser enviada em missão`)
  }else{
  alert(`A nave ${findShip.name} ja esta em missão`)
  }
}

function sendInformation(){
  ships.forEach(ship => {
    alert(`
           Nome: ${ship.name}
           Piloto : ${ship.pilot}
           Tripulação maxima de : ${ship.crewLimit}
           Tripulantes ${ship.crew}
    `)
  });
}



