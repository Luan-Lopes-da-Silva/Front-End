export default function trocarPasso(){
const circles = document.querySelectorAll('.circle')
const step1 =  document.querySelector('.step1')
const step2 =  document.querySelector('.step2')
const step3 =  document.querySelector('.step3')
const step4 =  document.querySelector('.step4')
const thanksPage = document.querySelector('.thanks')
const btnNext = document.querySelector('.btnNext')
const btnBack = document.querySelector('.btnBack')
const stepPreview = document.querySelector('.stepPreview')

if(circles[0].classList.contains('passo-ativo')){
circles[0].classList.remove('passo-ativo')
circles[1].classList.add('passo-ativo')
step1.style.display = 'none'
step2.style.display = 'block'
btnBack.style.display= 'inline-block'
btnNext.style.marginLeft = '210px'
btnNext.style.marginRight = '90px'
btnBack.style.marginRight = '84px'
}else if(circles[1].classList.contains('passo-ativo')){
circles[0].classList.remove('passo-ativo')
circles[1].classList.remove('passo-ativo')
circles[2].classList.add('passo-ativo')
step1.style.display = 'none'
step2.style.display = 'none'
step3.style.display = 'block'
step3.style.paddingBottom = '40px'
btnNext.style.marginTop = '0px'
btnNext.style.marginLeft = '290px'
}
else if(circles[2].classList.contains('passo-ativo')){
  circles[0].classList.remove('passo-ativo')
  circles[1].classList.remove('passo-ativo')
  circles[2].classList.remove('passo-ativo')
  circles[3].classList.add('passo-ativo')
  step1.style.display = 'none'
  step2.style.display = 'none'
  step3.style.display = 'none'
  step4.style.display = 'block'
  btnNext.innerHTML = 'Confirm'
  btnNext.style.backgroundColor = 'hsl(243, 100%, 62%)'
}
else{
  step4.style.display = 'none'
  thanksPage.style.display='grid'
  btnBack.style.display = 'none'
  btnNext.style.display = 'none'
  stepPreview.style.width = 'unset'
}





}

