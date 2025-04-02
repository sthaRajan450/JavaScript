const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI)
// Math.PI=6
// console.log(Math.PI)
// console.log(descriptor);

const chiya = {
  name: "lemon chiya",
  price: 50,
  isAvailable: true,
  orderchiya: function () {
    console.log("chiya banena");
  },
};
console.log(Object.getOwnPropertyDescriptor(chiya, "name"));
Object.defineProperty(chiya, "name", {
    value: "milk tea",
    writable: false,
    enumerable: true,
    configurable: true,
   
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chiya)) {
  if (typeof value !== "function") {
    console.log(key + " : " + value);
  }
}
