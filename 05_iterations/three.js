//for of
// ["","".""]
// [{},{}.{}]

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  //   console.log(element);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  //   console.log(greet);
}

//Maps
const map = new Map();
map.set("NEP", "Nepal");
// map.set("NEP", "Nepal");
map.set("IN", "India");
map.set("USA", "United States of America");
// console.log(map);

for (const [key, value] of map) {
//   console.log(key + " : " + value);
}

const myObj = {
  game1: "NFS",
  game2: "Pubg",
  game3: "Free Fire",
};

//object is not iterable
