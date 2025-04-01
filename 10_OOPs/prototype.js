// let myName = "Rajan     ";
// console.log(myName.truelength);

let myHeores = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};
Object.prototype.rajan = function () {
  console.log(`rajan is present in all objects`);
};
// heroPower.rajan()

Array.prototype.heyRajan = () => {
  console.log(`Rajan Says hello`);
};
// myHeores.rajan()
myHeores.heyRajan();
// heroPower.heyRajan();

//inheritance
const User = {
  name: "Rajan",
  email: "rajan@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "RajanAndCode    ";
String.prototype.trueLength = function () {
  //   console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is ${this.trim().length}`);
};
anotherUsername.trueLength();
'Rajan  '.trueLength()