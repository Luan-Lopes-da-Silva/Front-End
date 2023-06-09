type PlanetSituation = "Habitado"|"Habitavel"|"Inabitavel"|"Inexplorado"
type PlanetCoordinates = [number,number,number,number]
type Planet = {
  name:string,
  coordinates:PlanetCoordinates,
  situation:PlanetSituation,
  sattelites:string[]
}


const planets = []

let options = ''
function savePlanet(name:string,coordinates:PlanetCoordinates,situation:PlanetSituation){
planets.push({
  name,
  coordinates,
  situation,
  sattelites:[]
})
alert(`Planeta ${name} criado com sucesso`)
}

function findPlanet(name:string){
  const planet = planets.find((planet => planet.name === name))
  return planet ?? false
}


function upgradeSituation(situation:PlanetSituation, planet:Planet){
planet.situation = situation
alert(`A situação do planeta ${planet.name} foi alterada com sucesso`)
}

function addSatellites(satellite:string,planet:Planet){
planet.sattelites.push(satellite)
alert(`O satelite ${satellite} foi adicionado ao planeta ${planet.name}`)
}

function removeSatellite(planet:Planet){
  planet.sattelites.pop()
  alert(`O ultimo satelite da lista foi removido ${planet.name}`)
}

function promptValidSituation(){
  let situation:PlanetSituation
  let validSituation = false
  
  while(!validSituation){
    const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')

    switch(situationInput){
      case '1':
        situation = 'Habitado'
        validSituation = true
        break
      case '2':
        situation = "Habitavel"
        validSituation = true
        break
      case '3':
        situation = "Inabitavel"
        validSituation = true
        break
      case '4':
        situation = "Inexplorado"
        validSituation = true
        break
      default:
        alert('Situação invalida')
        break
    }
  }
  return situation
}

function validPlanet(callback: (planet:Planet)=>void){
  const planetName = prompt('Informe o nome do planeta')
  const planet = findPlanet(planetName)

  if(planet){
    callback(planet)
  }else{
    alert('Planeta não encontrado! Retornando ao menu...')
  }
}



function firstOption(){
  const name = prompt('Qual é nome do planeta')
  const coordinate1 = parseFloat(prompt('Passe a 1 coordenada'))
  const coordinate2 = parseFloat(prompt('Passe a 2 coordenada'))
  const coordinate3 = parseFloat(prompt('Passe a 3 coordenada'))
  const coordinate4 = parseFloat(prompt('Passe a 4 coordenada'))
  const situation = promptValidSituation()
  savePlanet(name,[coordinate1,coordinate2,coordinate3,coordinate4],situation)
}

function secondOption(){
validPlanet(planet=>{
  const situation = promptValidSituation()
  upgradeSituation(situation,planet)
})
}

function thirdOption(){
 validPlanet(planet=>{
 const sattelite = prompt('Qual é o nome do satelite que deseja adicionar?')
 addSatellites(sattelite,planet)
 })
}

function fourthOption(){
  validPlanet(planet=>{
    removeSatellite(planet)
    })
  }

function fifthOption(){
  let list = 'Planetas registrados:\n'
  planets.forEach(planet=>{
    const [a,b,c,d] = planet.coordinates
    
    list+=`
    Nome: ${planet.name}
    Coordenadas: ${a},${b},${c},${d}
    Situação: ${planet.situation}
    Satelites: ${planet.sattelites.length}
    `
    planet.sattelites.forEach(sattelite => {
      list += `    - ${sattelite}\n`
    })
  })
  alert(list)
}

while(options!='f'){
  options = prompt(`
  Escolha a função que deseja
  a)Salvar novo planeta
  b)Atualizar situação de planeta
  c)Adicionar um satelite ao planeta
  d)Remover satelite de planeta
  e)Listar planetas
  f)Sair
  `)

  switch(options){
    case 'a':
    firstOption()
    break 
    case 'b':
    secondOption()
    break
    case 'c':
    thirdOption()
    break
    case 'd':
    fourthOption()
    break
    case 'e':
    fifthOption()
    break
    case 'f':
    alert('Saindo da aplicação')
    break
    default:
    alert('Opção invalida')
  }
}





