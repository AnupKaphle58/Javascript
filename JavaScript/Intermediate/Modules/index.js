// Modules are the reusable pieces of code that can be exported and then imported to another file.
// A modular program is one whose components can be separated, used individually, and recombined to create a complex system.
const { gramToKiloGram, kiloGramToGram } = require("./converter");

const weightInGrams = 100;
const weightInKilograms = gramToKiloGram(weightInGrams);
console.log(`${weightInGrams} grams = ${weightInKilograms} kilograms.`);

const weightInKilograms2 = 10;
const weightInGrams2 = kiloGramToGram(weightInKilograms2);
console.log(`${weightInKilograms2} kilograms = ${weightInGrams2} grams.`);

// Module specifications:  commonJS and ES modules.
// By default Node.js treats javascript code as CommonJS.
// Library authors can easily enable ES modules in a Node.js package by simply changing the package file extension from .js to .mjs.
// CommonJS uses the require() statement to import modules and ES uses import() statement to import modules.

// Advantages of ES Modules over CommonJS

// Static Analysis: ES modules are designed to be statically analyzable, while CommonJS modules are not.
// This means that the import and export statements can be analyzed at build time, enabling tools to optimize the code and generate smaller, more efficient bundles.

// Native Support in Browsers: ES modules are natively supported in modern browsers, while CommonJS modules are not.
// This means that there's no need for additional build tools or plugins to use ES modules in the browser.

// Better Performance: ES modules are designed to be loaded statically, while CommonJS modules are mainly loaded dynamically and synchronously.
// This can lead to slower performance and a blocking of the main thread.

// **********
//   Static analysis refers to the process of analyzing code without executing it, and dynamic imports introduce runtime behavior into a module system.
//   This means that the exact module that will be imported cannot be determined until the code is executed, making it difficult to analyze the module dependencies and relationships ahead of time (AOT).
// **********
