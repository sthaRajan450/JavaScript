const user = {
  username: "Rajan",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},Welcome to website `);
    // console.log(this);
  },
};
// user.welcomeMessage();
// user.username='Manish'
// user.welcomeMessage();
user.welcomeMessage();
// console.log(this);

// function one() {
//   let username = "Rajan";
//   console.log(this.username);
// }
// one();

// const one = () => {
//   let username = "Rajan";
//   console.log(this.username);
// };
// one();

// arrow funcition
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(5, 56));

const addTwo = (num1, num2) => ({ username: "rajan" });
console.log(addTwo())