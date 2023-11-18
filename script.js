
// variables to carry out an operation

let a = 0;
let b = 0;
let operator = "";

// Display variable

let displayContent = '';
let display = document.querySelector('#displayText');
let numberBtns = document.querySelectorAll('.number');



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
