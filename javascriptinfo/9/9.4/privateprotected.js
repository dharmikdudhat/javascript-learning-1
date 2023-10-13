/* In object-oriented programming, properties and methods are split into two groups:

Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
External interface – methods and properties, accessible also from outside the class. */

/* public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
Private: accessible only from inside the class. These are for the internal interface. */

/* class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10 */


/*   That’s exactly the case for a coffee machine: power never changes.

To do so, we only need to make getter, but not the setter:

class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W */

/* 
There’s a finished JavaScript proposal, almost in the standard, that provides language-level support for private properties and methods.

Privates should start with #. They are only accessible from inside the class.

For instance, here’s a private #waterLimit property and the water-checking private method #fixWaterAmount:
 */

/* class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error */


