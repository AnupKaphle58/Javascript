// const variableName = [ element1, element2,.........., elementn ]

// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
// 1) JavaScript arrays are resizable and can contain a mix of different
// 2) JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// 3) JavaScript arrays are zero-indexed
// 4) JavaScript array-copy operations create shallow copies
// ***All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// Shallow Copy:

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// As a result, when you change either the source or the copy, you may also cause the other object to change too.

// Deep Copy:

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//  As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

// Push() and pop():
// The push() method is used to add new elements to the end of an array and
// pop() is used to remove the last element of an array and returns the value of the last element. .pop() is a method that mutates the initial array.

let array = ["a", "b", "c", "d"];
array.push("e");
array.push("f");
console.log(array, "e and f are pushed to the array");

array.pop();
console.log(array, "Last element of the array is removed");

let oneDArray = ["a", "b", "c", "d"];
let twoDArray = [[1], [2, 3]];
console.log(twoDArray[1]);
