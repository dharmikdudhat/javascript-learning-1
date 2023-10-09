// Exercise 2: Write a function that takes an array of strings and returns a new array containing only the strings that start with the letter "A".

function letterA(arr){

    return arr.filter(item => item.toLowerCase().at(0) == 'a');
}
console.log(letterA(["dharmik" , "dhaval" , "prachi" , "abhishek" , "Abhishek"]));