/* fetch('https://no-such-server.blabla') // rejects
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary) */
/* 
  fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message)); */

 /*  new Promise((resolve, reject) => {
    throw new Error("Whoops!");
  }).catch(alert); // Error: Whoops!
  …Works exactly the same as this:
  
  new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
  }).catch(alert); // Error: Whoops! */

 /*  new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    throw new Error("Whoops!"); // rejects the promise
  }).catch(alert); // Error: Whoops!
  This happens for all errors, not just those caused by the throw statement. For example, a programming error:
  
  new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    blabla(); // no such function
  }).catch(alert); // ReferenceError: blabla is not defined */

  /* the execution: catch -> catch
  new Promise((resolve, reject) => {
  
    throw new Error("Whoops!");
  
  }).catch(function(error) { // (*)
  
    if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");
  
      throw error; // throwing this or another error jumps to the next catch
    }
  
  }).then(function() {
    /* doesn't run here */
  /* }).catch(error => { // (**)
  
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
  
  }); */ 