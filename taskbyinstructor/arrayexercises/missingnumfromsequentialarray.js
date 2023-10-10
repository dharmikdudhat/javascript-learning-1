// Write a function to find the missing number in an array of sequential numbers.

function missing(arr) {
  let arraymis = [];
  //let actual = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      let x = arr[i] - arr[i - 1];
      let y = 1;
      while (y < x) {
       
        arraymis.push(arr[i - 1] +y);
        y++;
      }
    }
  }
  return arraymis;
}
let array1 = [1, 2, 3, 5, 7, 8, 9, 10, 13, 14,15,19,25];
console.log(missing(array1));
