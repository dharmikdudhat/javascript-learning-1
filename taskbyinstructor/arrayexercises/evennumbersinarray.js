//Exercise 1: Write a function that takes an array of numbers and returns a new array containing only the even numbers

function even(arr){
   return arr.filter(item => item % 2 == 0);
}

let array1 = [1,2,3,6,4,5,7,8,9,10,11,21,23,848,68,618,68686,6,66,,661,6,6,6,987,454,86]
console.log(even(array1));