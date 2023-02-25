const inputColor = document.querySelector('input')
const btnChange = document.querySelector('button')
const body = document.querySelector('body')


function changeBodyColor(){
body.style.backgroundColor = inputColor.value
body.style.color = 'white'
}

btnChange.addEventListener('click',changeBodyColor)