const ratings = document.querySelectorAll(".rating")
const arrayRatings = Array.from(ratings)
const btn = document.querySelector("#btn")
const ratigVisible = document.querySelector('.visible-rating')
const ratigHidden = document.querySelector('.overflow-rating')
const hiddenText = document.querySelector('.rating-dado')






btn.addEventListener("click",favoritar)





function preencher(event){
  arrayRatings.forEach((item)=>{
  item.classList.remove('active')  
  })
  event.currentTarget.classList.add('active')
  }
  arrayRatings.forEach((item)=>{
  item.addEventListener('click',preencher)
  })
  

  function favoritar(event){
    ratigVisible.style.display = 'none'
    ratigHidden.style.display = 'block'
    ratigHidden.style.display = 'grid'
    ratigHidden.style.placeItems='center'
    if(arrayRatings[0].classList.contains('active')){
      hiddenText.innerHTML= `You selected ${arrayRatings[0].innerHTML} out of 
      ${arrayRatings.length}`
    }
    else if(arrayRatings[1].classList.contains('active')){
      hiddenText.innerHTML= `You selected ${arrayRatings[1].innerHTML} out of 
      ${arrayRatings.length}`
    }
    else if(arrayRatings[2].classList.contains('active')){
      hiddenText.innerHTML= `You selected ${arrayRatings[2].innerHTML} out of 
      ${arrayRatings.length}`
    }
    else if(arrayRatings[3].classList.contains('active')){
      hiddenText.innerHTML= `You selected ${arrayRatings[3].innerHTML} out of 
      ${arrayRatings.length}`
    }
    else if(arrayRatings[4].classList.contains('active')){
      hiddenText.innerHTML= `You selected ${arrayRatings[4].innerHTML} out of 
      ${arrayRatings.length}`
    }
    else if(arrayRatings[5].classList.contains('active')){
      hiddenText.innerHTML= `You selected ${arrayRatings[5].innerHTML} out of 
      ${arrayRatings.length}`
    }
  
 }