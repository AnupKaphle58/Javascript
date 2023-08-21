// Higher-order functions:

// In Javascript, functions can be assigned to variables in the same way that strings or arrays can.
// They can be passed into other functions as parameters or returned from them as well.
// Higher-order function helps to add another level of abstraction to our program.

// 1) Functions as data:

const func = () => {
  console.log("Hello!");
};
const newFunc = func;
newFunc();

// Notice how we assign func without parentheses as the value to the newFunc variable. We want to assign the value of the function itself, not the value it returns when invoked.
// In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

// 2)Functions as parameters:

// Function that gets passed in as a parameter is called a callback function.
// Callback function gets invoked during the execution of a higher-order function.

// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log("I am  a callback function");
}

// higher order function
function higherOrderFunction(func) {
  console.log("I am higher order function");
  func();
}

higherOrderFunction(callbackFunction);
