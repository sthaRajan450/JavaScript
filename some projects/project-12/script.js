const buttons = document.querySelectorAll(".buttons input");
let display = document.querySelector(".display input");
console.log(display);
let Operation = buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.value === "AC") {
      display.value = "";
    } else if (button.value === "DE") {
      display.value = display.value.toString().slice(0, -1);
    } else if (button.value === "=") {
        display.value=eval(display.value)
    } else {
      display.value += button.value;
    }
  })
);
