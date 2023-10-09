// Write a function to find the second largest element in an array.

function second(arr){
    // let max = Math.max(...arr);
    // console.log(max);
    // arr.pop(max);
    // console.log(max);
    let x = arr.sort((a,b) => a - b );
    console.log(x[x.length - k]);
}
let k = 5;
second([1,2,3,4,5,6,3,2,1,4,3,2]);