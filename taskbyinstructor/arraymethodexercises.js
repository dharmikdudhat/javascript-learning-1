//Exercise 1: Write a function that takes an array of numbers and returns a new array containing only the even numbers

// function even(arr){
//    return arr.filter(item => item % 2 == 0);
// }

// let array1 = [1,2,3,6,4,5,7,8,9,10,11,21,23,848,68,618,68686,6,66,,661,6,6,6,987,454,86] 
// console.log(even(array1));

//Exercise 2: Write a function that takes an array of strings and returns a new array containing only the strings that start with the letter "A".

// function letterA(arr){
    
//     return arr.filter(item => item.toLowerCase().at(0) == 'a');
// }
// console.log(letterA(["dharmik" , "dhaval" , "prachi" , "abhishek" , "Abhishek"]));

//Exercise 3: Write a function that takes an array of objects and returns a new array containing only the objects that have a property named "age" and a value greater than 18.

// function agegreater(arr){
    
//          return arr.filter(item => item.age > 18);
//      }
//      console.log(agegreater([
//             {
//                 name: "Angelina Jolie",
//                 age: 80
//             },
//             {
//                 name: "Eric Jones",
//                 age: 2
//             },
//             {
//                 name: "Paris Hilton",
//                 age: 5
//             },
//             {
//                 name: "Kayne West",
//                 age: 16
//             },
//             {
//                 name: "Bob Ziroll",
//                 age: 100
//             }
//         ])); 

//Exercise 4: Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

// function sum(arr){
//     return arr.reduce(function(previuos , next){
//         return previuos + next;
//     })
// }
// console.log(sum([1,2,3,4,3,5,9,6,7,8,6,8]));

//Write a JavaScript function to check whether an input is an array or not.
// function checkarr(arr){
//     return Array.isArray(arr);
// }
// let a = "bjhdbvjvb";
// console.log(checkarr(a));

//2. Write a JavaScript function to clone an array.

// function clonearr(arr){
//     return [...arr];
// }


//write a function that gives random n elemnts from an array 
// let n = 6;
// let array1 = [1,2,3,4,5,6,7,8,9,10,11,21,23,45,56,47,33];
// function newone(arr){
//     let array2 = [];
//     for (i= 0 ;i < n;i++){
    
//     let item = arr.splice(Math.random()*arr.length, 1); 
//     check(item);
//     function check(item){
       
//         if(array2.includes(item)){
//             check(item);
//         }else{
//              array2.push(item);
//         }
//     }
// }

//  return array2;
// }

// console.log(newone(array1));

//3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array

// function firstelements(arr){
//     return arr.splice(0 ,n);
// }
// let n = 5;
// let array1 = [1,2,3,4,5,6,7,8,9];
// console.log(firstelements(array1));

//Write a JavaScript function to get the any random element of an array. Passing the parameter 'n' will return the first 'n' elements of the array
// function firstelements(arr){
//     return arr.splice(Math.random()*arr.length ,n);
// }
// let n = 5;
// let array1 = [1,2,3,4,5,6,7,8,9];
// console.log(firstelements(array1));

//4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// let n = 4;
// function lastelement(arr){
//     return arr.slice(-n)
// }
// let array1 = [1,2,3,4,5,6,7,8,9];
// console.log(lastelement(array1));


//1. Write a function to find the unique elements in an array.

// function uniuqe(arr){
//     return [...new Set(arr)];
// }
// let array1 = [1,2,3,4,5,5,3,5,33,2,3,4,2,1,5,2,6,7,8,9];
//  console.log(uniuqe(array1));


//3. Write a function to find the difference between two arrays.

// function findDifference(array1, array2) {
//     return array1.filter((element) => !array2.includes(element));
//   }

//   let array1 = [1,2,3,4,5,5,3,5,33,2,3,4,2,1,5,2,6,7,8,9];
//   let array2 = [1,2,3,4,5,6,6,7,8,4,9];
//  console.log(findDifference(array1,array2));

//4. Write a function to remove all empty elements from an array.

// function empty(arr){
//     return arr.filter(Boolean);
// }
// let array1 = ['','','',2,4,5,,6,7,{},[],NaN,undefined,null];
// console.log(empty(array1));

//5. Write a function to sort an array of objects based on a given property.

// function sortObjectsByProperty(array, property) {
//     array.sort((a, b) => a[property] - b[property]);
//   } 
