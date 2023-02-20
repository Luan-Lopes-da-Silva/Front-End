export default function incrementOrDecrement(){
   const value = document.querySelector('.value')
   const increment = document.querySelector('.increment')
   const decrement = document.querySelector('.decrement')

   function incrementValue(){
    value.innerHTML++
   }

   function decrementValue(){
    value.innerHTML--
   }

   increment.addEventListener('click',incrementValue)
   decrement.addEventListener('click',decrementValue)
}