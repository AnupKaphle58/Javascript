// Scopes refers to where a variable can be accessed throughout a program.
// It is determined by how and where they are declared.

// 1) Global scope
// It refers to the context within which variables are accessible to every part of the program
let globalScope = "I'm a global scope variable";
console.log(globalScope);

// 2)Block scope
// It refers to statements that exist within curly braces { }.
function test() {
  let blockScope = "I'm a block scope variable";
  console.log(blockScope);
}
test();
// console.log(blockScope); This will thorw an error blockScope is not defined

// Scope pollution
// Scope pollution is when too many variables exist in a namespace or variable names are reused.
// Scope pollution makes it difficult to keep track of our different variables and leds to bugs or errors

let num = 50;

const logNum1 = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum1(); // Prints 100
console.log(num); // Prints 100

// Here, we have a variable num. Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
// When we call logNum(), num gets reassigned to 100. The reassignment inside logNum() affects the global variable num.
// Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num
