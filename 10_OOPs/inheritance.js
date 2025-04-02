class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const rajan = new Teacher("Rajan", "raj@teacher.com", "123");
rajan.addCourse();
const nabin = new User("Nabin");
nabin.logMe();
rajan.logMe();
console.log(rajan instanceof User)