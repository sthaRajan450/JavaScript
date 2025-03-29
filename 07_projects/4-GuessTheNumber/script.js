let randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;
const maxGuesses = 10; 

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100!");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (guess === randomNumber) {
      displayMessage("🎉 You guessed it right!");
      endGame();
    } else if (numGuess >= maxGuesses) {
      displayMessage(`❌ Game Over! The correct number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess < randomNumber) {
    displayMessage("📉 Number is too low");
  } else {
    displayMessage("📈 Number is too high");
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = ""; 
  guessSlot.innerHTML += ` ${guess},`;
  remaining.innerHTML = `${maxGuesses - numGuess}`; 
  numGuess++; 
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "true");

  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

  if (!startOver.contains(p)) {
    startOver.appendChild(p);
  }

  playGame = false;
  document.querySelector("#newGame").addEventListener("click", newGame);
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;

  guessSlot.innerHTML = "";
  remaining.innerHTML = `${maxGuesses - numGuess}`;
  lowOrHi.innerHTML = "";
  userInput.removeAttribute("disabled");

  if (startOver.contains(p)) {
    startOver.removeChild(p);
  }

  playGame = true;
}
