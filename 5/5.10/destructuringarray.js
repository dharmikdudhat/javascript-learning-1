// let [firstName, surname] = "John Smith".split(' ');
// alert(firstName); // John
// alert(surname);  // Smith
// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');

// alert(user.name); // John
// alert(user.surname); // Smith
// let user = {
//     name: "John",
//     age: 30
//   };
  
//   // loop over keys-and-values
//   for (let [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`); // name:John, then age:30
//   }
// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// // Map iterates as [key, value] pairs, very convenient for destructuring
// for (let [key, value] of user) {
//   alert(`${key}:${value}`); // name:John, then age:30
// }

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// // rest is array of items, starting from the 3rd one
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// // default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(name);    // Julius (from array)
// alert(surname); // Anonymous (default used)

// runs only prompt for surname
// let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

// alert(name);    // Julius (from array)
// alert(surname); // whatever prompt gets

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   let {title, width, height} = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200

//let {height, width, title} = { title: "Menu", height: 200, width: 100 }