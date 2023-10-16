const prompt = require("prompt-sync")();
let currentresult = 0;

function check(operator, num12, num21) {
  return operator == "+"
    ? num12 + num21
    : operator == "-"
    ? num12 - num21
    : operator == "*"
    ? num12 * num21
    : num21 == 0
    ? "number can not be 0"
    : operator == "/"
    ? num12 / num21
    : "Enter a valid operator (+, -, *, /).";
}

let Number1 = parseFloat(prompt("Enter number: "));
Operator = prompt("Enter operator (+, -, *, /): ");
// Check if the operator is valid
if (Operator == "=") {
  return result;
}
if (["+", "-", "*", "/"].includes(Operator)) {
  let Number2 = parseFloat(prompt("Enter the second number: "));
  if (isNaN(Number2)) {
    console.log("Enter a valid second number.");
  } else {
    currentresult = check(Operator, Number1, Number2);
  }
} else {
  console.log("Enter a valid operator (+, -, *, /).");
}

do {
  let Operator = prompt("Enter operator (+, -, *, /, =): ");
  if (Operator === "=") {
    break; // Exit the loop when "=" is entered
  }
  if (["+", "-", "*", "/"].includes(Operator)) {
    let Number2 = parseFloat(prompt("Enter the number: "));
    if (isNaN(Number2)) {
      console.log("Enter a valid number.");
    } else {
      currentresult = check(Operator, currentresult, Number2);
    }
  } else {
    console.log("Enter a valid operator (+, -, *, /, =).");
  }
  console.log("Current result: " + currentresult);
} while (true);

console.log("Final result: " + currentresult);
