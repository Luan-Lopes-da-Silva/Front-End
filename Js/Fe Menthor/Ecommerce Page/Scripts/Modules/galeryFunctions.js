export default function galeryFunctions(){
  const imgsGalery = document.querySelectorAll('.galery img')
  const principalImg = document.querySelector('.main img')
  const modal = document.querySelector('.modal-img')
  const nav  = document.querySelector('nav')
  const main = document.querySelector('main')
  const close = document.querySelector('.exit')

 

  function switchPrincipalImg(event){
  const srcImgClicked = event.currentTarget.getAttribute('src')
  principalImg.setAttribute('src',srcImgClicked)
  }

  

  imgsGalery.forEach((img)=>{
      img.addEventListener('click', switchPrincipalImg)
  })


  }




