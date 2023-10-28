const prompt = require('prompt-sync')();

function Func() { 
    try{
        const fs = require('fs');
        const mainJsonData = fs.readFileSync('C:\\Users\\HP\\Desktop\\learning\\javascript\\sample1.json');
        const data = JSON.parse(mainJsonData);

        return data;
    /* const x = {
        "fruit": "Apple",
        "size": "Large",
        "color": "Red"
    };  */

   
}catch{
    console.log('error');
}
}

/* const sample = require('C:\Users\HP\Desktop\learning\javascript\sample1.json'); 
console.log(sample); */


let user = Func();

let key = prompt("What do you want to know about the user?", "name");
if (user[key]) {
    console.log(user[key]);
} else {
    console.log('Key not found in user data.');
}







Func();