// let promiseOne = new Promise((resolve, reject) => {
//   let error = false;
//   if (!error) {
//     setTimeout(() => {
//       resolve({ username: "Rajan", password: "12345" });
//     }, 3000);
//   } else {
//     reject("ERROR: Some error occured!");
//   }
// });

// promiseOne.then((data) => {
//   console.log(data);
// }).catch((error)=>{
//     console.log(error)
// });

// fetch("https://dummyjson.com/products")
//   .then((response) => {

//     const data = response.json();
//     return data;
//   })
//   .then((data) => {
//     console.log(typeof data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products/1');
  const data = await response.json();
  console.log(data);
};
getProducts()