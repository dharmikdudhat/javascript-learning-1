// Write a function to find the median of an array.

function median(arr){

        let mid = Math.floor(arr.length / 2);
        return arr[mid];

}

array = [1,2,3,4,5,6,7,8,9];
console.log(array.length);
console.log(median(array));
