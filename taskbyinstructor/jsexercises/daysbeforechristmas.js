// Write a JavaScript program to calculate the days left before Christmas.
var one_day = 1000 * 60 * 60 * 24;
let date = new Date();
let christmas = new Date(2023, 11, 25);
//let chri = christmas.setDate(2023 , 12 , 25);
let days = Math.ceil((christmas - date) / one_day);

console.log(days);
//console.log(chri);
