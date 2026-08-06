// function sayMyName() {
//   console.log("N");
//   console.log("a");
//   console.log("f");
//   console.log("i");
// }

// sayMyName();

function addTwoNum(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}

const result = addTwoNum(6, 5);

// console.log(result);

function greet(username) {
  if (!username) {
    console.log("Please provide a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(greet("nafi"));
// console.log(greet("Nafi"));

// get multiple values in a function with the use of rest operators

// function calculateCart(...itemsPrices) {
// "..." when we use rest operator in parameter we can pass more than 1 arguments and the values will be stored as an array
//   return itemsPrices;
// }

// console.log(calculateCart(200, 400));

// passing obj as an argument

// const user = {
//   username: "Nafi",
//   age: 22,
// };

// function userInfo(obj) {
//   console.log(`${obj.username} is ${obj.age} years old.`);
// }

// userInfo(user);

// passing array as an argument
// const myArr = [1, 2, 3, 4, 5];
// function getSecondValue(arr) {
//   console.log(arr[1]);
// }

// getSecondValue(myArr);
// getSecondValue([100, 200, 300, 400]);
