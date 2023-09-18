// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// Make 3 solution variants:

// Using a for loop.

// function sumTo(n){
//     let sum = 0;
//     for (let i = 0; i <= n; i++){
//         sum += i;
//     }
//     console.log(sum);
// }

// sumTo(100);
// sumTo(50);
// sumTo(10);

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

// function sumTo(x , n){
//     return n == 0 ? x : (x + sumTo(x, n - 1));
   
// }

// sumTo(0, 100);
// sumTo(0, 50);
// sumTo(0, 10);


// Using the arithmetic progression formula.

function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
  console.log( sumTo(100) );
