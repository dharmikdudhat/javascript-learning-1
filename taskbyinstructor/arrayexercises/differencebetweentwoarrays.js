//3. Write a function to find the difference between two arrays.

function findDifference(array1, array2) {
    return array1.filter((element) => !array2.includes(element));
  }

  let array1 = [1,2,3,4,5,5,3,5,33,2,3,4,2,1,5,2,6,7,8,9];
  let array2 = [1,2,3,4,5,6,6,7,8,4,9];
 console.log(findDifference(array1,array2));