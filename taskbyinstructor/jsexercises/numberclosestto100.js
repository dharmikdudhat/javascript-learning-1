let num1 = 45,num2 = 45;

function check(n1,n2){
    if(100 - n1 > 100 - n2){
        console.log(`${n2} in nearest to 100`);
    }else if(100 - n1 < 100 - n2){
        console.log(`${n1} is nearest to 100`);
    }else if(100-n1 == 100-n2){
        console.log("both are equal");
    }
}

console.log(check(num1,num2));