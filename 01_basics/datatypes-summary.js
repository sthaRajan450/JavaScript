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
// console.log(id === anotherId);

const bigNumber = 235463421324523n;
// console.log(typeof bigNumber);

//Reference(Non-primitive) (call by reference)
//Array , Objects , Functions
const heros = ["hulk", "ironman", "thor"];

let myObj = { name: "Rajan", age: 23, address: "Arghakhanchi" };

const myFunc = function () {
  //   console.log("Hello Rajan");
};

// console.log(typeof myFunc)

//********************************************** */
//Stack (Primitive), Heap(Non primitive)
let valu1 = 45;
let value2 = valu1;
value2++;
console.log(valu1, value2);

let array1 = ["Rajan", "manish", "nabin"];
let array2 = array1;
array2.push("pradip");
console.log(array2, array1);

let userOne = {
  email: "rajan@google.com",
  address: "palpa",
};
let userTwo = userOne;
userTwo.email = "manish@google.com";
console.log(userOne.email);
console.log(userTwo.email);
