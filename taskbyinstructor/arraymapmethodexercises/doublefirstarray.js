// //Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
  // your code here

  let newarr = arr.map(item => item*2);
  return newarr;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]