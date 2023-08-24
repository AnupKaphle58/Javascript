// Promises are objects that represent the eventual outcome of an asynchronous operation.
// A Promise object can be in one of three states:

// 1) Pending: The initial state— the operation has not completed yet.

// 2) Fulfilled: The operation has completed successfully and the promise now has a resolved value.
// For example, a request’s promise might resolve with a JSON object as its value.

// 3) Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
});

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

// Promise concurrency
// The Promise class offers four static methods to facilitate async task concurrency:

// Promise.all()
// Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

// Promise.allSettled()
// Fulfills when all promises settle.

// Promise.any()
// Fulfills when any of the promises fulfills; rejects when all of the promises reject.

// Promise.race()
// Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
});

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => console.log(results));
