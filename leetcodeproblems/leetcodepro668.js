/* Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).

Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table. */

function check(m, n, k) {
  let arr1 = [];
  for (let i = 0; i < m; i++) {
    let arr2 = [];
    for (let j = 0; j < n; j++) {
      let ele = (i + 1) * (j + 1);
      arr2.push(ele);
    }
    arr1.push(arr2);
  }
  let x = arr1.flat(Infinity).sort((a, b) => b - a);
  return x[k - 1];
}

console.log(check(9895, 28405, 100787757));
