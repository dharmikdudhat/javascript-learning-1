/* Static properties and methods
We can also assign a method to the class as a whole. Such methods are called static.

In a class declaration, they are prepended by static keyword, like this:

class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true */

