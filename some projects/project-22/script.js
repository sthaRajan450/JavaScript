const selectField = document.querySelector(".selectField");
const selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("option");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");

options = Array.from(options);
options.forEach((option) => {
  option.addEventListener("click", () => {
    selectText.innerHTML = option.textContent;
    arrowIcon.classList.toggle("rotate");
    list.classList.toggle("hide");
  });
});
selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});
