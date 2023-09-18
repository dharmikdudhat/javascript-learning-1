// rest parameter 
// function sumAll(...args) { // args is the name for the array
//     let sum = 0;
  
//     for (let arg of args) sum += arg;
  
//     return sum;
//   }
  
//   alert( sumAll(1) ); // 1
//   alert( sumAll(1, 2) ); // 3
//   alert( sumAll(1, 2, 3) ); // 6


// function showName() {
//     alert( arguments.length );
//     alert( arguments[0] );
//     alert( arguments[1] );
  
//     // it's iterable
//     // for(let arg of arguments) alert(arg);
//   }
  
//   // shows: 2, Julius, Caesar
//   showName("Julius", "Caesar");
  
//   // shows: 1, Ilya, undefined (no second argument)
//   showName("Ilya");

// For instance, there’s a built-in function Math.max that returns the greatest number from a list:

// alert( Math.max(3, 5, 1) ); // 5
// Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

// let arr = [3, 5, 1];

// alert( Math.max(arr) ); // NaN
// And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

// Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

// For Math.max:

// let arr = [3, 5, 1];

// alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// let arr = [1, 2, 3];

// let arrCopy = [...arr]; // spread the array into a list of parameters
//                         // then put the result into a new array

// // do the arrays have the same contents?
// alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// // are the arrays equal?
// alert(arr === arrCopy); // false (not same reference)

// // modifying our initial array does not modify the copy:
// arr.push(4);
// alert(arr); // 1, 2, 3, 4
// alert(arrCopy); // 1, 2, 3

