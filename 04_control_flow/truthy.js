const userEmail = [];
// const userEmail = "r@rajan.ai";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
//false,0,-0,BigInt , 0n, "", null undefined, NaN

//truthy values
//"0" , 'false',' ',[],{},function(){}

// if (useEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

//Nullish coalescing operator(??):null undefined
let val1 = null ?? 10;
// val1 = undefined ?? 5;
val1 = null ?? 10 ?? 20;
console.log(val1);

const iceTeaPrice = 100;
let value = iceTeaPrice <= 80 ? "Less than 80" : "More than 80";
console.log(value);
