/* Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. */

var numberOfSteps = function(num) {
    let x = 0;
    while(num !== 0){
        if(num % 2 == 0){
            num /= 2;
        }else{
            num -= 1;
        }
        x++;
    }
    return x;
};

let num1 = 32;
console.log(numberOfSteps(num1));