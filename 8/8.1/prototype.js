let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
  alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true

let animala = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animala
  };
  
  // walk is taken from the prototype
  rabbit.walk(); // Animal walk

  let animagl = {
    eats: true,
    walk() {
      /* this method won't be used by rabbit */
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
  };
  
  rabbit.walk(); // Rabbit! Bounce-bounce!

  let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  alert(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  alert(admin.fullName); // Alice Cooper, state of admin modified
  alert(user.fullName); // John Smith, state of user protected

  // animal has methods
let animartl = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  alert(rabbit.isSleeping); // true
  alert(animal.isSleeping); // undefined (no such property in the prototype)

//   The for..in loop iterates over inherited properties too.

// For instance:

let animabl = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats