export default function mediaQuery(){
  let query = window.matchMedia('(max-width:550px)')
  const btnNext = document.querySelector('.btnNext')
  const btnBack = document.querySelector('.btnBack')
  const circle = document.querySelectorAll('.circle')
 
 function checaSize(){
  if(query.matches && circle[1].classList.contains('passo-ativo')){
      btnNext.style.marginTop = '620px'
      btnBack.style.marginTop = '610px'
  }else if(query.matches && circle[2].classList.contains('passo-ativo')){
      btnNext.style.marginTop = '460px'
      btnNext.style.marginLeft = '210px'
      btnBack.style.marginTop = '460px'
  }
  else{
      btnNext.style.marginTop = '0px'
  }
 }
  btnNext.addEventListener('click', checaSize)
  
}