/* 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

let date = new Date();
let day = date.getDay();
let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(`Today is : ${daylist[day]}`);
if (hour > 12) {
  console.log(`Current time is ${hour - 12} PM : ${minute} : ${second}`);
} else {
  console.log(`Current time is ${hour} AM : ${minute} : ${second}`);
}
