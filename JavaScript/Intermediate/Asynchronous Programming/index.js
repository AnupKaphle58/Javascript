// Asynchronous programming allows a program to work on multiple tasks simultaneously instead of completing one task before moving on to the next one.
// This can make the program get more things done in a shorter amount of time.

// Synchronous Program
function someLongRunningFunction() {
  let start = Date.now();
  while (Date.now() - start < 5000) {
    // do nothing
  }
  return "Hello";
}
console.log("Starting...");

let result = someLongRunningFunction();
console.log(result);

console.log("...Finishing");
console.log("Finished");

// Asynchronous programming is a way for a computer program to handle multiple tasks simultaneously rather than executing them one after the other.
console.log("Start of script");

setTimeout(function () {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");
