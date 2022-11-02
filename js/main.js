
const display = document.querySelector('.display')
const operatorBox = document.querySelector('.operatorBox')
const history = document.querySelector('.history')
const numbers = document.querySelectorAll('.btn-number')
const operators = document.querySelectorAll('.btn-operator')
const clear = document.querySelector('.btn-clear-all')
const equals = document.querySelector('.btn-equals')
const brisanje = document.querySelector('.btn-brisanje')
const h2 = document.querySelector('h2')
let historyArr;
let holder1 = []
let holder2 = []
let symbol = ''
let operatorCounter = 0
display.value = 0
let symbolArr = ['+', '-', '/', '*', '%']

numbers.forEach(num => num.addEventListener('click', ()=>{
    if(display.value == 0 || display.value == ''){
        display.value = num.innerText
    }else if(num.innerText == '.' && display.value[display.value.length -1] === '.'){
        return
    }else{
        display.value += num.innerText
    }
    reduceFont()
}))
operators.forEach(operator => operator.addEventListener('click', ()=>{
    console.log(history.innerText)
    if(symbolArr.includes(display.value[display.value.length-1])) return
    if(display.value == 0 && operator.innerText !== '-') return
    if(display.value == 0 && operator.innerText === '-'){
        display.value = '-'
    }else{ 
        display.value += operator.innerText
    }
    reduceFont()
}))
clear.addEventListener('click', ()=>{
    display.value = 0
    display.style.fontSize = '50px'
    h2.classList.add('hidden')
    history.innerText = ''
})
brisanje.addEventListener('click', ()=>{
    display.value = display.value.slice(0, display.value.length-1)
    if(display.value.length < 25) h2.classList.add('hidden')
    if(display.value.length === 0) display.value = 0
    if(operatorCounter == 0) holder1.pop()
    if(operatorCounter >=1 ) holder2.pop()
    symbol = ''
    reduceFont()
}) 
equals.addEventListener('click', () =>{
    history.innerText = display.value + ' ='
    display.value = eval(display.value)   
})
function reduceFont(){ 
     if(display.value.length > 23 ){
         h2.classList.remove('hidden')
     }else if(display.value.length > 20){
         display.style.fontSize = '15px'
     }else if(display.value.length > 14) {
         display.style.fontSize = '20px'
     }else if(display.value.length > 8){
         display.style.fontSize = '30px'
     }else{
         display.style.fontSize = '50px'
     }
}