//singleton
// Object.create

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Rajan",
  "full name": "Rajan Shrestha",
  age: 23,
  [mySym]: "mykey1",
  address: "Arghakhanchi",
  email: "rajan@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  greeting: function() {
    console.log(`Hello  JS user ${this.name}`);
  },
};
// console.log(jsUser);
// console.log(jsUser.address);
// console.log(jsUser["lastLoginDays"][0]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "rajan@chatgpt.com";
console.log(jsUser);

Object.freeze(jsUser);
jsUser.name = "Manish";
console.log(jsUser);
jsUser.greeting();
