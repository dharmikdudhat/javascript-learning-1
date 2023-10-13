function getAverageAge(arr){
    return (arr[0].age + arr[1].age + arr[2].age) / 3;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28