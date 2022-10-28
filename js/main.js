let display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')
let b;
display.value = 0
initialValue = []

buttons.forEach(x => x.addEventListener('click', function click(){
    b = x.innerHTML
    if(display.value == 0 || display.value == ''){
    value = x.innerHTML
    display.value = value
    
    console.log(x.innerHTML)
    }else if(b == 'AC'){
        display.value = 0
    }else if(b == '<i class="fa-solid fa-delete-left"></i>'){
        display.value = display.value.slice(0,display.value.length -1)
    }else if(b == '%'){
        
    }else if(b == '÷'){

    }else if(b == 'x'){

    }else if(b == '-'){
        display.value += b
    }else if(b == '+'){
           
    }else if(b == '.'){

    }else if(b == '='){
        
        initialValue = []
    }//else if(display.value){
       // initialValue = []
        //display.value += ''+Number(x.innerHTML)
        //initialValue.push(display.value)
        //console.log(display.value)
    //}
}))

/*function showNumber()  {
    let num = document.getElementsByClassName('btn').value
        document.getElementsByClassName('display').innerHTML = num;
    } */

