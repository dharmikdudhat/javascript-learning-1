// Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.

// For instance:

// if (true) {
//   var test = true; // use "var" instead of "let"
// }

// alert(test); // true, the variable lives after if

// As var ignores code blocks, we’ve got a global variable test.

// If we used let test instead of var test, then the variable would only be visible inside if:

// if (true) {
//   let test = true; // use "let"
// }

// alert(test); // ReferenceError: test is not defined

// If a code block is inside a function, then var becomes a function-level variable:

// function sayHi() {
//   if (true) {
//     var phrase = "Hello";
//   }

//   alert(phrase); // works
// }

// sayHi();
// alert(phrase); // ReferenceError: phrase is not defined

// If we declare the same variable with let twice in the same scope, that’s an error:

// let user;
// let user; // SyntaxError: 'user' has already been declared
// With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:

// var user = "Pete";

// var user = "John"; // this "var" does nothing (already declared)
// // ...it doesn't trigger an error

// alert(user); // John

// function sayHi() {
//     var phrase; // declaration works at the start...
  
//     alert(phrase); // undefined
  
//     phrase = "Hello"; // ...assignment - when the execution reaches it.
//   }
  
//   sayHi();

// (function() {

//     var message = "Hello";
  
//     alert(message); // Hello
  
//   })();

// // Tries to declare and immediately call a function
// function() { // <-- SyntaxError: Function statements require a function name

//     var message = "Hello";
  
//     alert(message); // Hello
  
//   }();

// Ways to create IIFE

// (function() {
//     alert("Parentheses around the function");
//   })();
  
//   (function() {
//     alert("Parentheses around the whole thing");
//   }());
  
//   !function() {
//     alert("Bitwise NOT operator starts the expression");
//   }();
  
//   +function() {
//     alert("Unary plus starts the expression");
//   }();