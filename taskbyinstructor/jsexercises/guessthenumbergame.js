// Write a JavaScript p'rogram where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
const prompt = require("prompt-sync")();
//console.log("Please guess a number between 0 to 10");
let x = prompt("Guess the number : ", "dtbrd");
//let x = prompt();
let y = Math.ceil(Math.random() * 10);
function guess(a,b){


if (a == b) {
  console.log("Good Work");
} else {
  x = prompt("not matched try again : ");  
  guess(x,y);
}
}
guess(x,y);

//console.log(x);
