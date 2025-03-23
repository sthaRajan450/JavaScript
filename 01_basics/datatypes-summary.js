//Primitive(call by value)
//7 types: String, Number, Boolean, Null , Undefined, Symbol, Bigint

//js is dynamically-typed language
const score = 100;
const scoreValue = 100.4;
const isLoogeIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 235463421324523n;
console.log(typeof bigNumber);

//Reference(Non-primitive) (call by reference)
//Array , Objects , Functions
const heros = ["hulk", "ironman", "thor"];

let myObj = { name: "Rajan", age: 23, address: "Arghakhanchi" };

const myFunc = function () {
  console.log("Hello Rajan");
};

console.log(typeof myFunc)
