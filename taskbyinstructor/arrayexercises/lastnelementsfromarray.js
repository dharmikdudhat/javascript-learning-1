
//4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
let n = 4;
function lastelement(arr){
    return arr.slice(-n)
}
let array1 = [1,2,3,4,5,6,7,8,9];
console.log(lastelement(array1));