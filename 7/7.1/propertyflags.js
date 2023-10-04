// Object properties, besides a value, have three special attributes (so-called “flags”):

// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
    name: "John"
  };
  
  let descriptor1 = Object.getOwnPropertyDescriptor(user, 'name');
  
  alert( JSON.stringify(descriptor1, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */

  let user2 = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor2 = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descripto2r, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false
  });
  
  user.name = "Pete"; // Error: Cannot assign to read only property 'name'

  let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    configurable: false
  });
  
  user.name = "Pete"; // works fine
  delete user.name; // Error



  //multi  property description
  Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
  });

//   To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).

// Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
// Normally when we clone an object, we use an assignment to copy properties, like this:

// for (let key in user) {
//   clone[key] = user[key]
// }
// …But that does not copy flags. So if we want a “better” clone then Object.defineProperties is preferred.

// Another difference is that for..in ignores symbolic and non-enumerable properties, but Object.getOwnPropertyDescriptors returns all property descriptors including symbolic and non-enumerable ones

// Object.preventExtensions(obj)
// Forbids the addition of new properties to the object.
// Object.seal(obj)
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.
// Object.freeze(obj)
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
// And also there are tests for them:

// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.
// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.