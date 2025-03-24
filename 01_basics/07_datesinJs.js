let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 1, 23);
// let myCreatedDate = new Date(2025, 1, 23, 5, 34, 120);
let myCreatedDate = new Date("2025-01-23");
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(newDate);
