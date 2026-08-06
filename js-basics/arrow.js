// this keyword is used for to access the context value imagine a objec inside a object there are key and values now to access a key's value we can use this.key to access the value

const user = {
  username: "Nafi",
  price: 999,
  welcome: function () {
    console.log(`${this.username} welcome to our website`); // inside here this keyword can access the keys of user object
    console.log(this); // this will print the current object
  },
};

// console.log(this); // this will print a empty object

//user.welcome();

// const greet = function () {
//   console.log("Hello g");
// };

// greet();

// arrow function with explicit return when we use {} curly braces we need to write return keyword explicitly to get the value from the function
// const addTwoNum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwoNum(5, 5));

// implicit return

// when the function is single line we can just write the code and it will automatically return the value we dont need the return keyword here
// const addTwoNum = (num1, num2) => num1 + num2;

// console.log(addTwoNum(5, 7));

//! we dont need to write retrun keyword when we are using () these parenthesis insted of {} these paranthesis

// const addTwoNum = () => ({ usernmae: "Nafiul Siam" });

// console.log(addTwoNum());

//-------------------------------IEFE function----------------------------//

//! IEFE(Imedietly envoked function execution) majhe majhe global scope er variable pollution er karone IEFE function use kora hoy

// The syntax of IEFE function

(function connect() {
  // the functon scoped is written here
  // console.log(`DB CONNECTED........✅`);
})(); // the function immedietly invoked here;

((name) => {
  // console.log(`DB CONNECTED........✅ ${name}`);
})("Nafi"); // we can also pass parameter to IEFE function like that;

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
