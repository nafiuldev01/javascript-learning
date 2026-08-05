// array loops

//? for of

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  //console.log("Each char is: ", greet);
}

// ignoring the space

for (const char of greetings) {
  if (char === " ") {
    continue;
  }
  // console.log(`Each Char is : ${char}`);
}

const map = new Map();

map.set("BN", "Bangladesh");
map.set("FRA", "France");
map.set("SPA", "Spain");
// console.log(map);
// console.log(map.get("BN"));
// console.log(typeof map);

for (const key of map) {
  //console.log(key); // return the key and value as an array
}

for (const [key, value] of map) {
  // console.log(key, value); // prints key and value separetly
}

// loops for object

//? for in

const programmingLangShortcuts = {
  js: "javascript",
  rb: "ruby",
  py: "python",
  cpp: "c++",
};

for (const key in programmingLangShortcuts) {
  // if (programmingLangShortcuts[key] === "python") {
  //   console.log(key);
  // }
  //console.log(programmingLangShortcuts[key]);
}

//* for in also works for array

const programmingLangs = ["py", "js", "rb", "cpp", "swift"];

for (const key in programmingLangs) {
  //console.log(key); // ! while running for loop on an array it will iterate over the array keys(indexes)
  // console.log(`In ${key} index the value is ${programmingLangs[key]}`);
}

//? for each array loops

const coding = ["js", "python", "ruby", "cpp", "swift"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// coding.forEach(printItem);

// function printItem(item) {
//   console.log(item);
// }

//* for each loop not only take array items as args it can also take item,index and array

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "js",
    fileName: "javaScript",
  },
  {
    languageName: "py",
    fileName: "python",
  },
  {
    languageName: "cpp",
    fileName: "c++",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageName);
});

// * forEach does not return any value even if you explicitly write return keyword it will not return any value

//? array.filter (the filter method is also like an loop which also takes an argument for arr items it loops through the arr items as long as the condition is true and it returns an array)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = myNums.filter((item) => {
//   console.log(item);
//   return item; // return the items as an array
// });

//

// ! returning only the values which are bigger than 4

// const result = myNums.filter((item) => {
//   return item > 4;
// });

//console.log(result);

//! doing this with for each

// const newNums = [];
// myNums.forEach((item) => {
//   if (item > 4) newNums.push(item);
// });

// console.log(newNums);

const books = [
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "1st Edition",
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish: 1999,
    edition: "20th Anniversary Edition",
  },
  {
    title: "Eloquent JavaScript",
    genre: "Programming",
    publish: 2018,
    edition: "3rd Edition",
  },

  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "Revised Edition",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: "Illustrated Edition",
  },
  {
    title: "The Name of the Wind",
    genre: "Fantasy",
    publish: 2007,
    edition: "1st Edition",
  },

  {
    title: "The Great Gatsby",
    genre: "Classic Fiction",
    publish: 1925,
    edition: "1st Edition",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic Fiction",
    publish: 1960,
    edition: "50th Anniversary Edition",
  },

  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: "1st Edition",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    genre: "Self-Help",
    publish: 1989,
    edition: "30th Anniversary Edition",
  },
];

let user = books.filter((book) => {
  return book.genre.toLocaleLowerCase() === "programming"; // this will only return the book which genre is 'programming'
});
//console.log(user);

user = books.filter((book) => {
  return book.publish >= 2000;
});
//console.log(user); // this will return the books which was published after 2000 or in 2000

user = books.filter((book) => {
  return (
    book.genre.toLocaleLowerCase() === "programming" && book.publish >= 2000
  );
});
// console.log(user);

// array.map // it also returns an array

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = newNums.map((num) => num + 10);
// console.log(result);

// method chaining we can use more than one method on a array by chaining them together

// ! method chaining

// const result = newNums
//   .map((num) => num + 10) // this method's result will be passed to the next chaining
//   .map((num) => num * 10) // this method's result will be past to the next chaining
//   .filter((num) => num > 140); // and this method's result will be the final output
// console.log(result);

// ! array.reduce

const prices = [100, 200, 300, 400];

// const initialValue = 0;

// const totalPrice = prices.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue);

// console.log(totalPrice);

// for some information

// const result = prices.reduce((acc, currVal) => {
//   console.log(`value of acc : ${acc} and value of currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);

// const shoppingCart = [
//   {
//     course: "js course",
//     price: 1999,
//   },
//   {
//     course: "python course",
//     price: 2999,
//   },
//   {
//     course: "c++ course",
//     price: 3999,
//   },
//   {
//     course: "swift course",
//     price: 4999,
//   },
//   {
//     course: "ruby course",
//     price: 5999,
//   },
// ];

//const totalBill = shoppingCart.reduce((acc, item) => item.price + acc, 0);
//console.log(totalBill);

// function payBill(payment) {
//   if (payment === totalBill) {
//     console.log("Payment successful ✅");
//   } else if (payment > totalBill) {
//     console.log(
//       `Payment successful ✅ here is your change: ${payment - totalBill} taka`,
//     );
//   } else {
//     console.log(
//       `Insufficient balance please pay ${totalBill - payment} taka more`,
//     );
//   }
// }

// payBill(20000);
