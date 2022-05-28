const form = document.forms.namedItem("formulario")

form.addEventListener('submit' , event  =>{
event.preventDefault();
console.log(event.target.dado.value)


})