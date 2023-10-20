/* A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

  */

var selfDividingNumbers = function (left, right) {
  let result = [];
  function selfDividechecker(num) {
    let x = num.toString();
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "0") {
        return false;
      } else if (num % parseInt(x[i]) !== 0) {
        return false;
      }
    }
    return true;
  }
  while (left <= right) {
    if (selfDividechecker(left)) {
      result.push(left);
    }
    left++;
  }
  return result;
};

let left = 1,
  right = 22;
console.log(selfDividingNumbers(left, right));
