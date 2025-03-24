const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["ironman", "superman", "batman"];
const myArr2 = new Array(1, 2, 3, 4);
// console.table( myArr);

// console.log(myArr.length)

//Array methods
myArr.push(45);
myArr.push(7);
myArr.pop();
myArr.unshift(-1);
myArr.shift();
myArr.reverse();
myArr.sort();
const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(myArr.includes(100));

//slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C", myArr);
