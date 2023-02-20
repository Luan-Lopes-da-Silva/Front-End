export default function modalFunctions(){
    const principalImg = document.querySelector('.main img')
    const modalImgPrincipal = document.querySelector('.modal-img img')
    const modal = document.querySelector('.modal-img')
    const nav  = document.querySelector('nav')
    const main = document.querySelector('main')
    const close = document.querySelector('.exit')
    const nextIcon = document.querySelector('.next')
    const prevIcon = document.querySelector('.prev')
    const galery2Imgs = document.querySelectorAll('.galery2 img')
    
    
    function openModal(){
        modal.style.display = 'grid'
        main.classList.add('ativo')
        nav.classList.add('ativo')
        galery2Imgs.forEach((img)=>{
          if(img.getAttribute('src') === modalImgPrincipal.getAttribute('src')){
            img.classList.add('img-ativa')
          }else{
            img.classList.remove('img-ativa')
          }
        })
      }
      function closeModal(){
        modal.style.display = 'none'
        main.classList.remove('ativo')
        nav.classList.remove('ativo')
      }
    
      function nextImage(){
       if(modalImgPrincipal.getAttribute('src') == galery2Imgs[0].getAttribute('src')){
        modalImgPrincipal.setAttribute('src', galery2Imgs[1].getAttribute('src'))
        galery2Imgs[1].classList.add('img-ativa')
        galery2Imgs[0].classList.remove('img-ativa')
       }else if(modalImgPrincipal.getAttribute('src') == galery2Imgs[1].getAttribute('src')){
        modalImgPrincipal.setAttribute('src', galery2Imgs[2].getAttribute('src'))
        galery2Imgs[2].classList.add('img-ativa')
        galery2Imgs[1].classList.remove('img-ativa')
       }else if(modalImgPrincipal.getAttribute('src') == galery2Imgs[2].getAttribute('src')){
        modalImgPrincipal.setAttribute('src', galery2Imgs[3].getAttribute('src'))
        galery2Imgs[3].classList.add('img-ativa')
        galery2Imgs[2].classList.remove('img-ativa')
       }else{
        modalImgPrincipal.setAttribute('src', galery2Imgs[0].getAttribute('src'))
        galery2Imgs[0].classList.add('img-ativa')
        galery2Imgs[3].classList.remove('img-ativa')
       }
      }

      function backImage(){
        if(modalImgPrincipal.getAttribute('src')==galery2Imgs[1].getAttribute('src')){
        modalImgPrincipal.setAttribute('src', galery2Imgs[0].getAttribute('src'))
        galery2Imgs[0].classList.add('img-ativa')
        galery2Imgs[1].classList.remove('img-ativa')
        }else if(modalImgPrincipal.getAttribute('src')==galery2Imgs[2].getAttribute('src')){
          modalImgPrincipal.setAttribute('src', galery2Imgs[1].getAttribute('src'))
          galery2Imgs[1].classList.add('img-ativa')
          galery2Imgs[2].classList.remove('img-ativa')
        }else if(modalImgPrincipal.getAttribute('src')==galery2Imgs[3].getAttribute('src')){
          modalImgPrincipal.setAttribute('src', galery2Imgs[2].getAttribute('src'))
          galery2Imgs[2].classList.add('img-ativa')
          galery2Imgs[3].classList.remove('img-ativa')
        }else{
          modalImgPrincipal.setAttribute('src', galery2Imgs[3].getAttribute('src'))
        galery2Imgs[3].classList.add('img-ativa')
        galery2Imgs[0].classList.remove('img-ativa')
        }
      }

      principalImg.addEventListener('click' , openModal)
      close.addEventListener('click',closeModal)
      nextIcon.addEventListener('click',nextImage)
      prevIcon.addEventListener('click', backImage)
}