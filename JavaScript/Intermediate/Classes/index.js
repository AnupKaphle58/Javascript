// Classes are a template for creating objects. They encapsulate data with code to work on that data.

// Declaration
class Rectangle1 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle2 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle3 = class Rectangle4 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// The body of a class is executed in strict mode even without the "use strict" directive.

// A class element can be characterized by three aspects:

// Kind: Getter, setter, method, or field
// Location: Static or instance
// Visibility: Public or private

// 1) Constructors
// The constructor method is a special method for creating and initializing an object created with a class.
// Constructor is a method which is called by javascript everytime it creates a new instance of a class.

class Rectangle5 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const newRectangle = new Rectangle5(10, 12);
console.log(newRectangle.height);

// 2) Methods
// Methods are defined on the prototype of each class instance and are shared by all instances.
// Methods can be plain functions, async functions, generator functions, or async generator functions.

class Rectangle6 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle6(10, 10);

console.log(square.area);

// 3)Methods call
class Cat {
  constructor(name) {
    this.name = name;
    this.jumpSkill = 1;
  }

  get nameAndJumpSkill() {
    return this.name + " " + this.jumpSkill;
  }

  upJumpSkill() {
    this.jumpSkill++;
  }
}

let tony = new Cat("Tony");
tony.upJumpSkill();
console.log(tony.nameAndJumpSkill);

// 4) Inheritance

// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class

class Car {
  constructor(brand) {
    this.carName = brand;
  }

  owns() {
    return `I have a ${this.carName}`;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    // The super() method refers to the parent class.
    // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    this.model = model;
  }

  show() {
    return `${this.owns()},it is a ${this.model}`;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

// Static methods:

// In JavaScript, static methods are methods that are associated with a class itself rather than an instance of the class.
// They can be called directly on the class itself, without the need to create an instance of the class.
//  Static methods are defined using the static keyword.

class calculator {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log(calculator.add(15, 5));
console.log(calculator.subtract(15, 5));
console.log(calculator.multiply(15, 5));
console.log(calculator.divide(15, 5));
