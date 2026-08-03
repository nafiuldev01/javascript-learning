if (true) {
  let a = 10;
  const b = 20;
}

// console.log(a);
// console.log(b);
// console.log(c);>

function one() {
  const username = "Nafi";
  function two() {
    const email = "nafi@google.com";
    console.log(username);
  }
  // console.log(email);
  two();
}

// one();

if (true) {
  const firstName = "Nafiul";
  if (true) {
    const lastName = " Siam";
    // console.log(firstName + lastName);
  }
}

/* MINI HOISTING */

console.log(addOne(5)); //output will be 6

function addOne(num) {
  // ! this function will be hoisted
  return num + 1;
}

// !------------------------
console.log(addTwo(5)); // ! this will give an error

const addTwo = function (num) {
  // ! this function will not be hoisted
  return num + 2;
};
