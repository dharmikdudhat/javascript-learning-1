//Exercise 3: Write a function that takes an array of objects and returns a new array containing only the objects that have a property named "age" and a value greater than 18.

function agegreater(arr){

         return arr.filter(item => item.age > 18);
     }
     console.log(agegreater([
            {
                name: "Angelina Jolie",
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Paris Hilton",
                age: 5
            },
            {
                name: "Kayne West",
                age: 16
            },
            {
                name: "Bob Ziroll",
                age: 100
            }
        ]));