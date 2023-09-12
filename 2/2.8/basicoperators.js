//exponential operator
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2

let s = "my" + "string";
console.log(s); // mystring

let a, b, c;

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

console.log( n ); // 16

let counter = 1;
let d = ++counter; // (*)

console.log(d); // 2

let counter2 = 1;
let e = counter++; // (*) changed ++counter to counter++

console.log(e); // 1

//comma operator

let f = (1 + 2, 3 + 4);

console.log( f ); // 7 (the result of 3 + 4)