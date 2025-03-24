const { use } = require("react");

function myFunc() {
  console.log("hello Rajan");
}
// myFunc();

function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("J");
  console.log("A");
  console.log("N");
}
// sayMyName   Reference
// sayMyName(); //Execution

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const sum = addTwoNumbers(3, 7);
// console.log(sum);

function loginUserMessage(username = "Sham") {
  //   if (!username) {
  //     console.log("Please enter a username");
  //     return;
  //   }
  return `${username} just logged in`;
}

console.log(loginUserMessage());

function calculateCartPrice(...prices) {
  let totalPrice = 0;
  prices.forEach((price) => (totalPrice += price));
  return totalPrice;
}
console.log(calculateCartPrice(200, 100, 200, 1000));

const user = {
  username: "Rajan",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user);
handleObject({ username: "Sham", price: 100 });
const myNewArray = [200, 300, 4000, 500];
function returnSecondValue(array) {
  return array[1];
}
console.log(returnSecondValue(myNewArray));
