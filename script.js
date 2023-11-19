
// variables to carry out an operation

let a = 0;
let b = 0;
let operator = 0;
let runningTotal = 0;


// Display variable and button query selectors

let displayContent = '';
let display = document.querySelector('#displayText');
let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator');


// Act when operator button pressed

// something is very broken here... 
operatorBtns.forEach(function (operatorBtn){
    operatorBtn.addEventListener('click', () => {
    if (operator){
        b = displayContent;
        a = Number(a);
        b = Number(b);
        a = operate(a, b, operator);
        console.log(a);
        displayContent = '';
        display.textContent = a;
        operator = operatorBtn.textContent; 
    } else {
        a = displayContent;
        runningTotal = a;
        operator = operatorBtn.textContent;
        displayContent = '';
        display.textContent = 0; 
    }
})
})

// Update display if someone presses a number, hold total in displayContent

numberBtns.forEach(function (numberBtn){
    numberBtn.addEventListener('click', () => {
        displayContent += numberBtn.textContent;
        display.textContent = displayContent;
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
