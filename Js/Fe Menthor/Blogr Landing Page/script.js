const nav = document.querySelector('nav')
const liDrop = document.querySelectorAll('.menu li')
const navImg =  document.querySelector('nav img')


function dropShow(event){
const liTarget = event.currentTarget
liTarget.nextElementSibling.classList.toggle('ativo')
liTarget.classList.toggle('ativo')
nav.style.alignItems = 'flex-start'
navImg.style.alignItems='flex-start'
}
liDrop.forEach((li)=>{
  li.addEventListener('click',dropShow)

})


const menuHamburger = document.querySelector('.menu-hamburguer')
const menuOpenSrc = menuHamburger.getAttribute('src')
const flexButtons = document.querySelector('.flex-buttons')
const menu = document.querySelectorAll('.menu')
const menuClose = document.querySelector('.close-menu')
const menuCloseSrc = menuClose.getAttribute('src')
const menuLi = document.querySelector('.menu li')


function showMenu(){
    flexButtons.classList.toggle('ativo')
    menu.forEach((menuLi)=>{
      menuLi.classList.toggle('ativo')
    })  
    if(flexButtons.classList.contains('ativo')){
     menuHamburger.setAttribute('src', menuCloseSrc)
    } else{
      menuHamburger.setAttribute('src', menuOpenSrc)
  }
  
}
menuHamburger.addEventListener('click',showMenu)