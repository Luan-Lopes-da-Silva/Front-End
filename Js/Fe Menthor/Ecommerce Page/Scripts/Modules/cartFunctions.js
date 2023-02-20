export default function cartFunctions(){
   const cartIcon = document.querySelector('#cart')
   const cartContainer = document.querySelector('.cart-value')
   const btnAddToCart = document.querySelector('.cart-btn')
   const productNameCart = document.querySelector('.product-name')
   const productQuantityCart  = document.querySelector('.product-quantity-cart')
   let totalPriceCart= document.querySelector('.total-price')
   const productName = document.querySelector('h1')
   const productQuantity  = document.querySelector('.col2 .value')
   const cartResume = document.querySelector('.cart-resume')
   const textEmptyCart = document.querySelector('.text')
   const deleteIcon = document.querySelector('#delete')
   const cartQuantityIcon = document.querySelector('#cart-count')

   function showCart(){
    cartContainer.classList.toggle('cart-ativo')
   }

   function addToCart(){
    if(productQuantity.innerHTML == 0){
      cartResume.style.display = 'none'
      textEmptyCart.innerHTML = 'Your cart is empty'
    }else{
    cartResume.style.display = 'grid'
      productNameCart.innerHTML = productName.innerHTML
      totalPriceCart.innerHTML = `$${productQuantity.innerHTML * 125}.00`
      productQuantityCart.innerHTML = `$125.00 x ${productQuantity.innerHTML}`
      cartQuantityIcon.innerHTML = productQuantity.innerHTML
      cartQuantityIcon.style.display = 'inline-block'
      textEmptyCart.style.display = 'none'
    }
   }

   function eraseCart(){
    cartResume.style.display = 'none'
    cartQuantityIcon.style.display = 'none'
    textEmptyCart.style.display = 'block'
   }



   cartIcon.addEventListener('click',showCart)
   btnAddToCart.addEventListener('click', addToCart)
   deleteIcon.addEventListener('click' , eraseCart)
}