const name = "Rajan";
const repoCount = 2;

// console.log(name + repoCount + "value");

//string interpolation
console.log(`Name:${name} RepoCount:${repoCount}`);

const gameName = new String("CH-Rajan-shrestha");
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 4);
console.log(anotherString);

const newStringOne = "    rajan   ";
console.log(newStringOne);
console.log(newStringOne.trimEnd());

const url = "https://rajan.com/rajan%20shrestha";

console.log(url.replaceAll("%20", "-"));

console.log(url.includes("anish"));
console.log(gameName.split("-"));

console.log(gameName.at(1));

console.log(gameName.charCodeAt(4));
