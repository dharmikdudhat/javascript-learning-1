// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// For instance:

function work(a, b) {
   console.log( a + b ); // work is an arbitrary function or method
 };

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }


  
//   function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function() {
//       let key = work(arguments); // (*)
//       if (cache.has(key)) {
//         return cache.get(key);
//       }
  
//       let result = func.call(this, ...arguments); // (**)
  
//       cache.set(key, result);
//       return result;
//     };
//   }
  
//   function hash(args) {
//     return args[0] + ',' + args[1];
//   }
function spy(func) {

    function wrapper(...args) {
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }

  work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
//   worker.slow = cachingDecorator(worker.slow, hash);
  
//   alert( worker.slow(3, 5) ); // works
//   alert( "Again " + worker.slow(3, 5) ); // same (cached)