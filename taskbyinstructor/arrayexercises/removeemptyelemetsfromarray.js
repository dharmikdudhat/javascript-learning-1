//4. Write a function to remove all empty elements from an array.

function empty(arr){
    return arr.filter(Boolean);
}
let array1 = ['','','',2,4,5,,6,7,{},[],NaN,undefined,null];
console.log(empty(array1));