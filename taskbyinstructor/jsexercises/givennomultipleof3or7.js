let n = 49;
function check(num){
    if(num%3 == 0){
        console.log(`${num} is multiple of 3`);
    }else if(num%7==0){
        console.log(`${num} is multiple of 7`);
    }else{
        console.log(`${num} is not multiple of 3 or 7`);
    }
}

console.log(check(n));