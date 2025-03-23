const accountId = 1;
let accountEmail = "rajan@google.com";
var accountPassword = "123456789";
accountCity = "Kathmandu";
let accountState;

//accountId=2; //not allowed

accountEmail = "manish@google.com";
accountPassword = "234553";
accountCity = "Palpa";

console.log(accountEmail);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var because of issue in block scope and functional scope
 */
