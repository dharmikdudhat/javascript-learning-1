let str = "Pyarmik";

function changeprePy(str){
    if(str.at(0) !== 'P' && str.at(1) !== 'y'){
        let ss1 = "Py";
        return (ss1 + str);
    }else{
        return str;
    }
}

console.log(changeprePy(str));