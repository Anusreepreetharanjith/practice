//business logic
var numbers = [];

function sum() {

    let result = 0;
    for (let number of numbers)
        result += number;

    return result;
}

function average() {
    return sum()/numbers.length;
    
}
function findMin() {
    let result=numbers[0];
    for(let number of numbers){
        if(number<result)
            result=number;
    }
    return result;
}

function addNumber(value){
    if(isNaN(value))
        return false;
    else{
        numbers.push(value);
        return true;
    }

}

//ui logic

let console = document.getElementById('console');
var numberTextBox = document.getElementById('number');
var numberList = document.getElementById('numberList');


function consoleWrite(message){
    //console.innerHTML += ('<p>'+message+'</p>');

    console.innerHTML +=  `<p>
                            ${message}
                           </p>`;
}

//Business Logic and UI Logic is merged.
function addToList() {
    //console.log('addToList not yet implemented');  

    var number = parseFloat(numberTextBox.value);
    if (addNumber(number)) {
       
        consoleWrite(`invalid number : ${numberTextBox.value}`);
    } else {       
        numberList.innerHTML += (`<li>${number}</li>`);       
    }

}


function displaySum(){
    consoleWrite(`sum is ${sum()}`);
}

function displayAverage(){
    consoleWrite(`average is ${average()}`);
}

function displayMin(){
    consoleWrite(`min is ${findMin()}`);
}
function refreshList() {
    //console.log('refreshList not yet implemented');
    //remove current items
    numberList.innerHTML='';
    for(var number of numbers){
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(number));
        numberList.appendChild(li);
    }
}


function reset() {
    //console.log('reset not yet implemented');
    clearDisplay();  //UI reset
    numbers=[];      //business reset
}


function clearDisplay() {
   // alert('clear function called');
   // console.log('clear not yet implemented');
   console.innerHTML='';
   numberList.innerHTML='';
   numberTextBox.value='';
}