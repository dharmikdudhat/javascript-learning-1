// Write a function to shuffle an array.

function suffle(arr){
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
