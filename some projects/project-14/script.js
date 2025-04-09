const eyeIcon = document.getElementById("eyeIcon");
const password = document.getElementById("password");
eyeIcon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "/project-14/img/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "/project-14/img/eye-close.png";
  }
});
