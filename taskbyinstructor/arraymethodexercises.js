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

//its something else code if you wannna know where to place the the 4 its not anywhere else it is just below from here so check it out
let arr1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function newine(arr){
    let x = 0, y = arr.length -1;
    while(x < y){
        for (let i = 0; i < y - x ; i++){
            let t = x;
            let b = y;
            let tl = arr[t][x + i];
             arr[t][x + i] = arr[y - i][x];
             arr[y - i][x] = arr[b][y - i];
             arr[y][y - i] = arr[t + i][y];
             arr[t + i][y] = tl;
        }
        x++;
        y--;
    }
}

console.log(newine(arr1));