/* This is a real-life analogy for things we often have in programming:

A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.  */

/* let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });
  The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.
  
  Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.
  
  When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
  
  resolve(value) — if the job is finished successfully, with result value.
  reject(error) — if an error has occurred, error is the error object. */

/*   let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  }); */

/*   let promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  }); */

/*   There can be only a single result or an error
The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored:

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
}); */

//then in promise

/* let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  ); */

/*   catch
If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second
The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand. */

/* new Promise((resolve, reject) => {
    /* do something that takes time, and then call resolve or maybe reject */
  /* })
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => stop loading indicator)
    // so the loading indicator is always stopped before we go on
    .then(result => show result, err => show error) */ 

/* 
    function loadScript(src) {
        return new Promise(function(resolve, reject) {
          let script = document.createElement('script');
          script.src = src;
      
          script.onload = () => resolve(script);
          script.onerror = () => reject(new Error(`Script load error for ${src}`));
      
          document.head.append(script);
        });
      }
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...')); */