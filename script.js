//Why can I still add numbers after an operation? This is the next job

// variables to carry out an operation

let a = 0;
let b = 0;
let operator = 0;
let operatorFlag = 0 //true if operator has already been pressed
let runningTotal = 0;
let equalFlag = 0; //true if equal has been pressed once
let requireInput = 1; //use flag to make sure pressing equals doesn't crash calculator
let operationsNumber = 0; //use to stop pressing equal on a number crashing calculator



// Display and button query selectors

let displayContent = '';
let display = document.querySelector('#displayText');
let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator');
let equalBtn = document.querySelector('#equals');
let acBtn = document.querySelector('#ac');
let pointBtn = document.querySelector('#buttonPeriod');
let backBtn = document.querySelector('.backspace');


// Backspace button functionality - deletes last char pressed

backBtn.addEventListener('click', () =>{
    if(displayContent.length === 0){

    } else if (displayContent.length ===1){
        display.textContent = '0';
        displayContent = '';
    } else {
    displayContent = displayContent.slice(0, -1);
    display.textContent = displayContent; 
    }
})

// Disable point button when pressed once

pointBtn.addEventListener('click', () =>{ 
    pointBtn.disabled = true; 
})

// Create AC button functionality, resets everything to starting position

acBtn.addEventListener('click', () => {
    equalFlag = 0;
    operatorFlag = 0;
    displayContent = '';
    a = 0;
    b = 0;
    operator = 0;
    display.textContent = 0; 
    runningTotal = 0;
    requireInput = 1;
    operationsNumber = 0;
})



// requireInput is to stop you crashing calculator by just pressing equals
equalBtn.addEventListener('click', () => {
    //if input required and no operators chosen, nothing executes
    if (requireInput || operationsNumber<1){
    } else if (!equalFlag){
        //If equals has not already been pressed
        equalFlag = 1;
        b = displayContent;
        a = Number(a);
        b = Number(b);
        if (operator === "/" && b===0){
            alert("Nice try, please try again");
            acBtn.click();
        } else {
        a = operate(a, b, operator);
        displayContent = a;
        display.textContent = a; 
        operatorFlag = 0;}
        pointBtn.disabled = false;
    } else if (equalFlag) {
        //If equal has already been pressed carry out same operation
        a = operate(a, b, operator);
        display.textContent = a; 
        displayContent = a;
        operatorFlag = 0;
        pointBtn.disabled = false;
    }

})


// Act when operator button pressed
 
operatorBtns.forEach(function (operatorBtn){
    operatorBtn.addEventListener('click', () => {
        operatorPress(operatorBtn);
})
})

// Update display if someone presses a number, hold total in displayContent

numberBtns.forEach(function (numberBtn){
    numberBtn.addEventListener('click', () => {
        numberPress(numberBtn);
/*      This functionality used to be in the event listener but had to be
        seperated out to allow for keyboard control

         console.log(numberBtn);
        
        equalFlag = 0;
        displayContent += numberBtn.textContent;
        display.textContent = displayContent;
        requireInput = 0; */
    })
})

//works for screen click or key press

function operatorPress(operatorBtn){
 // Checks if operator has already been pressed, if true, carries out operation

 if (requireInput){
    operator = operatorBtn.textContent;
    operationsNumber++;
    pointBtn.disabled = false;
} else if (operatorFlag){
    equalFlag = 0;
    b = displayContent;
    a = Number(a);
    b = Number(b);
    if (operator === '/' && b ===0){
        alert("Nice try, please try again");
        acBtn.click();
    } else {
    a = operate(a, b, operator);
    console.log(a);
    displayContent = '';
    display.textContent = a;
    operator = operatorBtn.textContent; 
    operationsNumber++;
    }
    pointBtn.disabled = false;
} else if (!operatorFlag){
    equalFlag = 0;
    a = displayContent;
    runningTotal = a;
    operator = operatorBtn.textContent;
    displayContent = '';
    display.textContent = a;
    operatorFlag = 1;
    requireInput = 1;
    operationsNumber++;
    pointBtn.disabled = false;
} 
}

//Function works for screen click or key press
function numberPress(numberBtn){
    if (equalFlag){
        acBtn.click();
    }
    console.log(numberBtn);
        
    equalFlag = 0;
    displayContent += numberBtn.textContent;
    display.textContent = displayContent;
    requireInput = 0;
}

//listens for keydown and then passes it to function 

// now let's work on the operators...
window.addEventListener('keydown', (e) => {
    let hasNumber = /\d/; 
    let keyPress = ''  
    let key = e.key;
    console.log(key);
    if (hasNumber.test(key)){
        keyPress = `button${e.key}`; 
        let buttonPress = document.querySelector(`#${keyPress}`);
        numberPress(buttonPress);
    } else if (key === '.'){ 
        keyPress = 'buttonPeriod';
        let buttonPress = document.querySelector(`#buttonPeriod`);
        numberPress(buttonPress);
    } else if (key === '*' || key === '/' || key === '+' || key === '-'){
        switch (key){
        case '*':
            keyPress = 'multiply';
            break;
        case '+':
            keyPress = 'plus';
            break;
        case '-':
            keyPress = 'minus';
            break;
        case '/':
            keyPress = 'divide';
            break;
    }
        let buttonPress = document.querySelector(`#${keyPress}`);
        operatorPress(buttonPress);
    }
})
    


    

// operator function

function operate(a, b, operator){
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

// operation functions
function add(a, b){
    return a + b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a * b;
};

function divide (a, b){
    return a / b;
};
