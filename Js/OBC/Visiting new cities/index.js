const nameOfTourist = prompt('What´s your name?')
let visitedCity = prompt('You visited some city? (Yes/No)')
let cities = ""
let countOfCities = 0

while(visitedCity==='Yes'){
  let cityWhichVisited = prompt('Wich city you visited?')
  cities += cityWhichVisited + ', '
  countOfCities++
  visitedCity = prompt('You visited some another one city? (Yes/No)')
}

alert('The tourist ' + nameOfTourist + ' visited ' + countOfCities + ' cities '+ 'and the name of city is ' + cities)

