// The “name” property
// Function objects contain some useable properties.

// For instance, a function’s name is accessible as the “name” property:

// function sayHi() {
//   alert("Hi");
// }

// alert(sayHi.name); // sayHi
// What’s kind of funny, the name-assigning logic is smart. It also assigns the correct name to a function even if it’s created without one, and then immediately assigned:

// let sayHi = function() {
//   alert("Hi");
// };

// alert(sayHi.name); // sayHi (there's a name!)
// It also works if the assignment is done via a default value:

// function f(sayHi = function() {}) {
//   alert(sayHi.name); // sayHi (works!)
// }

// f();
// In the specification, this feature is called a “contextual name”. If the function does not provide one, then in an assignment it is figured out from the context.

// function created inside array
let arr = [function() {}];

alert( arr[0].name ); // <empty string>
// the engine has no way to set up the right name, so there is none

// The “length” property
// There is another built-in property “length” that returns the number of function parameters, for instance:

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

// We can also add properties of our own.

// Here we add the counter property to track the total calls count:

function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times

function makeCounter() {

    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
  
  let counter = makeCounter();
  
  counter.count = 10;
//   alert( counter() ); // 10

//   Adding such a name also did not break anything.

// The function is still available as sayHi():

let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

sayHi("John"); // Hello, John

// There are two special things about the name func, that are the reasons for it:

// It allows the function to reference itself internally.
// It is not visible outside of the function.
// For instance, the function sayHi below calls itself again with "Guest" if no who is provided:

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)
// Why do we use func? Maybe just use sayHi for the nested call?

// Actually, in most cases we can:

let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest");
  }
};
//The problem with that code is that sayHi may change in the outer code. If the function gets assigned to another variable instead, the code will start to give errors:

let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Error: sayHi is not a function
  }
};

//let welcome = sayHi;
sayHi = null;

welcome(); // Error, the nested sayHi call doesn't work any more!
//That happens because the function takes sayHi from its outer lexical environment. There’s no local sayHi, so the outer variable is used. And at the moment of the call that outer sayHi is null.

// The optional name which we can put into the Function Expression is meant to solve exactly these kinds of problems.

// Let’s use it to fix our code:

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Now all fine
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (nested call works)

