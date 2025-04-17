// Video play/pause on hover
const videos = document.querySelectorAll(".project video");
videos.forEach(function (video) {
  video.addEventListener("mouseenter", () => {
    if (video.paused) {
      video.play();
    }
  });

  video.addEventListener("mouseleave", () => {
    if (!video.paused) {
      video.pause();
    }
  });
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration:0.5
});

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
