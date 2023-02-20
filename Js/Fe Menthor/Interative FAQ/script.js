const arrow = document.querySelectorAll('#arrow-down')
const dd = document.querySelectorAll('dd')
const arrowArray = Array.from(arrow)





    function visibleAnswer(event){
      event.currentTarget.classList.toggle('ativo')
      if( event.currentTarget.classList.contains('ativo')){
      event.currentTarget.nextElementSibling.setAttribute('style', 'display:block')
      event.currentTarget.previousElementSibling.classList.add('bold')

      }else{
        event.currentTarget.nextElementSibling.setAttribute('style', 'display:none')
        event.currentTarget.previousElementSibling.classList.remove('bold')

      }
     }


  arrowArray.forEach((item)=>{
    item.addEventListener('click' , visibleAnswer)
    })