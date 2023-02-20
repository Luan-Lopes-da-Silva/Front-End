export default function finishPay(){
  const plans = document.querySelectorAll('.plan-item')
let spanPlanSelected = document.querySelector('.plan-info .planSelected')
let spanPrice = document.querySelector('.plan-info .planPrice')
let namePlan = localStorage.getItem('name')
let billingPlan = localStorage.getItem('billing')
let pricePlan = localStorage.getItem('price')
let spanTotalBilling = document.querySelector('.total')
spanPlanSelected.innerHTML = `${namePlan}(${billingPlan})`
spanPrice.innerHTML = pricePlan
spanTotalBilling.innerHTML = `Total (per ${billingPlan})`
const inputAdd1 = document.querySelector('#input1')
const nameAdd1 = document.querySelector('.add-on-info h4')
let priceAdd1 = document.querySelector('.cost1')
const inputAdd2 = document.querySelector('#input2')
const namesAdds = document.querySelectorAll('.add-on-info h4')
const priceAdd2 = document.querySelector('.cost2')
const inputAdd3 = document.querySelector('#input3')
const priceAdd3 = document.querySelector('.cost3')
let name1 = document.querySelector('.add-on-name')
let name2 = document.querySelector('.add-on-name2')
let name3 = document.querySelector('.add-on-name3')
let price1 = document.querySelector('.add-on-price1')
let price2 =  document.querySelector('.add-on-price2')
let price3 =  document.querySelector('.add-on-price3')
let totalPrice = document.querySelector('.total-price')



function checkInput(){
if(inputAdd1.checked && inputAdd2.checked && inputAdd3.checked && pricePlan.length===5 
&& priceAdd1.innerHTML.length ===6){
name1.innerHTML = nameAdd1.innerHTML
name2.innerHTML = namesAdds[1].innerHTML
name3.innerHTML = namesAdds[2].innerHTML
price1.innerHTML = priceAdd1.innerHTML
price2.innerHTML = priceAdd2.innerHTML
price3.innerHTML = priceAdd3.innerHTML
let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
let replacePlan = +pricePlan.slice(1,2)
totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replaceAdd3+replacePlan}` 
console.log(totalPrice)
}else if(inputAdd1.checked && inputAdd2.checked && inputAdd3.checked && pricePlan.length ===6 
&& priceAdd1.innerHTML.length === 6){
name1.innerHTML = nameAdd1.innerHTML
name2.innerHTML = namesAdds[1].innerHTML
name3.innerHTML = namesAdds[2].innerHTML
price1.innerHTML = priceAdd1.innerHTML
price2.innerHTML = priceAdd2.innerHTML
price3.innerHTML = priceAdd3.innerHTML
let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
let replacePlan = +pricePlan.slice(1,3)
totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replaceAdd3+replacePlan}` 
console.log(totalPrice)
}else if(inputAdd1.checked && inputAdd2.checked && inputAdd3.checked && pricePlan.length ===6 
  && priceAdd1.innerHTML.length === 7){
    name1.innerHTML = nameAdd1.innerHTML
    name2.innerHTML = namesAdds[1].innerHTML
    name3.innerHTML = namesAdds[2].innerHTML
    price1.innerHTML = priceAdd1.innerHTML
    price2.innerHTML = priceAdd2.innerHTML
    price3.innerHTML = priceAdd3.innerHTML
    let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
    let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
    let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
    let replacePlan = +pricePlan.slice(1,3)
    totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replaceAdd3+replacePlan}` 
    console.log(totalPrice)
}else if(inputAdd1.checked && inputAdd2.checked && inputAdd3.checked && pricePlan.length ===7 
  && priceAdd1.innerHTML.length === 7){
    name1.innerHTML = nameAdd1.innerHTML
    name2.innerHTML = namesAdds[1].innerHTML
    name3.innerHTML = namesAdds[2].innerHTML
    price1.innerHTML = priceAdd1.innerHTML
    price2.innerHTML = priceAdd2.innerHTML
    price3.innerHTML = priceAdd3.innerHTML
    let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
    let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
    let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
    let replacePlan = +pricePlan.slice(1,4)
    totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replaceAdd3+replacePlan}` 
    console.log(totalPrice)
}

else if(inputAdd1.checked && inputAdd2.checked && pricePlan.length===5 
  && priceAdd1.innerHTML.length ===6){
  name1.innerHTML = nameAdd1.innerHTML
  name2.innerHTML = namesAdds[1].innerHTML
  price1.innerHTML = priceAdd1.innerHTML
  price2.innerHTML = priceAdd2.innerHTML
  let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
  let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
  let replacePlan = +pricePlan.slice(1,2)
  totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replacePlan}` 
  console.log(totalPrice)
  }else if(inputAdd1.checked && inputAdd2.checked && pricePlan.length ===6 
  && priceAdd1.innerHTML.length === 6){
  name1.innerHTML = nameAdd1.innerHTML
  name2.innerHTML = namesAdds[1].innerHTML
  price1.innerHTML = priceAdd1.innerHTML
  price2.innerHTML = priceAdd2.innerHTML
  let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
  let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
  let replacePlan = +pricePlan.slice(1,3)
  totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replacePlan}` 
  console.log(totalPrice)
  }else if(inputAdd1.checked && inputAdd2.checked && pricePlan.length ===6 
    && priceAdd1.innerHTML.length === 7){
      name1.innerHTML = nameAdd1.innerHTML
      name2.innerHTML = namesAdds[1].innerHTML
      price1.innerHTML = priceAdd1.innerHTML
      price2.innerHTML = priceAdd2.innerHTML
      let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
      let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
      let replacePlan = +pricePlan.slice(1,3)
      totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replacePlan}` 
      console.log(totalPrice)
  }else if(inputAdd1.checked && inputAdd2.checked && pricePlan.length ===7 
    && priceAdd1.innerHTML.length === 7){
      name1.innerHTML = nameAdd1.innerHTML
      name2.innerHTML = namesAdds[1].innerHTML
      price1.innerHTML = priceAdd1.innerHTML
      price2.innerHTML = priceAdd2.innerHTML
      let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
      let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
      let replacePlan = +pricePlan.slice(1,4)
      totalPrice.innerText = `$${replaceAdd1+replaceAdd2+replacePlan}` 
      console.log(totalPrice)
  }

  else if(inputAdd1.checked && inputAdd3.checked && pricePlan.length===5 
    && priceAdd1.innerHTML.length ===6){
    name1.innerHTML = nameAdd1.innerHTML
    name3.innerHTML = namesAdds[2].innerHTML
    price1.innerHTML = priceAdd1.innerHTML
    price3.innerHTML = priceAdd3.innerHTML
    let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
    let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
    let replacePlan = +pricePlan.slice(1,2)
    totalPrice.innerText = `$${replaceAdd1+replaceAdd3+replacePlan}` 
    console.log(totalPrice)
    }else if(inputAdd1.checked && inputAdd3.checked && pricePlan.length ===6 
    && priceAdd1.innerHTML.length === 6){
    name1.innerHTML = nameAdd1.innerHTML
    name3.innerHTML = namesAdds[2].innerHTML
    price1.innerHTML = priceAdd1.innerHTML
    price3.innerHTML = priceAdd3.innerHTML
    let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
    let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
    let replacePlan = +pricePlan.slice(1,3)
    totalPrice.innerText = `$${replaceAdd1+replaceAdd3+replacePlan}` 
    console.log(totalPrice)
    }else if(inputAdd1.checked && inputAdd3.checked && pricePlan.length ===6 
      && priceAdd1.innerHTML.length === 7){
        name1.innerHTML = nameAdd1.innerHTML
        name3.innerHTML = namesAdds[2].innerHTML
        price1.innerHTML = priceAdd1.innerHTML
        price3.innerHTML = priceAdd3.innerHTML
        let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
        let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
        let replacePlan = +pricePlan.slice(1,3)
        totalPrice.innerText = `$${replaceAdd1+replaceAdd3+replacePlan}` 
        console.log(totalPrice)
    }else if(inputAdd1.checked && inputAdd3.checked && pricePlan.length ===7 
      && priceAdd1.innerHTML.length === 7){
        name1.innerHTML = nameAdd1.innerHTML
        name3.innerHTML = namesAdds[2].innerHTML
        price1.innerHTML = priceAdd1.innerHTML
        price3.innerHTML = priceAdd3.innerHTML
        let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
        let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
        let replacePlan = +pricePlan.slice(1,4)
        totalPrice.innerText = `$${replaceAdd1+replaceAdd3+replacePlan}` 
        console.log(totalPrice)
    }

    else if(inputAdd2.checked && inputAdd3.checked && pricePlan.length===5 
    && priceAdd1.innerHTML.length ===6){
    name2.innerHTML = namesAdds[1].innerHTML
    name3.innerHTML = namesAdds[2].innerHTML
    price2.innerHTML = priceAdd2.innerHTML
    price3.innerHTML = priceAdd3.innerHTML
    let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
    let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
    let replacePlan = +pricePlan.slice(1,2)
    totalPrice.innerText = `$${replaceAdd2+replaceAdd3+replacePlan}` 
    console.log(totalPrice)
    }else if(inputAdd2.checked && inputAdd3.checked && pricePlan.length ===6 
    && priceAdd1.innerHTML.length === 6){
    name2.innerHTML = namesAdds[1].innerHTML
    name3.innerHTML = namesAdds[2].innerHTML
    price2.innerHTML = priceAdd2.innerHTML
    price3.innerHTML = priceAdd3.innerHTML
    let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
    let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
    let replacePlan = +pricePlan.slice(1,3)
    totalPrice.innerText = `$${replaceAdd2+replaceAdd3+replacePlan}` 
    console.log(totalPrice)
    }else if(inputAdd2.checked && inputAdd3.checked && pricePlan.length ===6 
      && priceAdd1.innerHTML.length === 7){
        name2.innerHTML = namesAdds[1].innerHTML
        name3.innerHTML = namesAdds[2].innerHTML
        price2.innerHTML = priceAdd2.innerHTML
        price3.innerHTML = priceAdd3.innerHTML
        let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
        let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
        let replacePlan = +pricePlan.slice(1,3)
        totalPrice.innerText = `$${replaceAdd2+replaceAdd3+replacePlan}` 
        console.log(totalPrice)
    }else if(inputAdd2.checked && inputAdd3.checked && pricePlan.length ===7 
      && priceAdd1.innerHTML.length === 7){
        name2.innerHTML = namesAdds[1].innerHTML
        name3.innerHTML = namesAdds[2].innerHTML
        price2.innerHTML = priceAdd2.innerHTML
        price3.innerHTML = priceAdd3.innerHTML
        let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
        let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
        let replacePlan = +pricePlan.slice(1,4)
        totalPrice.innerText = `$${replaceAdd2+replaceAdd3+replacePlan}` 
        console.log(totalPrice)
    }

    else if(inputAdd1.checked && pricePlan.length===5 
      && priceAdd1.innerHTML.length ===6){
      name1.innerHTML = nameAdd1.innerHTML
      price1.innerHTML = priceAdd1.innerHTML
      let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
      let replacePlan = +pricePlan.slice(1,2)
      totalPrice.innerText = `$${replaceAdd1+replacePlan}` 
      console.log(totalPrice)
      }else if(inputAdd1.checked && pricePlan.length ===6 
      && priceAdd1.innerHTML.length === 6){
      name1.innerHTML = nameAdd1.innerHTML
      price1.innerHTML = priceAdd1.innerHTML
      let replaceAdd1 = +priceAdd1.innerHTML.slice(2,3)
      let replacePlan = +pricePlan.slice(1,3)
      totalPrice.innerText = `$${replaceAdd1+replacePlan}` 
      console.log(totalPrice)
      }else if(inputAdd1.checked && pricePlan.length ===6 
        && priceAdd1.innerHTML.length === 7){
          name1.innerHTML = nameAdd1.innerHTML
          price1.innerHTML = priceAdd1.innerHTML
          let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
          let replacePlan = +pricePlan.slice(1,3)
          totalPrice.innerText = `$${replaceAdd1+replacePlan}` 
          console.log(totalPrice)
      }else if(inputAdd1.checked && pricePlan.length ===7 
        && priceAdd1.innerHTML.length === 7){
          name1.innerHTML = nameAdd1.innerHTML
          price1.innerHTML = priceAdd1.innerHTML
          let replaceAdd1 = +priceAdd1.innerHTML.slice(2,4)
          let replacePlan = +pricePlan.slice(1,4)
          totalPrice.innerText = `$${replaceAdd1+replacePlan}` 
          console.log(totalPrice)
      }

      else if(inputAdd2.checked && pricePlan.length===5 
        && priceAdd1.innerHTML.length ===6){
        name2.innerHTML = namesAdds[1].innerHTML
        price2.innerHTML = priceAdd2.innerHTML
        let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
        let replacePlan = +pricePlan.slice(1,2)
        totalPrice.innerText = `$${replaceAdd2+replacePlan}` 
        console.log(totalPrice)
        }else if(inputAdd2.checked && pricePlan.length ===6 
        && priceAdd1.innerHTML.length === 6){
        name2.innerHTML = namesAdds[1].innerHTML
        price2.innerHTML = priceAdd2.innerHTML
        let replaceAdd2 = +priceAdd2.innerHTML.slice(2,3)
        let replacePlan = +pricePlan.slice(1,3)
        totalPrice.innerText = `$${replaceAdd2+replacePlan}` 
        console.log(totalPrice)
        }else if(inputAdd2.checked && pricePlan.length ===6 
          && priceAdd1.innerHTML.length === 7){
            name2.innerHTML = namesAdds[1].innerHTML
            price2.innerHTML = priceAdd2.innerHTML
            let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
            let replacePlan = +pricePlan.slice(1,3)
            totalPrice.innerText = `$${replaceAdd2+replacePlan}` 
            console.log(totalPrice)
        }else if(inputAdd2.checked && pricePlan.length ===7 
          && priceAdd1.innerHTML.length === 7){
            name2.innerHTML = namesAdds[1].innerHTML
            price2.innerHTML = priceAdd2.innerHTML
            let replaceAdd2 = +priceAdd2.innerHTML.slice(2,4)
            let replacePlan = +pricePlan.slice(1,4)
            totalPrice.innerText = `$${replaceAdd2+replacePlan}` 
            console.log(totalPrice)
        }

        else if(inputAdd3.checked && pricePlan.length===5 
          && priceAdd1.innerHTML.length ===6){
          name3.innerHTML = namesAdds[2].innerHTML
          price3.innerHTML = priceAdd3.innerHTML
          let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
          let replacePlan = +pricePlan.slice(1,2)
          totalPrice.innerText = `$${replaceAdd3+replacePlan}` 
          console.log(totalPrice)
          }else if(inputAdd3.checked && pricePlan.length ===6 
          && priceAdd1.innerHTML.length === 6){
          name3.innerHTML = namesAdds[2].innerHTML
          price3.innerHTML = priceAdd3.innerHTML
          let replaceAdd3 = +priceAdd3.innerHTML.slice(2,3)
          let replacePlan = +pricePlan.slice(1,3)
          totalPrice.innerText = `$${replaceAdd3+replacePlan}` 
          console.log(totalPrice)
          }else if(inputAdd3.checked && pricePlan.length ===6 
            && priceAdd1.innerHTML.length === 7){
              name3.innerHTML = namesAdds[2].innerHTML
              price3.innerHTML = priceAdd3.innerHTML
              let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
              let replacePlan = +pricePlan.slice(1,3)
              totalPrice.innerText = `$${replaceAdd3+replacePlan}` 
              console.log(totalPrice)
          }else if(inputAdd3.checked && pricePlan.length ===7 
            && priceAdd1.innerHTML.length === 7){
              name3.innerHTML = namesAdds[2].innerHTML
              price3.innerHTML = priceAdd3.innerHTML
              let replaceAdd3 = +priceAdd3.innerHTML.slice(2,4)
              let replacePlan = +pricePlan.slice(1,4)
              totalPrice.innerText = `$${replaceAdd3+replacePlan}` 
              console.log(totalPrice)
          }

        
}

inputAdd1.addEventListener('click',checkInput)
inputAdd2.addEventListener('click',checkInput)
inputAdd3.addEventListener('click',checkInput)
}