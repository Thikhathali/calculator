/* FUNCTIONS */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

/* VARIABLES */
let log = console.log;
let firstOperand;
let secondOperand;
let operator;

const operate = (firstOperand,  secondOperand) => {
    operator = multiply(firstOperand, secondOperand);
    return operator;
}

log(operate(5, 2));