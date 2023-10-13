/* The “class” syntax
The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
Then use new MyClass() to create a new object with all the listed methods.

The constructor() method is called automatically by new, so we can initialize the object there. */
/* 
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  user.sayHi(); */


  /* class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // proof: User is a function
  alert(typeof User); // function */

/*   // "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass name is visible only inside the class
    }
  };
  
  new User().sayHi(); // works, shows MyClass definition
  
  alert(MyClass); // error, MyClass name isn't visible outside of the class */
/* 
  We can even make classes dynamically “on-demand”, like this:

function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// Create a new class
let User = makeClass("Hello");
 */
//new User().sayHi(); // Hello

/* class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  alert(user.name); // John
  
  user = new User(""); // Name is too short. */

/*   Here’s an example with a computed method name using brackets [...]:

class User {

  ['say' + 'Hi']() {
    alert("Hello");
  }

}

new User().sayHi(); */

/* /* class User {
    name = "John";
  
    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
  }
   */
  //new User().sayHi(); // Hello, John! */

  /* class User {
    name = "John";
  }
  
  let user = new User();
  alert(user.name); // John
  alert(User.prototype.name); // undefined */


/*   class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // hello
 */

  /* class MyClass {
    prop = value; // property
  
    constructor(...) { // constructor
      // ...
    }
  
    method(...) {} // method
  
    get something(...) {} // getter method
    set something(...) {} // setter method
  
    [Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
  } */