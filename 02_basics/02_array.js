const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes[3][1])
// const allHeroes = marvelHeroes.concat(dcHeroes);
const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

const anotherArray = [1, 2, 3, 4, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("rajan"));
console.log(Array.from("rajan"));
// console.log(Array.from({name:'Rajan',age:23}))  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3,{name:"rajan"}));
