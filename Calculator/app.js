const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.value;

    // Clear the calculator
    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
      resultDisplayed = false;
    }
    // If equal is clicked, evaluate the expression
    else if (value === '=') {
      if (previousInput && currentInput && operator) {
        let result = calculate(previousInput, operator, currentInput);
        display.value = result;
        currentInput = result;
        previousInput = '';
        operator = '';
        resultDisplayed = true; // Mark result as displayed so the next input can reset
      }
    }
    // If an operator is clicked, store the operator and the previous number
    else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        if (resultDisplayed) {
          resultDisplayed = false; // Reset flag after the result is displayed
        } else {
          previousInput = currentInput;
        }
        operator = value;
        currentInput = '';
      }
    }
    // If a number is clicked, append it to the current input
    else {
      if (resultDisplayed) {
        currentInput = ''; // Clear current input after a result has been displayed
        resultDisplayed = false;
      }
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Function to handle calculation
function calculate(a, operator, b) {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error';
    default:
      return '';
  }
}
