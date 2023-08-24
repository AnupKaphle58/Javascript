// The String object is used to represent and manipulate a sequence of characters.

// Character access

// There are two ways to access an individual character in a string.
console.log("DOG".charAt(1)); // gives O
console.log("DOG"[1]); // gives O

const a = "c";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

// String primitives and String objects
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(strObj); // [String: 'foo']
console.log(typeof strObj); // "object"

// String coercion

// Strings are returned as-is.
// undefined turns into "undefined".
// null turns into "null".
// true turns into "true"; false turns into "false".
// Numbers are converted with the same algorithm as toString(10).
// BigInts are converted with the same algorithm as toString(10).
// Symbols throw a TypeError.

// Instance methods

// String.prototype.at()
// Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.

// String.prototype.charAt()
// Returns the character (exactly one UTF-16 code unit) at the specified index.

// String.prototype.concat()
// Combines the text of two (or more) strings and returns a new string.

// String.prototype.includes()
// Determines whether the calling string contains searchString.

// String.prototype.match()
// Used to match regular expression regexp against a string.

// String.prototype.repeat()
// Returns a string consisting of the elements of the object repeated count times.

// String.prototype.slice()
// Extracts a section of a string and returns a new string.

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

// String.prototype.split()
// Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

const str1 = "The quick brown fox jumps over the lazy dog.";

const words = str1.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str1.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str1.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// String.prototype.substring()
// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const str2 = "Mozilla";

console.log(str2.substring(1, 3));
// Expected output: "oz"

console.log(str2.substring(2));
// Expected output: "zilla"

// String.prototype.toLowerCase()
// Returns the calling string value converted to lowercase.

// String.prototype.toString()
// Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

// String.prototype.toUpperCase()
// Returns the calling string value converted to uppercase.

// String.prototype.trim()
// Trims whitespace from the beginning and end of the string.
