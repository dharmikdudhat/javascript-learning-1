//Exercise 4: Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

function sum(arr){
    return arr.reduce(function(previuos , next){
        return previuos + next;
    },0)
}

console.log(sum([1,2,3,4,3,5,9,6,7,8,6,8]));

