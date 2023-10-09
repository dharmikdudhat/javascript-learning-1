// Write a function to find the kth largest element in an array.

function klargest(arr , k){
    arr.sort((a,b) => b - a);
    return arr[k-1];
}
let array = [1,2,3,5,7,65,87,45,98,64,32];
console.log(klargest(array,4));
