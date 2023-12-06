"use strict";
// In programming, there are two main types of copies:
// Here's an example to illustrate the difference:
const originalObject = { name: "John", age: 30 };
const shallowCopy = { ...originalObject };
const deepCopy = JSON.parse(JSON.stringify(originalObject));
originalObject.name = "Jane";
originalObject.age = 35;
console.log(originalObject); // { name: "Jane", age: 30 }
console.log(shallowCopy); // { name: "Jane", age: 35 }
console.log(deepCopy); // { name: "John", age: 30 }
