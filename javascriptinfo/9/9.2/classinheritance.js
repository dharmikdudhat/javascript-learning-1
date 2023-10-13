/* class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides! */

  /* Overriding a method
Now let’s move forward and override a method. By default, all methods that are not specified in class Rabbit are taken directly “as is” from class Animal.

But if we specify our own method in Rabbit, such as stop() then it will be used instead:

class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  } */
//}

//to call parent method super keyword is used in javascript
/* 
stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
} */

/* class Rabbit extends Animal {
    stop() {
      setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
    }
  } */
/* 
  Overriding constructor
  With constructors it gets a little bit tricky.
  
  Until now, Rabbit did not have its own constructor.
  
  According to the specification, if a class extends another class and has no constructor, then the following “empty” constructor is generated:
  
  class Rabbit extends Animal {
    // generated for extending classes without own constructors
    constructor(...args) {
      super(...args);
    }
  }   */

  /* class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    // ...
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
    // ...
  }
  
  // now fine
  let rabbit = new Rabbit("White Rabbit", 10);
  alert(rabbit.name); // White Rabbit
  alert(rabbit.earLength); // 10 */

 /*  class Animal {
    showName() {  // instead of this.name = 'animal'
      alert('animal');
    }
  
    constructor() {
      this.showName(); // instead of alert(this.name);
    }
  }
  
  class Rabbit extends Animal {
    showName() {
      alert('rabbit');
    }
  }
  
  new Animal(); // animal
  new Rabbit(); // rabbit */

  