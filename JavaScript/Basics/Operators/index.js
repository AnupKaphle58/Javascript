//1) Assignment operators
//  They are used to assign values to the variables.

var a = 10;
// Above = is an assignment operator that is used to assign value to variable x.

// 2) Increment or decrement  operators
// They are used to increase or decrease the value of a variable by 1.
var b = 4;
b++;
console.log(b);
//  Here the value of a is increased by 1.

// 3) Comparison operators
// They are used to compare value of the variables.

let x = 10;
let y = 20;

// Less than
console.log(x < y); //True

// Greater than
console.log(x > y); // False

// Less than or equal to: <=
console.log(x <= 10); // True

// Greater than or equal to: >=
console.log(y >= 20); //True

// Is equal to: ===
console.log(10 === 10); // True
console.log(11 === 10); // False

// Is not equal to: !==
console.log(x !== y); // True

// 4) Logical operators:
// They are used to test the locial value

//i) and operator (&&):
// The condition is true if and only if all the condition separated by && operator is true
let math = 50;
let science = 60;

if (math > 40 && science > 40) {
  console.log("You passed both the exams.");
} else {
  console.log("Sorry! You failed the exam.");
}
// Here, since both the conditions of if statement are true , so if block is executed.

// ii) or operator (||)
// The condition is true if atleast one of the condition separated by || operator is true.

if (math > 50 || science > 50) {
  console.log("You passed the test");
} else {
  console.log("You failed the test");
}
// Here, since of the condition of the if statement is true, so if block is executed.

// iii) not operator, otherwise known as the bang operator (!)
// Falsify, negates or reverses the boolean value of a variable
let reverse = true;
console.log(!reverse);

//  Truthy or Falsy:

// The following list provides a complete list of JavaScript falsy values:
// null
// undefined
// false
// NaN
// 0
// -0
// 0n
// ""

// Ternary operator:
// It can be used as an alternative of if….else statement
let age = 18;
console.log(age >= 18 ? "You can vote" : "You cannot vote");

// Switch
// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered.
// The default clause of a switch statement will be jumped to if no case matches the expression's value.

const expr = "Mangoes";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
