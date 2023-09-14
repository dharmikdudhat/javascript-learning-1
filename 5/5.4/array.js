let fruits = ["Apple", "Orange", "Plum"];
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

alert( fruits[fruits.length-1] );// Plum
// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum
alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange
alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear
fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear
for (let i = 0; i < arr.length; i++) {
    alert( arr[i] );
  }
  let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

let arr1 = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true