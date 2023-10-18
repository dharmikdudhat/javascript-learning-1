/* Async functions
Let’s start with the async keyword. It can be placed before a function, like this:

async function f() {
  return 1;
}
The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of 1; let’s test it:

async function f() {
  return 1;
}

f().then(alert); // 1
…We could explicitly return a promise, which would be the same:

async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
So, async ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword, await, that works only inside async functions, and it’s pretty cool. */

/* Await
The syntax:

// works only inside async functions
let value = await promise;
The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

It’s just a more elegant syntax of getting the promise result than promise.then. And, it’s easier to read and write.
 */

/* async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar(); */

/*   Error handling
If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.

This code:

async function f() {
  await Promise.reject(new Error("Whoops!"));
}
…is the same as this:

async function f() {
  throw new Error("Whoops!");
}
In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.

We can catch that error using try..catch, the same way as a regular throw:

async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
In the case of an error, the control jumps to the catch block. We can also wrap multiple lines:

async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();
If we don’t have try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it:

async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)
If we forget to add .catch there, then we get an unhandled promise error (viewable in the console). We can catch such errors using a global unhandledrejection event handler as described in the chapter Error handling with promises. */
