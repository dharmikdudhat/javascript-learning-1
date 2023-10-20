/* A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false. */

var checkPerfectNumber = function (num) {
  let x = [];
  for (let i = 1; i < num - 1; i++) {
    if (num % i == 0) {
      x.push(i);
    }
  }
  console.log(x);

  function sum(arr) {
    return arr.reduce(function (previuos, next) {
      return previuos + next;
    }, 0);
  }
 return sum(x) === num;
};

let num = 28;
console.log(checkPerfectNumber(num));
