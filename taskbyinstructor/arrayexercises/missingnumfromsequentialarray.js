

// Write a function to find the missing number in an array of sequential numbers.

function missing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1] - 1) {
        console.log(arr[i] + 1);
       }// else if (arr[i] !== arr[i + 2] - 2) {
      //   console.log(arr[i] + 2);
      // }
    }
  }
  let array1 = [1, 2, 3, 5, 7, 8, 9, 10, 13, 14];
  console.log(missing(array1));