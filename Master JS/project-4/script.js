let timer = 60;
let score = 0;
let hitrn = 0;
let gameOver = false;

function makeBubbles() {
  const pBottom = document.getElementById("pbottom");
  pBottom.innerHTML = ""; // Clear previous bubbles

  for (let i = 0; i < 60; i++) {
    const rn = Math.floor(Math.random() * 10);
    const div = document.createElement("div");
    div.textContent = rn;
    div.classList.add("bubble");
    pBottom.appendChild(div);
  }
}

function runTimer() {
  let timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timerVal").textContent = timer;
    } else {
      clearInterval(timerint);
      gameOver = true;
      document.getElementById("pbottom").innerHTML =
        "<h1 style='color:black; text-align:center;'>Game Over</h1>";
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.getElementById("hitVal").textContent = hitrn;
}

function updateScore() {
  score += 10;
  document.getElementById("scoreVal").textContent = score;
}

// Event listener using delegation
document.querySelector("#pbottom").addEventListener("click", (e) => {
  if (gameOver) return;

  if (e.target.classList.contains("bubble")) {
    const clickedNumber = Number(e.target.textContent);

    if (clickedNumber === hitrn) {
      updateScore();
      makeBubbles();
      getNewHit()
    }
  }
});

// Start the game
makeBubbles();
runTimer();
getNewHit();
