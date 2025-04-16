let timeout;
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", (e) => {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${xscale},${yscale})`;
  });
}

function firstPageAnim() {
  let t1 = gsap.timeline();
  t1.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: "-1",
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: "-1",
      ease: Expo.easeInOut,
    });
}

function skewCircle() {
  xscale = 1;
  yscale = 1;

  xprev = 0;
  yprev = 0;

  window.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, xprev - e.clientX);
    yscale = gsap.utils.clamp(0.8, 1.2, yprev - e.clientY);
    xprev = e.clientX;
    yprev = e.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${e.clientX}px ,${e.clientY}px)  scale(1,1)`;
    }, 100);
  });
}
skewCircle();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;
  elem.addEventListener("mouseleave", (e) => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3
    });
  });
  elem.addEventListener("mousemove", (e) => {
    let diff = e.clientY - elem.getBoundingClientRect().top;
    diffrot = e.clientX - rotate;
    rotate = e.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: diff,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });
  });
});
