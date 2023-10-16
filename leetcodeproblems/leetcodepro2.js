let l1 = [1, 2, 3];
let l2 = [3, 4, 5];

function check(l1, l2) {
  let l3 = [];
  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      if (i == j) {
        let result = l1[i] + l2[j];
        l3.push(result);
      }
    }
  }
  return l3;
}

console.log(check(l1,l2));