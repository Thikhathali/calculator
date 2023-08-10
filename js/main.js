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
    let specialChar;
    let zero;

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

    let $outputVal = $('.display .res');
    let $expressionVal = $('.display .exp');
    let $buttonsVal = $('button');
    let updateDisplay = '';
    let res = '';

    $buttonsVal.on('click', function(){
        let selectedVal = $(this).text();

        if(selectedVal === 'C')  window.location.reload()

        if(res !== '' && !Number(selectedVal) && selectedVal !== '=' &&
        selectedVal !== '.') {
            specialChar = '';
            zero = '';
            firstOperand = res;
            operator = selectedVal;
            updateDisplay = firstOperand + operator;
            $expressionVal.text(updateDisplay);
        }
        else if(Number(selectedVal) || selectedVal === '0' || selectedVal
        === '.') {
            if(specialChar === selectedVal || zero === selectedVal ) return

            if(selectedVal === '.') {
                specialChar = selectedVal;
            } else if (selectedVal === '0') {
                zero = selectedVal;
            }
            updateDisplay += selectedVal;
            $outputVal.text(updateDisplay);
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

            specialChar = '';
            zero = '';
            operator = selectedVal;
            firstOperand = updateDisplay;
            updateDisplay = firstOperand + operator;
            $expressionVal.text(updateDisplay);
        }
        
        if(operator && Number(updateDisplay.split(operator).at(-1)) || 
        updateDisplay.split(operator).at(-1) === '0') {
            secondOperand = updateDisplay.split(operator).at(-1);
            $outputVal.text(secondOperand);
        }

        if(selectedVal === '=' && operator && secondOperand) {
            $expressionVal.text(updateDisplay + selectedVal).hide().slideDown();
            
            if(operator === '/' && secondOperand === '0') {
                updateDisplay = "0 divisor error!"
            } else {
                res = operate(Number.parseFloat(firstOperand), operator,
                Number.parseFloat(secondOperand));
               updateDisplay = res;
               secondOperand = '';
            }
            $outputVal.text(updateDisplay).hide().fadeIn(1100);
        }
    });
});