
// Write a function to find the duplicate elements in an array.

function duplicate(arr) {
  let aary2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!aary2.includes(arr[i])) {
      aary2.push(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];
console.log(duplicate(array1));