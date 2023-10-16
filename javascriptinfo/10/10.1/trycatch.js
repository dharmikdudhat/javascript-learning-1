/* try {

    // code...
  
  } catch (err) {
  
    // error handling
  
  } */

/*   try {

    alert('Start of try runs');  // (1) <--
  
    // ...no errors here
  
    alert('End of try runs');   // (2) <--
  
  } catch (err) {
  
    alert('Catch is ignored, because there are no errors'); // (3)
  
  } */

/*   try {

    alert('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    alert('End of try (never reached)');  // (2)
  
  } catch (err) {
  
    alert(`Error has occurred!`); // (3) <--
  
  } */

/*   try...catch only works for runtime errors
For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:

try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
} */

/* try...catch works synchronously
If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}
That’s because the function itself is executed later, when the engine has already left the try...catch construct.

To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000); */

/* Error object
When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

try {
  // ...
} catch (err) { // <-- the "error object", could use another word instead of err
  // ...
} */

/* For all built-in errors, the error object has two main properties:

name
Error name. For instance, for an undefined variable that’s "ReferenceError".
message
Textual message about error details. */
/* 
try {
    lalala; // error, variable is not defined!
  } catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
  } */

/*   This is a recent addition to the language. Old browsers may need polyfills.
If we don’t need error details, catch may omit it:

try {
  // ...
} catch { // <-- without (err)
  // ...
} */

/* Let’s use try...catch to handle the error:

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
} */
/* 
“Throw” operator
The throw operator generates an error.

The syntax is:

throw <error object>
Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well. */

/* let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ... */

/* let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O */

/* try {
    JSON.parse("{ bad json o_O }");
  } catch (err) {
    alert(err.name); // SyntaxError
    alert(err.message); // Unexpected token b in JSON at position 2
  } */

/*   In the example above we use try...catch to handle incorrect data. But is it possible that another unexpected error occurs within the try {...} block? Like a programming error (variable is not defined) or something else, not just this “incorrect data” thing.

For example:

let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch (err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
} */

/* Catch should only process errors that it knows and “rethrow” all others.

The “rethrowing” technique can be explained in more detail as:

Catch gets all errors.
In the catch (err) {...} block we analyze the error object err.
If we don’t know how to handle it, we do throw err.
Usually, we can check the error type using the instanceof operator:

try {
  user = { /*...*/ /* };
} catch (err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError'); // "ReferenceError" for accessing an undefined variable
  }
} */ 

/* 
let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    alert( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

} */

/* function readData() {
    let json = '{ "age": 30 }';
  
    try {
      // ...
      blabla(); // error!
    } catch (err) {
      // ...
      if (!(err instanceof SyntaxError)) {
        throw err; // rethrow (don't know how to deal with it)
      }
    }
  }
  
  try {
    readData();
  } catch (err) {
    alert( "External catch got: " + err ); // caught it!
  } */

 /*  try {
    ... try to execute the code ...
 } catch (err) {
    ... handle errors ...
 } finally {
    ... execute always ...
 } */

/*  try {
    alert( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
  } catch (err) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
  }
  The code has two ways of execution:
  
  If you answer “Yes” to “Make an error?”, then try -> catch -> finally.
  If you say “No”, then try -> finally. */

/*   let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` ); */

/* function func() {

    try {
      return 1;
  
    } catch (err) {
      /* ... */
   /*  } finally {
      alert( 'finally' );
    }
  }
  
  alert( func() ); // first works alert from finally, and then this one */
 
/* <script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script> */