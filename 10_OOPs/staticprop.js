class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
 static createId() {
    return `234`;
  }
}
const rajan = new User("Rajan");
// console.log(rajan.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "i@iphone.com");
// console.log(iphone.createId())

console.log(User.createId())