let rect = document.getElementById("rect");
window.addEventListener("mousemove", (e) => {
  let xVal = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    e.clientX
  );

  let yVal = gsap.utils.mapRange(
    0,
    window.innerHeight,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerHeight - (100 + rect.getBoundingClientRect().width / 2),
    e.clientY
  );
  gsap.to("#rect", {
    left: xVal + "px",
    top: yVal + "px",
    ease: Power3,
  });
});
