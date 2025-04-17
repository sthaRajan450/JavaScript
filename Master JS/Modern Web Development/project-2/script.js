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
