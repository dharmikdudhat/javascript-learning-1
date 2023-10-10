//5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
  // your code here
  
      function name(obj){
        if (obj.age > 18){
            return `${obj.name} can go to The Matrix`;
        }else{
            return `${obj.name} is under age!!`;
        }
      }
    
      let arrray1 = arr.map(item => name(item));
      return arrray1;
    
}

console.log(makeStrings([
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
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]