function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]  /* && !result.includes(arr1[i]) */ ) {
          result.push(arr1[i]);
          arr2.splice(j,1);
          break;
        }
      }
    }
    return result;
  }
  
  let array1 = [1, 2,2,1];
  let array2 = [2,2];
  console.log(intersection(array1, array2));