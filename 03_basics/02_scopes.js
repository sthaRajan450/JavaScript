//scope  {}     //despite  object
// var c = 45;
let a = 400;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  console.log(a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Rajan";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();
if (true) {
  const username = "Rajan";
  if (username === "Rajan") {
    const website = "youtube";
    console.log(username + " " + website);
  }
  //   console.log(website);
}
// console.log(username);

//**************interesting************** */
console.log(addOne(100));
function addOne(num) {
  return (num += 1);
}

const addTwo = function (num) {
  return (num += 2);
};
console.log(addTwo(9));


