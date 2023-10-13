function intersection(words1, words2) {
  let result = [];
  let count = 0;
  function duplicate(arr) {
    let aary2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (!aary2.includes(arr[i])) {
        aary2.push(arr[i]);
      } else {
        console.log(arr[i]);
      }
    }
    return aary2;
  }
  let x = duplicate(words1);
  let y = duplicate(words2);

  for (let i = 0; i < words1.length; i++) {
    for (let j = 0; j < words2.length; j++) {
      if (words1[i] === words2[j] && !result.includes(words1[i])) {
        result.push(words1[i]);
        count++;
      } else if (x.includes(words1[i]) && y.includes(words1[i]) ) {
        result.splice(i, 1);
        count--;
      }
    }
  }
  return count;
}

let array2 = ["rsvyxfkbmllnsvfmiskouagjpymub", "xqadhorgvguprqp"],
  array1 = [
    "rsvyxfkbmllnsvfmiskouagjpymub",
    "xqadhorgvguprqp",
    "wvtjffkonflbmdmw",
    "olekom",
    "tcnrpyshlqvsisnk",
    "jqwigwkehsvyylrixvbmrq",
    "irrjybaruytqixlozgtb",
    "ebsxabicklczdjoqahxybuvav",
    "k",
    "hoayhbdmxipzqxkkarjcfszgaolxo",
  ];
console.log(intersection(array1, array2));

/* for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
        
      }
      else if(arr1[i] !== arr2[j]){
        continue;
      }else{
        result.splice(i,1);
      } */
// }
