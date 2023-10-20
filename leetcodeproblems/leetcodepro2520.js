/* Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0. */

var countDigits = function(num) {
    let truecount = 0;
        let x = num.toString();
        for (let i = 0; i < x.length; i++) {
            if (num % parseInt(x[i]) !== 0) {
            continue;
          }else{
            truecount++;
          }
        }
        return truecount;
      }  
;

let num = 10;
console.log(countDigits(num));