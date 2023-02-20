export default function printNumber(){
    const numbers = document.querySelectorAll('.number')
    const numberScreen = document.querySelector('.number-screen')
    const resetOperator = document.querySelector('.reset')
    const delOperator = document.querySelector('.blue-key')
    const equalKey = document.querySelector('.equal-key')
    const operators = document.querySelectorAll('.operator')

    function printNumber(event){
        const numberClicked = event.currentTarget
        numberScreen.innerHTML += numberClicked.innerHTML
    }

    function cleanCalc(){
        numberScreen.innerHTML = ""
    }

    function delNumber(){
      numberScreen.innerHTML = numberScreen.innerHTML.substring(0,numberScreen.innerHTML.length-1)
    }

    function printOperator(event){
        const operatorClicked = event.currentTarget
        numberScreen.innerHTML += operatorClicked.innerHTML
    }

    function calc(){
        numberScreen.innerHTML = eval(numberScreen.innerHTML)
    }

    numbers.forEach((number)=>{
        number.addEventListener('click',printNumber)
    })

    operators.forEach((operator)=>{
        operator.addEventListener('click',printOperator)
    })

    resetOperator.addEventListener('click', cleanCalc)
    delOperator.addEventListener('click',delNumber)
    equalKey.addEventListener('click', calc)
}