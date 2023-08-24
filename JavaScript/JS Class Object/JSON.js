// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It is easy for humans to read and write. It is easy for machines to parse and generate.
// It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
// These properties make JSON an ideal data-interchange language.

// JavaScript and JSON differences
// JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null.
// It is based upon JavaScript syntax, but is distinct from JavaScript: most of JavaScript is not JSON. For example:

// Objects and Arrays
// Property names must be double-quoted strings; trailing commas are forbidden.

// Numbers
// Leading zeros are prohibited. A decimal point must be followed by at least one digit. NaN and Infinity are unsupported.

// Static methods

// JSON.parse()
// Parse a piece of string text as JSON, optionally transforming the produced value and its properties, and return the value.

// JSON.stringify()
// Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.

const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;
console.log(JSON.stringify(jsonText));

// You can use the JSON.parse() method to convert the above JSON string into a JavaScript object

console.log(JSON.parse(jsonText));

console.log(jsonText);
