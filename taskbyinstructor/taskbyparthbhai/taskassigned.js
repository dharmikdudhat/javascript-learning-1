/* Task 1
Create function that Accepts the String as a input and return the Array of Object sorted by the number of count.
Input: Abra ka dabra
Output1: Print Total input string length
Output2: [{ a: 5 }, { b: 2 }, { r: 2 }, { d: 1 }, { k: 1 }];
Time to complete this task : 30 mins */


// function countNumber(stringg) {

//     let newString = stringg.toLowerCase();

//     let arr = [...newString];

//     let newObj = {};
    
//     let newArrOfObj = [];

//     for (let values of arr) {
        
//         if (values !== ' ') {

//             !newObj[values] ? newObj[values] = 1 : newObj[values]++;

//         }
//     }
//     newArrOfObj.push(newObj);

//     return newArrOfObj.sort((a, b) => b - a);

// }



// let a = "Abra ka dabra";
// console.log(a.length);
// console.log(countNumber(a));


// function count(str){
//    const newwmap = new Map();
//    for (const char of str){
//     if(newwmap.has(char)){
//         newwmap.set(char,(newwmap.get(char)+1));
//     }else{
//         newwmap.set(char,1);
//     }
//    }
//    const newarray = Array.from(newwmap.entries());
//    newarray.sort((a,b) => b[1] - a[1]);
//    return newarray;
// }

// let a = "Abra ka dabra";
//  console.log(a.length);
//  console.log(count(a));

