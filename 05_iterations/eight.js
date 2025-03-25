const { current } = require("@reduxjs/toolkit");

//reduce
const myNums = [1, 2, 3];
const initialvalue = 0;
const sum = myNums.reduce((acc, curVal) => {
//   console.log(`acc: ${acc} curVal: ${curVal}`);
  return acc + curVal;
}, initialvalue);

// console.log(sum);

const shoopingCart = [
  {
    name: "Laptop",
    price: 1200,
    quantity: 1,
    category: "Electronics",
  },
  {
    name: "Wireless Mouse",
    price: 25,
    quantity: 2,
    category: "Accessories",
  },
  {
    name: "Bluetooth Headphones",
    price: 80,
    quantity: 1,
    category: "Electronics",
  },
  {
    name: "Notebook",
    price: 5,
    quantity: 3,
    category: "Stationery",
  },
  {
    name: "Pen Pack",
    price: 10,
    quantity: 2,
    category: "Stationery",
  },
  {
    name: "Smartphone",
    price: 700,
    quantity: 1,
    category: "Electronics",
  },
];

const totalAmount = shoopingCart.reduce(
  (acc, product) => acc + product.price,
  0
);
console.log(totalAmount);
