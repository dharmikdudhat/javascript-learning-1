// //Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//   // your code here

//   let newarr = arr.map(item => item*2);
//   return newarr;
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


// // 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//     // your code here

//     let navo = arr.map(item => item.toString());
//     return navo;
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// //3) Capitalize each of an array of names
// function capitalizeNames(arr){
//   // your code here
//   function capitalize(string) 
// {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }
//   let navo = arr.map(item => capitalize(item));
//        return navo;

// }



// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheime

//4) Make an array of strings of the names
// function namesOnly(arr){
//   // your code here
//   function name(obj){
//     return obj.name;
//   }

//   let arrray1 = arr.map(item => name(item));
//   return arrray1;
// }


// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// //5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//   // your code here
  
//       function name(obj){
//         if (obj.age > 18){
//             return `${obj.name} can go to The Matrix`;
//         }else{
//             return `${obj.name} is under age!!`;
//         }
//       }
    
//       let arrray1 = arr.map(item => name(item));
//       return arrray1;
    
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

//6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
//   // your code here
  

  

//   let h1s = arr.map(function name(obj){
//     return obj.name;
//   });
//   let h2s = arr.map(function age(obj){
//     return obj.name;
//   });
//   return h1s , h2s;
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


