import finishPay from './finalizarPagamento.js'
export default function yearlyOrMonthly(){
  const input = document.querySelector('.billing input')
  const labels = document.querySelectorAll('.billing label')
  const bonusSpan = document.querySelectorAll('.bonus')
  const prices = document.querySelectorAll('.price')
  const planItems = document.querySelectorAll('.plan-item')
  const priceAddOn1 = document.querySelector('.cost1')
  const priceAddOn2 = document.querySelector('.cost2')
  const priceAddOn3 = document.querySelector('.cost3')
  const btnNext = document.querySelector('.btnNext')
  const stepCurrent = document.querySelector('.step2')
  let totalPrice = document.querySelector('.total-price')

  function verificaInput(){
    if(input.checked){
    labels[1].classList.add('ativa')
    labels[0].classList.remove('ativa')
    prices[0].innerHTML = '$90/yr'
    prices[1].innerHTML = '$120/yr'
    prices[2].innerHTML = '$150/yr'
    bonusSpan.forEach((item)=>{
      item.style.display = 'block'
    })
    }else{
      labels[0].classList.add('ativa')
      labels[1].classList.remove('ativa')
      prices[0].innerHTML = '$9/mo'
      prices[1].innerHTML = '$12/mo'
      prices[2].innerHTML = '$15/mo'
      bonusSpan.forEach((item)=>{
        item.style.display = 'none'
      })
    }
  }
 
  function escolhaPlano(event){
    const itemClicked = event.currentTarget
    let priceItemClicked = itemClicked.querySelector('.price').innerHTML
    if(priceItemClicked.length===5){
      const replacePriceItemClicked = +priceItemClicked.slice(1,2)
      totalPrice.innerText = `$${replacePriceItemClicked}`
      console.log(totalPrice)
    }else if(priceItemClicked.length===6){
      const replacePriceItemClicked = +priceItemClicked.slice(1,3)
      totalPrice.innerText = `$${replacePriceItemClicked}`
      console.log(totalPrice)
    }else if(priceItemClicked.length===7){
      const replacePriceItemClicked = +priceItemClicked.slice(1,4)
      totalPrice.innerText = `$${replacePriceItemClicked}`
      console.log(totalPrice)
    }
    itemClicked.classList.toggle('selecionado')
    if(itemClicked === planItems[0]){
    planItems[0].classList.add('selecionado')
    planItems[1].classList.remove('selecionado')
    planItems[2].classList.remove('selecionado')
    }else if(itemClicked === planItems[1]){
     planItems[0].classList.remove('selecionado')
     planItems[1].classList.add('selecionado')
     planItems[2].classList.remove('selecionado')
    }else if(itemClicked === planItems[2]){
     planItems[0].classList.remove('selecionado')
     planItems[1].classList.remove('selecionado')
     planItems[2].classList.add('selecionado')
    }
    } 

    function addOnPlan(){
      if(input.checked){
      priceAddOn1.innerHTML = '+$10/yr'
      console.log(priceAddOn1)
      priceAddOn2.innerHTML = '+$20/yr'
      console.log(priceAddOn2)
      priceAddOn3.innerHTML = '+$20/yr'
      console.log(priceAddOn3)
      }else{
      priceAddOn1.innerHTML = '+$1/mo'
      priceAddOn2.innerHTML = '+$1/mo'
      priceAddOn3.innerHTML = '+$2/mo'
      }
    }

    function saveValues(event){
     let planClicked = event.currentTarget
     let nameItem = planClicked.querySelector('h2')
     let priceItem = planClicked.querySelector('.price')
      localStorage.name = nameItem.innerHTML
      localStorage.price = priceItem.innerHTML
      finishPay();
    }
    localStorage.billing = 'Monthly'
    function saveValueBilling(){
      if(input.checked){
        localStorage.billing = 'Yearly'
      }else{
        localStorage.billing = 'Monthly'
      }
      finishPay();
    }
 
    input.addEventListener('change',verificaInput)
    input.addEventListener('change',saveValueBilling)
    input.addEventListener('change',addOnPlan)
    planItems.forEach((plan)=>{
    plan.addEventListener('click', escolhaPlano)
    plan.addEventListener('click', saveValues)
    })
}
