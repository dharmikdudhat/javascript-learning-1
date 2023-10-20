let sttr = "dharmik";

function change(str){
    let ss1 = str.substring(0,1);
    let ss2 = str.substring(1,str.length-1);
    let ss3 = str.substring(str.length-1,str.length);
    return (ss3+ss2+ss1); 
}

console.log(change(sttr));