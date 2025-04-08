const buttons = document.querySelectorAll("button");
console.log(buttons);
let toastBox = document.getElementById("toastBox");

let successMsg = `<i class="fa-solid fa-circle-check sucess-icon"></i> Successfully Submitted`;
let errorMsg = `<i class="fa-solid fa-circle-xmark error-icon"></i> Please fix the error`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation invalid-icon"></i> Invalid input, check again`;
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    if (button.id == "success") {
      toast.classList.add("success");
      toast.innerHTML = successMsg;
    } else if (button.id == "error") {
      toast.classList.add("error");
      toast.innerHTML = errorMsg;
    } else {
      toast.classList.add("invalid");
      toast.innerHTML = invalidMsg;
    }
    toastBox.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    },5000);
  })
);
