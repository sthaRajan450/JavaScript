const object1 = {
  username: "Rajan",
  password: "1234",
};
const object2 = {
  address: "Arghakhanchi",
  college: "PMC",
};
Object.setPrototypeOf(object2, object1);
console.log(object2.username);

let name = "Rajan    ";
String.prototype.trueLength = function () {
  console.log(`True length is ${this.trim().length}`);
};
name.trueLength();
// console.log(object1.college)

function createUser(username, email) {
  this.username = username;
  this.email = email;
}
createUser.prototype.firstLetter = function () {
  console.log(this.username[0]);
};
const userOne = new createUser("Rajan", "rajan@goolge.com");
const userTwo = new createUser("Manish", "manish@goolge.com");
console.log(userOne);
console.log(userTwo);
userOne.firstLetter();
