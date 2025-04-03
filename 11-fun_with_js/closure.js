function outer() {
  const username = "Rajan";
  return function inner() {
    console.log(username);
  };
}
const myFunc = outer();
myFunc();
