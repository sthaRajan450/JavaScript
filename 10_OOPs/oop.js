// //object literal
// const user = {
//   username: "Rajan",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     console.log(this);
//   },
// };
// user.getUserDetails();

//new keyword is a constructor function
// const promiseone = new Promise();
// const date = new Date();

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting=()=>{
    console.log(`Welcome ${this.username}`)
  }
  // return this;   //implicitly defined
}

//new keyword create a empty object or instance
//constructor function is called by new keyword
//this keyword inject the arguments
const userOne = new user("Rajan", 12, true);
const userTwo = new user("Manish", 8, false);
console.log(userOne.constructor);
// console.log(userTwo.greeting());
