// Write a function to find the pairs of elements in an array that sum to a given value.

function sum(array , sumtofind){
    for(let i = 0; i < array.length ; i++){
        for( let j = 1;j< array.length;j++){
            if(array[i] + array[j] === sumtofind){
                console.log(array[i],array[j]);
            }
        }
        // let k = sumtofind - array[i];
        // if (array.includes(k)){
        //     console.log(i,k);
        //  }//else{
        //     console.log("no such element with that sum exists");
        // }
    }

}

let arr = [2,3,4,5,6];
let x = arr.sort(( a, b) => a - b);
console.log(sum(arr , 8));