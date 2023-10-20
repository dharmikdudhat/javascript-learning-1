/* You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order. */

var findLongestChain = function (pairs) {
pairs.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let pre = pairs[0][1];
  for (let i = 1; i < pairs.length; i++) {
    if (pre < pairs[i][0]) {
      count++;
      pre = pairs[i][1];
    }
  }
  return count;
};

let pairs = [
  [1, 2],
  [2, 3],
  [3, 4],
];
console.log(findLongestChain(pairs));
