// The Object type represents one of JavaScript's data types.
// It is used to store various keyed collections and more complex entities.

const object = {
  key: "value",
};

const person = {
  name: "John Doe",
  age: 30,
  senior_citizen: false,
};

const display = (person, key) => {
  console.log(person[key]);
};

display(person, "age");

// Delete key from Objects
delete person.senior_citizen;
console.log(person);

//1) Methods

// When the data inside an object is a function call , it is called methods.
//  A property is what an object has but a method is what an object does.

const dog = {
  legs: 4,
  color: "black",

  bark() {
    console.log("How How How");
  },
};
dog.bark();

// 2) Nested Objects

const vehicles = {
  fourWheelers: {
    cars: {
      brand: "tesla",
      model: "model y",
    },
    buses: {
      brand: "Ashok Leyland",
      model: "Oyster",
    },

    trucks: {
      brand: "Ford",
      model: "raptop",
    },
  },
};
console.log(vehicles.fourWheelers.cars.brand);

// 3) Pass by refrence

// Objects in javascript are passed by reference.
// This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.
// As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

const car = {
  model: 2022,
  color: "Purple",
  engineNumber: "89y8jsdbu",
};

let newColor = (obj) => {
  obj.color = "Red";
};

newColor(car);
console.log(car);

// 4) Looping through objects
// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

const object1 = { a: 1, b: 2, c: 3 };

for (let property in object1) {
  console.log(`${property}: ${object1[property]}`);
}
