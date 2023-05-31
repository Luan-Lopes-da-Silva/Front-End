async function getPokemons(){
const response = await fetch('https://pokeapi.co/api/v2/pokemon/30')
const pokemons = await response.json();

const card = document.createElement('div')
card.classList.add('card')

const pokemonName = pokemons.name
const name = document.createElement('h2')
name.textContent = pokemonName
const pokemonImg = pokemons.sprites.other.dream_world.front_default
const img = document.createElement('img')
img.src = pokemonImg

card.append(name,img)
document.querySelector('#pokemon').append(card)
}

getPokemons()