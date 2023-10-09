//3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array

function firstelements(arr){
    return arr.splice(0 ,n);
}
let n = 5;
let array1 = [1,2,3,4,5,6,7,8,9];
console.log(firstelements(array1));