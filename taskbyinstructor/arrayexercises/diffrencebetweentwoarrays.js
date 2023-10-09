// Write a function to find the difference between two arrays, preserving the original order.

function difference(arra1, arra2) {
  let aaa = [];
  for (let i = 0; i < arra1.length; i++) {
    
      if (arra2.indexOf(arra1[i]) === -1) {
        aaa.push(arra1[i]);
      
    }
  }
  return aaa;
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
let array2 = [1, 4, 3, 2, 5, 6];
console.log(difference(array1, array2));