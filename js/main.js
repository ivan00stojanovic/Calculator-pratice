const display = document.querySelector('.display')
const history = document.querySelector('.history')
const numbers = document.querySelectorAll('.btn-number')
const operators = document.querySelectorAll('.btn-operator')
const clear = document.querySelector('.btn-clear-all')
const equals = document.querySelector('.btn-equals')
const brisanje = document.querySelector('.btn-brisanje')
const h2 = document.querySelector('h2')



numbers.forEach(num => num.addEventListener('click', ()=>{
    if(display.value == 0  ){
        display.value = num.innerText
    }else if(num.innerText == '.' && display.value[display.value.length -1] === '.'){
        return
    }else{
        display.value += num.innerText 
    }
    reduceFont()
}))
operators.forEach(operator => operator.addEventListener('click', ()=>{
    if(display.value == 0 && operator.innerText === '-'){
            display.value = operator.innerText + ' '
    }else if(display.value[display.value.length - 1] == operator.innerText){

    }else{
        display.value += ' ' +operator.innerText+ ' '
    }
    reduceFont()
}))
clear.addEventListener('click', ()=>{
    display.value = 0
    display.style.fontSize = '50px'
    h2.classList.add('hidden')
})

brisanje.addEventListener('click', ()=>{
    display.value = display.value.slice(0, display.value.length-1)
    if(display.value.length < 25) h2.classList.add('hidden')
})

equals.addEventListener('click',displayUpdate() )
function displayUpdate(){  
}

function reduceFont(){
    if(display.value.length > 24 ){
        h2.classList.remove('hidden')
    }else if(display.value.length > 21){
        display.style.fontSize = '15px'
    }else if(display.value.length > 15) {
        display.style.fontSize = '20px'
    }else if(display.value.length > 9){
        display.style.fontSize = '30px'
    }else if(display.value.length > 21){
        display.style.fontSize = '15px'
    }else{
        display.style.fontSize = '50px'
    }
}
