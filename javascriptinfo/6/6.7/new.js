//let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3

let sayHi = new Function('alert("Hello")');

sayHi(); // Hello

// All previous declarations required us, programmers, to write the function code in the script.

// But new Function allows to turn any string into a function. For example, we can receive a new function from a server and then execute it:

let str = "receive the code from a server dynamically ";

let func = new Function(str);
func();
//It is used in very specific cases, like when we receive code from a server, or to dynamically compile a function from a template, in complex web-applications.

function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
  
  getFunc()(); // error: value is not defined
 // Compare it with the regular behavior:
  
  function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };
  
    return func;
  }
  
  getFunc()(); // "test", from the Lexical Environment of getFunc