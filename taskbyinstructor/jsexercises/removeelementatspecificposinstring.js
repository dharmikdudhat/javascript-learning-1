let s = "dharmik";
function remove(str,pos){
    let ss1 = str.slice(0,pos);
    let ss2 = str.slice(pos+1,str.length);
    return (ss1+ss2);
}

console.log(remove(s,4));