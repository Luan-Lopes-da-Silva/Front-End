const menuHamburguer = document.querySelector('.menu-hamburger img')
const CloseHamburguer = document.querySelector('.close-hamburguer')
const srcHamburguer = menuHamburguer.getAttribute('src')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const noticia = document.querySelectorAll('.noticia-item')
menuHamburguer.addEventListener('click',()=>{
menu.classList.toggle('ativo')

  if(menu.classList.contains('ativo')){
   const srcCloseHamburguer = CloseHamburguer.getAttribute('src')
   menuHamburguer.setAttribute('src', srcCloseHamburguer)
   body.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    noticia.forEach((noticia)=>{
    noticia.style.zIndex = 0
    })
  }else{
    menuHamburguer.setAttribute('src',srcHamburguer)
    body.style.backgroundColor = 'initial';
    noticia.forEach((noticia)=>{
      noticia.style.zIndex = ''
      })
  }
})