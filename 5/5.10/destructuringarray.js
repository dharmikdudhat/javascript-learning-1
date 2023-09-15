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

//let {height, width, title} = { title: "Menu", height: 200, width: 100

// //object destructuring 
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   // { sourceProperty: targetVariable }
//   let {width: w, height: h, title} = options;
  
//   // width -> w
//   // height -> h
//   // title -> title
  
//   alert(title);  // Menu
//   alert(w);      // 100
//   alert(h);      // 200

// let options = {
//     title: "Menu"
//   };
  
//   let {width: w = 100, height: h = 200, title} = options;
  
//   alert(title);  // Menu
//   alert(w);      // 100
//   alert(h);      // 200

// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
  
//   // title = property named title
//   // rest = object with the rest of properties
//   let {title, ...rest} = options;
  
//   // now title="Menu", rest={height: 200, width: 100}
//   alert(rest.height);  // 200
//   alert(rest.width);   // 100

// let title, width, height;

// // okay now
// ({title, width, height} = {title: "Menu", width: 200, height: 100});

// // alert( title ); // Menu

// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
  
//   // destructuring assignment split in multiple lines for clarity
//   let {
//     size: { // put size here
//       width,
//       height
//     },
//     items: [item1, item2], // assign items here
//     title = "Menu" // not present in the object (default value is used)
//   } = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200
//   alert(item1);  // Cake
//   alert(item2);  // Donut

// // we pass object to function
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
  
//   // ...and it immediately expands it to variables
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     // title, items – taken from options,
//     // width, height – defaults used
//     alert( `${title} ${width} ${height}` ); // My Menu 200 100
//     alert( items ); // Item1, Item2
//   }
  
//   showMenu(options);