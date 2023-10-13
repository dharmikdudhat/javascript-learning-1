function calculator () {
    read =  function(){
        let a = prompt("enter something" , "a");
        let b = prompt("enter something" , "b");
    }
    sum =  function(){
        let c = a + b;
        return c;
    }
    mul = function(){
        let d = a * b;
        return d;
    }
  };

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );