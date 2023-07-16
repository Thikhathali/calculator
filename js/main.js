$(() =>{
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

    const operate = (firstOperand,  operator, secondOperand) => {
        switch(operator) {
            case add:
                return add(firstOperand, secondOperand);
            case subtract:
                return subtract(firstOperand, secondOperand);
            case multiply:
                return multiply(firstOperand, secondOperand);
            default:
                return divide(firstOperand, secondOperand);
        }
    }

    log(operate(5, subtract, 2));

    let $outputVal = $('.display');
    let $buttonsVal = $('button');
    let updateDisplay = '';

    $buttonsVal.on('click', function(){
        let selectedVal = $(this).text();

        if(Number(selectedVal)) {
            updateDisplay += selectedVal;
        } else if(selectedVal === 'x' || selectedVal === '/' || 
            selectedVal === '-' || selectedVal === '+' ) {
            if(operator === selectedVal) return
            operator = selectedVal;
            firstOperand = updateDisplay;
            updateDisplay = firstOperand + operator;
        } 
        $outputVal.text(updateDisplay);
    });
});