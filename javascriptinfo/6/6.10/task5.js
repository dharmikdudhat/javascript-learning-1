// The task is a little more complex variant of Fix a function that loses "this".

// The user object was modified. Now instead of two functions loginOk/loginFail, it has a single function user.login(true/false).

// What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user, true), user.loginFail.bind(user, false));