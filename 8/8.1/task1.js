// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)unidentified
//There should be 3 answers.