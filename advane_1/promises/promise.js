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

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Task 2 completed");
// });

//! how to pass data through resolve?

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Nafiul Islam Siam", email: "nafiul@example.com" }); // pass the data through resolve to .then
//   }, 1000);
// });

// promiseThree.then((data) => {
//   console.log(
//     `Hi my name is ${data.username} my contact email is ${data.email}`, // recieve the data through paramater of .then callback function
//   );
// });

// ! how to pass error through reject cb?

// const promiseFour = new Promise((resolve, reject) => {
//   let error = true;
//   setTimeout(() => {
//     if (!error) {
//       console.log("Async task 4 is done");
//       resolve({ username: "Nafi", password: "123" });
//     } else {
//       reject("Something went wrong!"); // if error true this reject cb will run and it will pass the error to the catch block
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     return user.username; // this return value will pass to the chaining .then
//   })
//   .then((username) => {
//     // ** here
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("Promise done either it is reloved or rejected"));

// ! promise 5 hanlding promsie with async await

// const promiseFive = new Promise((resolve, reject) => {
//   let error = true;
//   setTimeout(() => {
//     if (!error) {
//       console.log("Async 5 task complete");
//       resolve({ username: "Javascript", password: "1234" });
//     } else {
//       reject("Error: Javascript code went wrong");
//     }
//   }, 1000);
// });

// async function handlePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handlePromiseFive();

// ! promise 6 getting users data

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(`Error fetching users data: ${error}`);
//   }
// }

// getAllUsers();

// fetch("https://dummyjson.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     if (data) {
//       console.log(data);
//     }
//   })
//   .catch((err) => {
//     console.log("Error fetching users");
//   });
