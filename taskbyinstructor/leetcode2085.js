function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
        
      }
      else if(arr1[i] !== arr2[j]){
        continue;
      }else{
        result.splice(i,1);
      }
    }
  }
  return result.length;
}

let array2 = [1,2], array1 = [1,2,3,4];
console.log(intersection(array1, array2));