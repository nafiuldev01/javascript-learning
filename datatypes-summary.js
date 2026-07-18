// ! JavaScript has 8 built-in data types.
// These 8 data types are divided into 2 categories:
// 1. Primitive
// 2. Non-Primitive (Reference)

// The classification is based on how values are stored in memory
// and how they are accessed.

/*
=========================
PRIMITIVE DATA TYPES
=========================

1. Number      -> 18, 3.14, NaN, Infinity
2. BigInt      -> 190230790817470989023840n
3. String      -> "Nafiul"
4. Boolean     -> true or false
5. Symbol      -> Unique and immutable value
6. Null        -> Represents the intentional absence of a value
7. Undefined   -> A variable that has been declared but not assigned a value

=========================
NON-PRIMITIVE (REFERENCE)
=========================

1. Object

Objects include:
- Object
- Array
- Function
- Date
- Map
- Set
- RegExp
- etc.
*/

// ! Pimitive type examples

let age = 18; // *Number
let bigNumber = 182937891728937891273897128937891237n; // * Number
let name = "Nafi"; // * String
let isLoggedIn = true; // * Boolean
let unique = Symbol("123"); // * Number
let data = null; // * Object
let str; // * Undefined

// ! Non - primitive type examples

const heroes = ["Superman", "Spiderman", "Iron man"]; // object
const person = {
  name: "nafi",
  age: 24,
}; // * Object

function greet() {
  console.log("Hello Nafi");
} // * Output is "Function" but it is "Function Object"

// console.log(typeof greet);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ! javascript a variables data gulo 2 ta way te memory te save hoy.....Primitive sob data gulo stack memory te save hoy....non-primitive data gulo heap memory te save hoy

let personName = "nafi"; // * ei variable stack memory te save hobe

let person2Name = personName;

person2Name = "Rafi";

// console.log(personName);
// console.log(person2Name);
// ! Uporer code stack memory er examples

// ! Heap memory

const user = {
  email: "user@google.com",
  uid: "198klkl",
};

const user2 = user;
user2.email = "user2@yahoo.com";
console.log(user);
console.log(user2);
