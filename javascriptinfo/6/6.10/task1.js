//What will be the output?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();//null