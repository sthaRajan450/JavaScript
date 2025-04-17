// No import statement needed!
Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
  // images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelem");

Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});



