const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes" || "");
}
showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", (e) => {
  const p = document.createElement("p");
  p.setAttribute("contentEditable", true);
  p.className = "input-box";
  p.addEventListener("keyup", updateStorage);
  const img = document.createElement("img");
  img.src = `/project-5/images/delete.png`;
  notesContainer.appendChild(p).appendChild(img);
});
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});
// document.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     document.execCommand("insertLineBreak");
//     e.preventDefault();
//   }
// });

//moder approach after execCommand is depricated
notesContainer.addEventListener("keydown", (e) => {
  if (e.target.classList.contains("input-box") && e.key === "Enter") {
    e.preventDefault();
    const br = document.createElement("br");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(br);
    range.setStartAfter(br);
    range.setEndAfter(br);
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
