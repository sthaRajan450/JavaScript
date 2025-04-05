const passwordBox = document.getElementById("password");
const rangeInput = document.getElementById("range");
const lengthDisplay = document.querySelector(".options span");
const copyIcon = document.querySelector(".display img");
console.log(copyIcon);
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()?/;:[]{}";
const allChars = upperCase + lowerCase + number + symbol;
function generatePassword() {
  const length = rangeInput.value;
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
rangeInput.addEventListener("input", () => {
  lengthDisplay.textContent = `Length:${rangeInput.value}`;
});
document.querySelector("button").addEventListener("click", generatePassword);

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
 
}
copyIcon.addEventListener("click", copyPassword);
