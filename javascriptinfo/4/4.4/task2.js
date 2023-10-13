let calculator = {
    read: function(){
        let a = prompt("enter something" , "a");
        let b = prompt("enter something" , "b");
    },
    sum: function(){
        let c = a + b;
        return c;
    },
    mul: function(){
        let d = a * b;
        return d;
    },
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );