export default function backPass(){
  const step1 = document.querySelector('.step1')
  const step2 = document.querySelector('.step2')
  const step3 = document.querySelector('.step3')
  const step4 = document.querySelector('.step4')
  const btnBack = document.querySelector('.btnBack')
  const btnNext = document.querySelector('.btnNext')
  const circles = document.querySelectorAll('.circle')
 function voltaPasso(){
  if(circles[1].classList.contains('passo-ativo')){
    circles[1].classList.remove('passo-ativo')
    circles[0].classList.add('passo-ativo')
    step1.style.display = 'block'
    step2.style.display = 'none'
    btnBack.style.display = 'none'
    btnNext.innerHTML = 'Next Step'
   }else if(circles[2].classList.contains('passo-ativo')){
    circles[2].classList.remove('passo-ativo')
    circles[1].classList.add('passo-ativo')
    step3.style.display = 'none'
    step2.style.display = 'block'
    btnBack.style.display = 'block'
    btnNext.innerHTML = 'Next Step'
   }else if(circles[3].classList.contains('passo-ativo')){
    circles[3].classList.remove('passo-ativo')
    circles[2].classList.add('passo-ativo')
    step3.style.display = 'block'
    step4.style.display = 'none'
    btnBack.style.display = 'block'
    btnNext.innerHTML = 'Next Step'
    btnNext.style.backgroundColor = 'hsl(213, 96%, 18%)'
   }
 }

btnBack.addEventListener('click',voltaPasso)
}