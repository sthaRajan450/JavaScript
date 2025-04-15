const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", (e) => {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
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
      delay: '-1',
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1,
      delay:'-1',
      ease: Expo.easeInOut,
    });
}

circleMouseFollower();
firstPageAnim();
