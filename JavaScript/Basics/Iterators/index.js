//  Iterators are methods called on arrays to manipulate elements and return values.
//  They can be used as an alternative to loops in JavaScript.

// 1)forEach() method:
let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

array.forEach((elements) => console.log(elements));

// 2) map() method:
let newArray = array.map((elements) => elements / 2);
console.log(newArray);

// 3) filter() method:
// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const bigWords = words.filter((word) => word.length > 6);
const smallWords = words.filter((word) => word.length < 6);

console.log(bigWords);
console.log(smallWords);

// 4) findIndex() method:
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

// 4) reduce() method:
// The reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

// A value to which accumulator is initialized the first time the callback is called.
// If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue.
//  If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.

// The callback function has two parameters, accumulator and currentValue.
// The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element.
//  To see the value of accumulator and currentValue change, review the chart above.
// As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, and currentValue takes on the value of the current element in the looping process.
