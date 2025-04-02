//ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const rajan = new User("Rajan", "rajan@goolge.com", "1234");
// console.log(rajan);
// console.log(rajan.encryptPassword());
// console.log(rajan.changeUsername());

//behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const rajan = new User("rajan", "raj@gmail.com", "3453");
console.log(rajan.changeUsername());
console.log(rajan.encryptPassword());
