let user = { name: "John", years: 30 };

// your code to the left side:

let {name , age = user.years , isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false