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

