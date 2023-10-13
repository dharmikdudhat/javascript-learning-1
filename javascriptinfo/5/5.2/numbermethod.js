let billion = 1e9; //it is 1 after that 9 zeroes
let mcs = 1e-6; // five zeroes to the left from 1
123456..toString(36)//correct
Math.floor//floor value 3.14 to 3
Math.ceil//ceil value 3.14 to 4
Math.round//round value to nearest value
Math.trunc//not supported by Internet Explorer and return any number before the .
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"
let num1 = 12.36;
alert( num.toFixed(1) ); // "12.4"
alert( isNaN(NaN) ); // true
alert( isNaN("str") );//true
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
alert( parseInt('a123') ); // NaN, the first symbol stops the process
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024