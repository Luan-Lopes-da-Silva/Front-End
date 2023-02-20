export default function menuHamburger(){
    const cartContainer = document.querySelector('#cart-container')
    const productContainer = document.querySelector('.product')
    const modal = document.querySelector('.modal-img')
    const menuIcon = document.querySelector('#menu')
    const ulLinks = document.querySelector('.links')
    const liLinks = document.querySelectorAll('.links li')
    const logo = document.querySelector('#logo')

    function toggleMenu(){
        liLinks.forEach((link)=>{
            link.classList.toggle('open')
        })
        ulLinks.classList.toggle('open')
        cartContainer.classList.toggle('open')
        productContainer.classList.toggle('open')
        modal.classList.toggle('open')
        logo.classList.toggle('open')
        menuIcon.classList.toggle('open')
    }

    menuIcon.addEventListener('click',toggleMenu)
}