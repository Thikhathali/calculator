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

    const operate = (firstOperand, operator, secondOperand) => {
        switch(operator) {
            case '+':
                return add(firstOperand, secondOperand);
            case '-':
                return subtract(firstOperand, secondOperand);
            case 'x':
                return multiply(firstOperand, secondOperand);
            default:
                return divide(firstOperand, secondOperand);
        }
    }

    let $outputVal = $('.display');
    let $buttonsVal = $('button');
    let updateDisplay = '';
    let res = '';

    $buttonsVal.on('click', function(){
        let selectedVal = $(this).text();

        if(selectedVal === 'C')  window.location.reload()

        if(res !== '' && !Number(selectedVal) && selectedVal !== '=') {
            firstOperand = res;
            operator = selectedVal;
            updateDisplay = firstOperand + operator;
        }
        else if(Number(selectedVal) || selectedVal === '0' || selectedVal
        === '.') {
            updateDisplay += selectedVal;
        } 
        else if(selectedVal === 'x' || selectedVal === '/' || 
            selectedVal === '-' || selectedVal === '+' ) {

            //Select operator once
            if(operator === selectedVal) return

            //Update new operator when selected again 
            if(operator){
                operator = '';
                updateDisplay = firstOperand + operator;
            } 

            operator = selectedVal;
            firstOperand = updateDisplay;
            updateDisplay = firstOperand + operator;
        }
        
        if(operator && Number(updateDisplay.split(operator).at(-1))) {
            secondOperand = Number(updateDisplay.split(operator).at(-1));
        }

        if(selectedVal === '=' && operator && secondOperand) {
            log(updateDisplay);
             res = operate(Number.parseFloat(firstOperand), operator,
             Number.parseFloat(secondOperand));
            updateDisplay = res;
            secondOperand = '';
        }
        $outputVal.text(updateDisplay);
    });
});