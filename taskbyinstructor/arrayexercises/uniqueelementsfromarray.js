//1. Write a function to find the unique elements in an array.

function uniuqe(arr){
    return [...new Set(arr)];
}
let array1 = [1,2,3,4,5,5,3,5,33,2,3,4,2,1,5,2,6,7,8,9];
 console.log(uniuqe(array1));


 // Write a function to find the unique elements in an array, preserving the original order.

function duplicate(arr) {
  let aary2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!aary2.includes(arr[i])) {
      aary2.push(arr[i]);
    } 
  }
  return aary2;
}

let array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];
console.log(duplicate(array12));
