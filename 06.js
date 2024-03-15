//Promises in js
// Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value
//A Promise can be in one of three states:

// Pending: The initial state. The promise is neither fulfilled nor rejected.
// Resolved: The operation completed successfully, and the promise has a resulting value.
// Rejected: The operation failed, and the promise has a reason for the failure.?
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const success = true; // Simulating a successful operation

    if (success) {
      resolve("Operation completed successfully");
    } else {
      reject("Operation failed");
    }
  }, 2000); // Simulating a 2-second delay
});

// Using the Promise
myPromise
  .then((result) => {
    console.log(result); // Output if the promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // Output if the promise is rejected
  });
 