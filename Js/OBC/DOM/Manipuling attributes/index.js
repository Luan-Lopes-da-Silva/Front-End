const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',function(){
input.value = 'Second value'  
})

document.getElementById('type').addEventListener('click',function(){
input.type = input.type != 'date' ? 'date' : 'text'  
})

document.getElementById('placeholder').addEventListener('click',function(){
 input.setAttribute('placeholder' , 'Type something') 
})

document.getElementById('disable').addEventListener('click',function(){
input.setAttribute('disabled' , !input.disable)  
})


document.getElementById('data').addEventListener('click',function(){
const data = input.dataset.somethingElse  
console.log('The value of attribute data-something-else is: ' + data)
input.dataset.somethingElse = 'Some other value'  
console.log('Now the value of attribute data-something-else is: ' + input.dataset.somethingElse)
})