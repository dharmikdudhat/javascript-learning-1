let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

let f = user.sayHi;
setTimeout(f, 1000); // lost user context

//using wrapper

setTimeout(function() {
    user.sayHi(); // Hello, John!
  }, 1000);

  setTimeout(() => user.sayHi(), 1000); // Hello, John!

//binding the function with object
  let user1 = {
    firstName: "John"
  };
  
  function func() {
    alert(this.firstName);
  }
  
  let funcUser = func.bind(user1);
  funcUser(); //

  for (let key in user) {
    if (typeof user[key] == 'function') {
      user[key] = user[key].bind(user);
    }
  }

  function mul(a, b) {
    return a * b;
  }
  
  let double = mul.bind(null, 2);
  
  alert( double(3) ); // = mul(2, 3) = 6
  alert( double(4) ); // = mul(2, 4) = 8
  alert( double(5) ); // = mul(2, 5) = 10

  