const uid = Symbol("uid");

const user = {
  [uid]: "123",
  name: "Nafi",
  age: 18,
  email: "nafiul@gmail.com",
  skills: ["js", "html", "css"],
  profession: "web developer",
};

// accesing the values

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.skills[2]);
// console.log(user["profession"]);
// console.log(user[uid]);

// // changing the values

// user.email = "nafiul@google.com";
// console.log(user.email);

// freezing the object so none can change the values
// Object.freeze(user);
// user.name = "siam"; // try to change the value
// console.log(user.name); // the name property value did not change

// user.greeting = () => {
//   console.log("Hello sir!!!!!");
// };

// console.log(user.greeting());

// user.greetByUserName = function () {
//   console.log(`Hello ${this.name}`); // whenever we reffer to the same object we use "this" keyword to acces the value of the object note that you should use function keyword when using this inside a function
// };

// console.log(user.greetByUserName());

// singleton object

// const tinderUser = new Object();

// tinderUser.name = "Sammy";
// tinderUser.email = "sam@gmail.com";
// tinderUser.age = 22;
// tinderUser.username = {
//   userFullName: {
//     firstName: "Sammy",
//     lastName: "Odin",
//   },
// };

// console.log(tinderUser);
// console.log(tinderUser.username.userFullName.lastName);

// merging 2 objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const mergedObj = Object.assign(obj2, obj1); // first way with constructor
console.log(mergedObj);

const result = { ...obj1, ...obj2 }; // 2nd way with spread operator
console.log(result);
