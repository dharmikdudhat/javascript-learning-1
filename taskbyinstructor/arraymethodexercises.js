//Exercise 1: Write a function that takes an array of numbers and returns a new array containing only the even numbers

// function even(arr){
//    return arr.filter(item => item % 2 == 0);
// }

// let array1 = [1,2,3,6,4,5,7,8,9,10,11,21,23,848,68,618,68686,6,66,,661,6,6,6,987,454,86]
// console.log(even(array1));

// Exercise 2: Write a function that takes an array of strings and returns a new array containing only the strings that start with the letter "A".

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

// Write a function to find the second largest element in an array.

// function second(arr){
//     // let max = Math.max(...arr);
//     // console.log(max);
//     // arr.pop(max);
//     // console.log(max);
//     let x = arr.sort((a,b) => a - b );
//     console.log(x[x.length - k]);
// }
// let k = 5;
// second([1,2,3,4,5,6,3,2,1,4,3,2]);


// Write a function to find the pairs of elements in an array that sum to a given value.

// function sum(array , sumtofind){
//     for(let i = 0; i < array.length ; i++){
//         for( let j = 1;j< array.length;j++){
//             if(array[i] + array[j] === sumtofind){
//                 console.log(array[i],array[j]);
//             }
//         }
//         // let k = sumtofind - array[i];
//         // if (array.includes(k)){
//         //     console.log(i,k);
//         //  }//else{
//         //     console.log("no such element with that sum exists");
//         // }
//     }
    
// }

// let arr = [2,3,4,5,6];
// let x = arr.sort(( a, b) => a - b);
// console.log(sum(arr , 8));



// Write a function to rotate an array by a given number of positions.
// let array2 = [];
// function rotate(arr , noofposition){
//     for (let i = 0; i < arr.length ;i++){
//         array2[(i + noofposition ) % arr.length] = arr[i];
//     }
//     return array2;
// }

// let array = [1,2,3,4,5,60];
// console.log(rotate(array, 2));


// Write a function to shuffle an array.

/* function suffle(arr){
    for (let i = 0;i < arr.length;i++){
        let rand = Math.floor(Math.random() * arr.length);
        if(rand !== i){
            let x = arr[i];
            arr[i] = arr[rand];
            arr[rand] = x;
        } 
    }
    return arr;
}
let array = [1,2,3,4,5,60];
console.log(suffle(array));
 */



// Write a function to find the longest common substring of two arrays.///doubt question

// function longestcommonSubstring(arr1 ,arr2){
//     let arra3 = [];
//     for(let i = 0; i < arr1.length;i++){
//         let count = 0;
       
//         for(let j = 0; j < arr2.length ; j++){
//             if (arr1[i] === arr2[j]){
//                 count++;
//             }
//         }

//         arra3.push({i : count});
//     }

//     return arra3;
// }

// let arr1 = [ "dharmik","parth"];
// let arr2 = ["dharmik" , "dharmik" , 'dharmik'];
// console.log(longestcommonSubstring(arr1,arr2));

// Write a function to find the kth largest element in an array.


// function klargest(arr , k){
//     arr.sort((a,b) => b - a);
//     return arr[k-1];
// }
// let array = [1,2,3,5,7,65,87,45,98,64,32];
// console.log(klargest(array,4));

// Write a function to find the median of an array.

// function median(arr){
   
//         let mid = Math.floor(arr.length / 2);
//         return arr[mid];
    
// }

// array = [1,2,3,4,5,6,7,8,9];
// console.log(array.length);
// console.log(median(array));


// Write a function to find the mode of an array.

function mode(arr){
    let count = 0;
    let map = new Map();
    for(let i = 0 ; i < arr.length; i++){
        for (let j = 1; j < arr.length;j++) {
          if(arr[i] === arr[j]){
            count++;
          }
        }
        if(!array1.includes(count)){
            array1.push([arr[i],count]);
        }
    } 
    console.log(array1);
    return Math.max(array1.arr[i]);
}

let arra = [1,23,3,4,5,6,2,1,3,2,1,232,1,2,3,2,1,1,2,3,2,2,3];
console.log(mode(arra)); 


// Write a function to find the missing number in an array of sequential numbers.
// Write a function to find the duplicate elements in an array.
// Write a function to find the unique elements in an array, preserving the original order.
// Write a function to find the intersection of two arrays, preserving the original order.
// Write a function to find the difference between two arrays, preserving the original order.
// // Write a function to find the most frequent element in an array.

// function mostfre(arr){

// }


// make a bmi calculator using switch case

// let weight  = 60;
// let height  = 1.25;
//  let BMI = ( weight / (height * height) );
//  console.log(`BMI = ${BMI} kg/(m*m)`);
//  
// switch (true) {
//   case (BMI <= 16) :
//     console.log("Severe Thinness");
//     break;
//     case (BMI <= 17) :
//       console.log("Moderate Thinness");
//          break;
//       case (BMI <= 18) :
//       console.log("Mild Thinness");
//         break;
//       case (BMI <= 25) :
//       console.log("Normal");
//         break;
//       case (BMI <= 30) :
//       console.log("Overweight");
//         break;
//       case (BMI <= 35) :
//       console.log("Obese Class I");
//         break;
//       case (BMI <= 40) :
//       console.log("Obese Class II");
//         break;
//       case (BMI > 40) :
//       console.log("Obese Class III");
//         break;
// };