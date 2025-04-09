let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadeddata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
ctrlIcon.addEventListener("click", () => {
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
    ctrlIcon.classList.toggle("fa-play");
    ctrlIcon.classList.toggle("fa-pause");
  });
  

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
song.addEventListener("ended", () => {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    progress.value = 0;
  });
  
progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};
