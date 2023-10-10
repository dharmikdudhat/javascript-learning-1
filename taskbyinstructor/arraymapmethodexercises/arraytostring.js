// // 2) Take an array of numbers and make them strings
function stringItUp(arr){
    // your code here

    let navo = arr.map(item => item.toString());
    return navo;
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]