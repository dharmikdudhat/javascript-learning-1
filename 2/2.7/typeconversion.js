let value = true;
console.log(typeof value); 

value = String(value); //used to convert the value of any type to string
console.log(typeof value);

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num);

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") );//false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)