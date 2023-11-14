
// variables to carry out an operation

let a = 0;
let b = 0;
let operator = ""

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
