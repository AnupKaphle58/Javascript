// 1) this keyword

// “This” keyword refers to an object that is executing the current piece of code.
// It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object.
// If the function that is being referenced is a method in an object, “this” references the object itself.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getThis: function () {
    // return firstName + " " + lastName; // This line will throw an error as firstName and lasName is nrot defined inside the getThis function
  },
};

console.log("My name is: ", person.getThis());

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getThis: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("My name is: ", person1.getThis());

// 2) Getters and setters
// JavaScript getters and setters are special methods that provide access to object properties.

// Getters

// Getters are functions that are used to access properties on an object.
// They are similar to methods, but they are not called on an instance of an object.
// Instead, they are called on the object itself

let person2 = {
  fullName: "John",
  get name() {
    return this.fullName;
  },
};

console.log(person2.fullName);

// Setter

// The setter is a method that allows you to set the value of a property in an object.
// The setter method takes one argument, which is the value that you want to set the property to.

const user = {
  _fullName: "",
  set fullName(value) {
    this._fullName = value;
  },
};

user.fullName = "Kane";
console.log(user._fullName); // John

// 3) Factory function

// Consider there is an object named personOne with two properties firstName and lastName and one method getFullName.
// Suppose that you need to create another object named personTwo with the same properties and methods of personOne.
// So instead of copying and duplicating the code of personOne.
// To avoid copying the same code all over again you can define a function that creates a person object.

const personOne = {
  firstName: "John",
  lastName: "Doe",

  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(personOne.getFullName());

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,

    getFullName() {
      return firstName + " " + lastName;
      //   These functions do not require the use of the ‘this’ keyword for inner values.
    },
  };
}

let personTwo = createPerson("Brock", "Cena");
console.log(personTwo.getFullName());

// 4) Destructured Assignment:
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const dog = {
  name: "Max",
  age: 5,
  color: "Black",
};

const { color } = dog;
console.log(color);
