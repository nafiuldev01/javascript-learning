// ! for loop
for (let i = 0; i <= 10; i++) {
  const value = i;
  // console.log(i);
}

// first it declares the variable let i = 0
// 2nd it check the condition
// 3rd if the condition is true it runs the code inside the loop block
// 4th it increament the value i++
// ! the loop runs until the condition becomes false

for (let i = 0; i < 10; i++) {
  // console.log(`outside loop ${i}`);
  // for (let j = 0; j < 20; j++) {
  //   console.log(`inside loop ${j}`);
  // }
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = [];

for (let i = 0; i < myArr.length; i++) {
  const val = myArr[i];
  if (val % 2 === 0) {
    arr.push(val);
  }
}
// console.log(arr);

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index === 10) {
    // console.log("10 lucky number found");
    // break; // this break keyword stop the loop and the execution thread jumps out of loop scope
  }
  // console.log(`Value of index is ${index}`);
}
for (let index = 1; index <= 20; index++) {
  if (index === 10) {
    // console.log("10 lucky number found");
    continue; // this continue keword will ignore the current iteration and will run the other iteration
  }
  // console.log(`Value of index is ${index}`);
}
