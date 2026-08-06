const myArr = [1, 2, 3, 4, 5, 6];

const myHeroes = ["Superman", "Spiderman", "Iron man"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);

// ! Array Methods

// * arr.push()

myArr.push(7); // this method add an element to the array into its last index
//console.log(myArr);
myArr.pop();
//console.log(myArr); // this method remove the last element from the array

myArr.shift(); // this method remove the first element from the array
//console.log(myArr);
myArr.unshift(1);
//console.log(myArr); // this method ad elements to the array's first index

console.log("A", myArr);
const newArray = myArr.slice(1, 3); // this method take two params as arrays index the first param from which it will start and take the value then the 2nd index where it will end but the last index will be ignored...it will return an array but it do not changes the original array
// console.log("B", myArr);
// console.log(newArray);
const newArr2 = myArr.splice(1, 4);
// console.log("C", myArr);
// console.log(newArr2); // it also takes two params as index it will remove the values from the originial arr and return a new arr.

// console.log(myArr.includes(2)); // check if the value exist in the array return true or false boolean data types
const arr = [1, 2, 3, 4];
const ans = arr.concat(5, 6, 7);
console.log(ans);
console.log(typeof ans);
console.log(arr);
