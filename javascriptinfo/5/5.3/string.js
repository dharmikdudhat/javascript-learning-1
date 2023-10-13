function sum(a, b) {
    return a + b;
  }
  
console.log(`1 + 2 = ${sum(1, 2)}.`); 
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); 
alert( `My\n`.length ); // 3
let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );//So .at(-1) means the last character, and .at(-2) is the one before it, etc.

//The square brackets always return undefined for negative indexes, for instance:
let str1 = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
let str3 = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

let str4 = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
let str5 = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

let str6 = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'

let str7 = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

let str8 = "stringify";
alert( str.substr(2, 4) );
alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters

//slice(start, end)	from start to end (not including end)	allows negatives
//substring(start, end)	between start and end (not including end)	negative values mean 0
//substr(start, length)	from start get length characters	allows negative start

alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

//str.trim() – removes (“trims”) spaces from the beginning and end of the string.
//str.repeat(n) – repeats the string n times.