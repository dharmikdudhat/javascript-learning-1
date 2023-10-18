/* In the previous article we saw a simple use, now let’s explore more examples.

Export before declarations
We can label any declaration as exported by placing export before it, be it a variable, function or a class.

For instance, here all exports are valid:

// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
} */

/* // 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye}; // a list of exported variables */
/* 
  Usually, we put a list of what to import in curly braces import {...}, like this:

// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
But if there’s a lot to import, we can import everything as an object using import * as <obj>, for instance:

// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John'); */
/* 
We can also use as to import under different names.

For instance, let’s import sayHi into the local variable hi for brevity, and import sayBye as bye:

// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John! */

/* The similar syntax exists for export.

Let’s export functions as hi and bye:

// 📁 say.js
...
export {sayHi as hi, sayBye as bye};
Now hi and bye are official names for outsiders, to be used in imports:

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John! */

/* Put export default before the entity to export:

// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}
There may be only one export default per file.

…And then import it without curly braces:

// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');
Imports without curly braces look nicer. A common mistake when starting to use modules is to forget curly braces at all. So, remember, import needs curly braces for named exports and doesn’t need them for the default one.

Named export	Default export
export class User {...}	export default class User {...}
import {User} from ...	import User from ... */

/* “Re-export” syntax export ... from ... allows to import things and immediately export them (possibly under another name), like this:

export {sayHi} from './say.js'; // re-export sayHi

export {default as User} from './user.js'; // re-export default
Why would that be needed? Let’s see a practical use case.

Imagine, we’re writing a “package”: a folder with a lot of modules, with some of the functionality exported outside (tools like NPM allow us to publish and distribute such packages, but we don’t have to use them), and many modules are just “helpers”, for internal use in other package modules.

The file structure could be like this:

auth/
    index.js
    user.js
    helpers.js
    tests/
        login.js
    providers/
        github.js
        facebook.js
        ...
We’d like to expose the package functionality via a single entry point.

In other words, a person who would like to use our package, should import only from the “main file” auth/index.js.

Like this:

import {login, logout} from 'auth/index.js'
The “main file”, auth/index.js exports all the functionality that we’d like to provide in our package.

The idea is that outsiders, other programmers who use our package, should not meddle with its internal structure, search for files inside our package folder. We export only what’s necessary in auth/index.js and keep the rest hidden from prying eyes.

As the actual exported functionality is scattered among the package, we can import it into auth/index.js and export from it:

// 📁 auth/index.js

// import login/logout and immediately export them
import {login, logout} from './helpers.js';
export {login, logout};

// import default as User and export it
import User from './user.js';
export {User};
... */

