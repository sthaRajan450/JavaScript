function SetUSername(username) {
  this.username = username;
  console.log("called");
}
function createUser(username, email, password) {
  SetUSername.call(this, username);
  this.email = email;
  this.password = password;
}
const rajan = new createUser("Rajan", "raj@google.com", "34245 ");
console.log(rajan);
