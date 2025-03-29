// document.getElementById("tree").onclick = () => {
//   alert("tree clicked");
// };

//attachEvent
//jQuery -On
//type,timestamp, defaultPrevented,
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY ,offset
//altkey,ctrlkey, shiftkey,keyCode
document.getElementById("images").addEventListener("click", (e) => {
  //   console.log("clicked inside ul");
});
document.getElementById("tree").addEventListener(
  "click",
  (e) => {
    // alert("tree clicked");
    // console.log("tree clicked");
    // e.stopPropagation();
  }

  //event propagation
  //   false //bubbling  bottom-top
  //   true  //capturing mode top-bottom
);

document.getElementById("google").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Google Clicked");
});

document.querySelector("#images").addEventListener("click", (e) => {
//   console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id)
    let removeIt = e.target.parentNode;
    // removeIt.remove();
    removeIt.parentNode.removeChild(removeIt);
  }
});
