const marvelHeroes = ["spiderman", "ironman", "hulk"];
const dcHeroes = ["superman", "batman", "flash"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes[3][0]);

// const allHeros = marvelHeroes.concat(dcHeroes); // it merge both the arrays and it returns an array it doesnot change the originial array
// console.log(allHeros);
// console.log(marvelHeroes);

// const allHeros = [...marvelHeroes, ...dcHeroes]; // join 2 arrays with spread operators it also does not change the originial array
// console.log(allHeros);

// const newArr = { ...marvelHeroes }; // this will turn marvel hero array into object by separing each value.eg:{ 0:"spiderman",1:"ironman"}
// console.log(newArr);

console.log(Array.isArray("Nafiul"));
console.log(Array.from("Nafiul"));
console.log(Array.from({ name: "Nafiul" })); // this returns an empty object
