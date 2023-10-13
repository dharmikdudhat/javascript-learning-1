function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
          result.push(arr1[i]);
        }
      }
    }
    return result;
  }
  
  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
  let array2 = [1, 4, 3, 2, 5, 6];
  console.log(intersection(array1, array2));