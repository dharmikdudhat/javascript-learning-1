// Turn the object into JSON and back
// importance: 5
// Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let a = JSON.stringify(user);
console.log(a);


console.log(JSON.parse(a));
