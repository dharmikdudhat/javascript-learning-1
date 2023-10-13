//Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.
Function.prototype.defer = function(ms) {
    let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
  };
function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2);