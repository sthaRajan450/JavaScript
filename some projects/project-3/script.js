const questions = [
  {
    question: "Which is the smallest country in the world by area?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Malta", correct: false },
      { text: "San Marino", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Platinum", correct: false },
    ],
  },
  {
    question: "Which ocean is the deepest in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Gold", correct: false },
      { text: "Oxalate", correct: false },
    ],
  },
  {
    question: "Which is the most spoken language in the world?",
    answers: [
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Spanish", correct: false },
      { text: "Hindi", correct: false },
    ],
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "South America", correct: false },
      { text: "Europe", correct: false },
    ],
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Camel", correct: true },
      { text: "Horse", correct: false },
      { text: "Donkey", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which is the national flower of Nepal?",
    answers: [
      { text: "Rose", correct: false },
      { text: "Sunflower", correct: false },
      { text: "Rhododendron", correct: true },
      { text: "Lotus", correct: false },
    ],
  },
  {
    question: "Which is the biggest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "Which bird is known for its ability to mimic human speech?",
    answers: [
      { text: "Eagle", correct: false },
      { text: "Parrot", correct: true },
      { text: "Owl", correct: false },
      { text: "Peacock", correct: false },
    ],
  },
  {
    question: "Which instrument is used to measure atmospheric pressure?",
    answers: [
      { text: "Thermometer", correct: false },
      { text: "Barometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Altimeter", correct: false },
    ],
  },
  {
    question: "Which is the most abundant gas in Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which is the slowest animal in the world?",
    answers: [
      { text: "Tortoise", correct: false },
      { text: "Snail", correct: false },
      { text: "Sloth", correct: true },
      { text: "Koala", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  resetState();
  showQuestion();
}

function showQuestion() {
  resetState(); 

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++; 
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz(); 
  }
});

startQuiz();

