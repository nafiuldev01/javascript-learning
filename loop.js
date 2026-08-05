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

// ! While loop

// let i = 0;

// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i = i + 1;
// }

// const arr2 = ["superman", "spiderman", "batman"];
// let value = "";
// let i = 0;

// while (i < arr2.length) {
//   if (arr2[i] === "batman") {
//     value = arr2[i];
//     break;
//   }
//   i = i + 1;
// }
// console.log(value);

// ! do while // in do while loop there is an  exception the code executes first and then the condition is checked if the condition true then the loop runs but if false the loop stop but the code will executes first
let h = 1;

do {
  // ? The code executes first
  // console.log(`Value of h is ${h}`);
  h = h + 1;
} while (h <= 10); // ? the conditon checked last

let g = 11;
do {
  console.log(`the value of g is ${g}`); // ? the code will print 11 first cause the condition will be checked last
  g = g + 1;
} while (g <= 10);
