/*const display = document.querySelector('.display')
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
let operatorCounter = 0


numbers.forEach(num => num.addEventListener('click', ()=>{
    if(display.value == 0  ){
        display.value = num.innerText
        holder1.push(Number(num.innerText))
        operatorCounter++
    }else if(operatorCounter === 1){
        display.value = num.innerText
        holder2.push(Number(num.innerText))
        operatorCounter++
    }else if(operatorCounter === 2){
        holder1 = holder1.join('')
        holder1 = parseFloat(holder1)
        holder2 = holder2.join('')
        holder2 = parseFloat(holder2)
        holder1 += holder2
        holder2 = []
    }else if(num.innerText == '.' && display.value[display.value.length -1] === '.'){
        return
    }else{
        display.value += num.innerText 
        holder1.push(Number(num.innerText))
    }
    reduceFont()
}))
operators.forEach(operator => operator.addEventListener('click', ()=>{
    if(display.value == 0 && operator.innerText === '-'){
            display.value = operator.innerText
    }else if(display.value[display.value.length - 1] == operator.innerText){

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
    reduceFont()
})

equals.addEventListener('click', () =>{

    //let holder = 
    //history.innerText = display.value + "="
    //historyArr = history.innerText.split('')
    //for(let i = 0; i < history.innerText.length; i++){
    //    if(historyArr[i] == operators || historyArr[i] == equals){
    //                                                              //823+
    //    }
    //    if(!isNaN(historyArr[i])){
    //        historyArr[i] = Number(historyArr[i])
    //    }
    //
    //}
    //console.log(historyArr)
})

function reduceFont(){
    if(display.value.length > 24 ){
        h2.classList.remove('hidden')
    }else if(display.value.length > 21){
        display.style.fontSize = '15px'
    }else if(display.value.length > 15) {
        display.style.fontSize = '20px'
    }else if(display.value.length > 9){
        display.style.fontSize = '30px'
    }else{
        display.style.fontSize = '50px'
    }
}

*/
 const display = document.querySelector('.numbers')
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
 
 numbers.forEach(num => num.addEventListener('click', ()=>{

     if((display.value == 0 || display.value == '') && operatorCounter == 0){

        display.value = num.innerText
        holder1.push(Number(num.innerText))

     }else if(num.innerText == '.' && display.value[display.value.length -1] === '.'){
         return

     }else if(operatorCounter == 0 ){

        display.value += num.innerText 
        holder1.push(Number(num.innerText))

     }else if(operatorCounter == 1){

        display.value += num.innerText
        holder2.push(Number(num.innerText))

     }else if(operatorCounter >= 2){

        display.value += num.innerText
        holder2.push(Number(num.innerText))

     }

     reduceFont()
 }))
 operators.forEach(operator => operator.addEventListener('click', ()=>{
    console.log(history.innerText)
    if(display.value == 0 && operator.innerText === '-'){        // PRVI KLIK
           
        operatorBox.innerText = operator.innerText
        //operatorCounter++
        holder1.push('-')
    }else if(display.value[display.value.length - 1] == operator.innerText){

    }else if(operatorCounter > 0){

        holder1 = (String(eval(Number(holder1.join('')) + symbol + Number(holder2.join(''))))).split('')
        history.innerText = holder1.join('')
        symbol = operator.innerText
        display.value = ''
        operatorBox.innerText = operator.innerText
        operatorCounter++
        holder2 = []


    }else{    // DRUGI KLIK
    
        operatorCounter++  
        history.innerText = eval(Number(holder1.join(''))  + symbol + Number(holder2.join('')))
        holder2 = []                                        
        symbol = ''
        operatorBox.innerText = operator.innerText
        symbol = operator.innerText
        display.value = ''
        
    }
    console.log('holder1 = ' +holder1)
    console.log('holder2 = ' +holder2)
    reduceFont()
}))

clear.addEventListener('click', ()=>{

    display.value = 0
    display.style.fontSize = '50px'
    h2.classList.add('hidden')
    history.innerText = ''
    operatorCounter = 0
    holder1 = []
    holder2 = []
    operatorBox.innerText = ''

})
 
brisanje.addEventListener('click', ()=>{

    display.value = display.value.slice(0, display.value.length-1)
    if(display.value.length < 25) h2.classList.add('hidden')
    if(display.value.length === 0) display.value = 0
    operatorBox.innerText = ''
    if(operatorCounter == 0) holder1.pop()
    if(operatorCounter >=1 ) holder2.pop()
    symbol = ''
    reduceFont()
//
})

 
 
equals.addEventListener('click', () =>{
    holder1 = String(eval(Number(holder1.join(''))  + symbol + Number(holder2.join('')))).split('')
    display.value = eval(Number(holder1.join('')) + symbol + Number(holder2.join('')))
    operatorBox.innerText = ''
    history.innerText = ''

    holder2 = []
    //operatorCounter = 0

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