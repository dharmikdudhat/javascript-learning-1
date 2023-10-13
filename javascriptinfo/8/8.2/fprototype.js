let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  console.log( rabbit.eats ); // true

  function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true

function Rabbit(name) {
    this.name = name;
    alert(name);
  }
  
  let rabbifgt = new Rabbit("White Rabbit");
  
  let rabbit2 = new rabbit.constructor("Black Rabbit");