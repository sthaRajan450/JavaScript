const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("Welcome User");
}

if (2 === "2") {
  console.log("executed");
}

const temprature = 40;
if (temprature < 50) {
  console.log("Temperature is less than 50");
} else {
  console.log("Temperature is greater than 50");
}
//>,<,<=,>=,==,!=,===,!== (comparison operators)

// const score = 200;
// if (score > 100) {
//   let ower = "fly";
//   console.log(`User power ${power}`);
// }

const balance = 11000;
// if (balance > 500) console.log("test");

// if (balance < 500) {

//     console.log("Less than 500")
// }
// else if(balance<750)
// {
//     console.log("Less than 750")

// }
// else if(balance<1000){

//     console.log("Less than 1000")
// }
// else{
//     console.log("Greater than 1000")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoggle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allowed to buy courses");
}
if (loggedInFromGoggle || loggedInFromEmail) {
  console.log("User logged in!");
}
