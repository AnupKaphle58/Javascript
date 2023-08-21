// There are 8 different datatypes in JS

// 1) Numbers

// Numbers includes Integers, floats

let num1 = 14;
let num2 = 14.5;

// 2) String

let string = "My name is: ";

// 3) BigInt

// BigInt values are similar to Number values in some ways, but also differ in a few key matters:
// A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations;
// they must be coerced to the same type.
const alsoHuge = BigInt(9007199254740991);

// 4) Boolean

let value = true;
let value1 = false;

//5) Undefined

// A variable that has not been assigned a value is of type undefined.

// 6) Null

// The value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be.
// Instead, null expresses a lack of identification, indicating that a variable points to no object.
let foo = null;

// 7) Symbol

// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

// Because symbols are the only primitive data type that has reference identity (that is, you cannot create the same symbol twice), they behave like objects in some way.

// 8) Object

// It is used to store various keyed collections and more complex entities.
const person = {
  firstName: "John",
  lastName: "Doe",
};
// An object with a null prototype can behave in unexpected ways, because it doesn't inherit any object methods from Object.prototype.
// This is especially true when debugging, since common object-property converting/detecting utility functions may generate errors, or lose information (especially if using silent error-traps that ignore errors).

// The object data type can contain:
// i. An object
// ii. An array
let laptops = ["acer", "dell", "hp"];
// iii. A date
const date = new Date("2023-08-21");
