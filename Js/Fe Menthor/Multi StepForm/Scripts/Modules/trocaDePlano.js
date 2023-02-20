export default function changePlan(){
  const changeBtn = document.querySelector('.changePlan')
  const step2= document.querySelector('.step2')
  const step4 = document.querySelector('.step4')
  const circleStep = document.querySelectorAll('.circle')
  const btnNext = document.querySelector('.btnNext')
  function backToPlan(){
    step4.style.display = 'none'
    circleStep[3].classList.remove('passo-ativo')
    step2.style.display = 'block'
    circleStep[1].classList.add('passo-ativo')
    btnNext.style.backgroundColor = 'hsl(213, 96%, 18%)'
    btnNext.innerHTML= 'Next Step'
  }
  changeBtn.addEventListener('click', backToPlan)
}