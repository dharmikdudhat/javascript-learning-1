/* Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

export keyword labels variables and functions that should be accessible from outside the current module.
import allows the import of functionality from other modules.
For instance, if we have a file sayHi.js exporting a function:

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
…Then another file may import and use it:

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
The import directive loads the module by path ./sayHi.js relative to the current file, and assigns exported function sayHi to the corresponding variable. */

/* Now, let’s consider a deeper example.

Let’s say, a module exports an object:

// 📁 admin.js
export let admin = {
  name: "John"
};
If this module is imported from multiple files, the module is only evaluated the first time, admin object is created, and then passed to all further importers.

All importers get exactly the one and only admin object:

// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete

// Both 1.js and 2.js reference the same admin object
// Changes made in 1.js are visible in 2.js */

/* Its content depends on the environment. In the browser, it contains the URL of the script, or a current webpage URL if inside HTML:

<script type="module">
  alert(import.meta.url); // script URL
  // for an inline script - the URL of the current HTML-page
</script>
In a module, “this” is undefined
That’s kind of a minor feature, but for completeness we should mention it.

In a module, top-level this is undefined.

Compare it to non-module scripts, where this is a global object:

<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script> */

