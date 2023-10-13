const prompt = require('prompt-sync')();

let Number1;
let Operator;
let result = 0;

do {
  Number1 = parseFloat(prompt("Enter number: "));

  // Check for '=' operator to exit the loop
  if (Number1 === '=') {
    break;
  }

  Operator = prompt("Enter operator (+, -, *, /): ");

  // Check if the operator is valid
  if (['+', '-', '*', '/'].includes(Operator)) {
    let Number2 = parseFloat(prompt("Enter the second number: "));

    switch (Operator) {
      case '+':
        result += Number1 + Number2;
        break;
      case '-':
        result += Number1 - Number2;
        break;
      case '*':
        result += Number1 * Number2;
        break;
      case '/':
        if (Number2 === 0) {
          console.log("Division by zero is not allowed.");
        } else {
          result += Number1 / Number2;
        }
        break;
    }
  } else {
    console.log("Enter a valid operator (+, -, *, /).");
  }

  console.log("Current result: " + result);
} while (true);

console.log("Final result: " + result);