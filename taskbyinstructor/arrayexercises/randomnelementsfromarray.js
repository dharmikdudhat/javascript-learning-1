//write a function that gives random n elemnts from an array
let n = 6;
let array1 = [1,2,3,4,5,6,7,8,9,10,11,21,23,45,56,47,33];
function newone(arr){
    let array2 = [];
    for (i= 0 ;i < n;i++){

    let item = arr.splice(Math.random()*arr.length, 1);
    check(item);
    function check(item){

        if(array2.includes(item)){
            check(item);
        }else{
             array2.push(item);
        }
    }
}

 return array2;
}

console.log(newone(array1));