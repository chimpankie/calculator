
// There is still an issue with pressing equals when you've entered just one number

// variables to carry out an operation

let a = 0;
let b = 0;
let operator = 0;
let operatorFlag = 0 //true if operator has already been pressed
let runningTotal = 0;
let equalFlag = 0; //true if equal has been pressed once
let requireInput = 1; //use flag to make sure pressing equals doesn't crash calculator
let operationsNumber = 0;



// Display variable and button query selectors

let displayContent = '';
let display = document.querySelector('#displayText');
let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator');
let equalBtn = document.querySelector('#equals');
let acBtn = document.querySelector('#ac');

// Create AC button functionality

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



// requireInput is to stop you crashing calculator by just pressing enter
equalBtn.addEventListener('click', () => {
    if (requireInput || operationsNumber<1){

    } else if (operator === "/" && b === 0) {
        alert("Nice try, please try again");
        acBtn.click();
    } else if (!equalFlag){
        equalFlag = 1;
        b = displayContent;
        a = Number(a);
        b = Number(b);
        a = operate(a, b, operator);
        displayContent = a;
        display.textContent = a; 
        operatorFlag = 0;
    } else if (equalFlag) {
        a = operate(a, b, operator);
        display.textContent = a; 
        displayContent = a;
        operatorFlag = 0;
    }

})


// Act when operator button pressed
 
operatorBtns.forEach(function (operatorBtn){
    operatorBtn.addEventListener('click', () => {
    // Checks if operator has already been pressed, if true, carries out operation

    if (requireInput){
        operator = operatorBtn.textContent;
        operationsNumber++;
    } else if (operatorFlag){
        if (operator === '/' && b === 0){
            alert("Nice try, please try again");
            acBtn.click();
        } else {
        equalFlag = 0;
        b = displayContent;
        a = Number(a);
        b = Number(b);
        a = operate(a, b, operator);
        console.log(a);
        displayContent = '';
        display.textContent = a;
        operator = operatorBtn.textContent; 
        operationsNumber++;
        }
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
    } 
})
})

// Update display if someone presses a number, hold total in displayContent

numberBtns.forEach(function (numberBtn){
    numberBtn.addEventListener('click', () => {
        equalFlag = 0;
        displayContent += numberBtn.textContent;
        display.textContent = displayContent;
        requireInput = 0;
    })
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
