/* Given an integer x, return true if x is a 
palindrome
, and false otherwise. */

var isPalindrome = function (x) {
  let temp = x;
  let sum = 0;
  if (x < 0) {
    return false;
  }
  while (x != 0) {
    sum = sum * 10 + (x % 10);
    x = Math.floor( x / 10);
  }
  return temp == sum;
};

console.log(isPalindrome(121));
