//let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
function sayHi() {
    console.log('Hello');
  }
  
  setTimeout(sayHi, 10000);
  function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
//   If the first argument is a string, then JavaScript creates a function from it.

//   So, this will also work:
  setTimeout("alert('Hello')", 1000);

  //But using strings is not recommended, use arrow functions instead of them, like this:

setTimeout(() => alert('Hello'), 1000);

// let timerId = setTimeout(...);
// clearTimeout(timerId);

// The setInterval method has the same syntax as setTimeout:

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

// To stop further calls, we should call clearInterval(timerId).

// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// // repeat with the interval of 2 seconds
//let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// The setInterval method has the same syntax as setTimeout:

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

// To stop further calls, we should call clearInterval(timerId).

// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

setTimeout(() => alert("World"));

alert("Hello");