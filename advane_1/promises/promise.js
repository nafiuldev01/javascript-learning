// // * promise object simply represent kore js er jono asynchronous operation er success or failure er upor r er result er upor
// // * promise er 3 ta state hoy...1. Pending 2.fulfilled 3.rejected

// //* this part is promise creation

// const promiseOne = new Promise((resolve, reject) => {
//   //* promise takes one cb function and two parameter one is resolve(cb) which connects it self to .then.... another one is reject(cb) which connects itself to .catch

//   setTimeout(() => {
//     console.log("Async task completed");

//     //* if the resolve cb not called it wont connect to .then and after consuming the promise it wont execute the code inside .then
//     resolve("hello"); // we can also pass value through resolve and access from .then arguments
//   }, 1000);
// });

// // *this part is promise consumption

// promiseOne.then((data) => {
//   console.log("Completed");
//   console.log(data);
// });

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async taks fulfilled.");
//     resolve("hello");
//   }, 1000);
// });

// promiseOne.then((data) => {
//   console.log("Complete");
//   console.log(data);
// });

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Task 2 completed");
});
