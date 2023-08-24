// Callback functions:
// Callback functions are the functions that are passed as arguments to another function and can be invoked or called anytime later.
// Callback functions are a fundamental concept in JavaScript and are commonly used to handle asynchronous operations,
// such as fetching data from a server, responding to user interactions, or executing code after a certain event occurs

function func1(callback) {
  console.log("I have the callback function as an argument");
  callback();
}

function func2() {
  console.log("I am a callback function and i am invoked by another function");
}

func1(func2);

// How to avoid callback hells

// Don't nest functions. Give them names and place them at the top level of your program

// Use function hoisting to your advantage to move functions 'below the fold'

// Handle every single error in every one of your callbacks. Use a linter like standard to help you with this.

// Create reusable functions and place them in a module to reduce the cognitive load required to understand your code.
// Splitting your code into small pieces like this also helps you handle errors, write tests, forces you to create a stable and documented public API for your code, and helps with refactoring
