// Write a function to rotate an array by a given number of positions.
let array2 = [];
function rotate(arr , noofposition){
    for (let i = 0; i < arr.length ;i++){
        array2[(i + noofposition ) % arr.length] = arr[i];
    }
    return array2;
}

let array = [1,2,3,4,5,60];
console.log(rotate(array, 2));