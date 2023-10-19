// nam = "   D   ha  rm  ik      ";
// let x = nam.trim();
// console.log(nam.join(" "));
// // let x =nam.split(' ');
// // console.log(x);
// const nam = "   h  e l  l  o     ";
// const name1 =  nam.split(' ').join('');
// console.log(name1);

// let arr = [1,2,3,4];
// // let x = arr.reduce((a,b) => a + b , 0);
// // console.log(x);

// let x = arr.reduce((a,b) =>{ return a + b });
// console.log(x);

/* let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); */

/* You are given a binary string binary. A subsequence of binary is considered good if it is not empty and has no leading zeros (with the exception of "0").

Find the number of unique good subsequences of binary.

For example, if binary = "001", then all the good subsequences are ["0", "0", "1"], so the unique good subsequences are "0" and "1". Note that subsequences "00", "01", and "001" are not good because they have leading zeros.
Return the number of unique good subsequences of binary. Since the answer may be very large, return it modulo 109 + 7.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
 */

/* function binary(arr) {
  let newone = [];
  newone.push(arr.split(""));
  let x = [];

  for (i = 0; i < newone.length; i++) {
    for (j = newone.length; j >= 0; j--) {
        
    }
  }
}
 */

// Write a JS code to delete all occurrence of element in given array
let array = [1,2,1,2,11,11,111,1,8,8,8,8,"8","a","a","a","@","@"];
let newarray = array.filter((char, dup) => array.indexOf(char) === dup);

console.log(newarray);