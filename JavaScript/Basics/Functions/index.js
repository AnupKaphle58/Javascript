// Functions are reusable block of code that groups together a sequence of statements to perform a specific task

// Function decleration
function test() {
  // This is a function.
}

// A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked.

// 1) Default parameters
function greeting(name = "Kevin") {
  console.log(`My name is ${name}`);
}

greeting();
greeting("James");

// 2) Helper function
// We can also use the return value of a function inside another function.
// These functions being called within another function are often referred to as helper functions.
// Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

function calcArea(length, breadth) {
  return length * breadth;
}

let length = 4,
  breadth = 3;
console.log("The area is: " + calcArea(length, breadth));

// 4) Anonymous function
// A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

const valueOfFunction = function (parameters) {
  console.log(parameters);
};
valueOfFunction("arguments");

// 5) Arrow function
// Arrow functions remove the need to type out the keyword function every time you need to create a function.
// Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } .

const variableName = (parameters) => {
  //body
};

//function call
variableName("arguments");
