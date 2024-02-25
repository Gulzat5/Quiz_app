const questions = [
  {
    question: "Топ:Тоголок",
    answers: [
      {
        text: "Тамга:биринчи",
        correct: false,
      },
      {
        text: "Кабырга:ийри",
        correct: true,
      },
      {
        text: "Байпак:жылуу",
        correct: false,
      },
      {
        text: "Бак:Чон",
        correct: false,
      },
    ],
  },
  {
    question: "Табак:кир",
    answers: [
      {
        text: "Табак:кетик",
        correct: true,
      },
      {
        text: "Табак:кооз",
        correct: false,
      },
      {
        text: "Табак чункур",
        correct: false,
      },
      {
        text: "Табак:чон",
        correct: false,
      },
    ],
  },
  {
    question: "Бир сындырым:нан",
    answers: [
      {
        text: "Бир ууртам:суу",
        correct: false,
      },
      {
        text: "Бир чымчым:туз",
        correct: false,
      },
      {
        text: "Бир кесим :эт",
        correct: true,
      },
      {
        text: "Бир узум :жузум",
        correct: false,
      },
    ],
  },
  {
    question: "Кумурска:уюк",
    answers: [
      {
        text: "Чээн:аю",
        correct: false,
      },
      {
        text: "Жоргомуш:желе",
        correct: false,
      },
      {
        text: "Ит:кепе",
        correct: true,
      },
      {
        text: "Кой:кезуу",
        correct: false,
      },
    ],
  },
];

const questionsElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextBtton = document.getElementById("next-button");

let currentQuestionINdex = 0;
let score = 0;

function startQuiz() {
  currentQuestionINdex = 0;
  score = 0;
  nextBtton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionINdex];
  let questionNo = currentQuestionINdex + 1;
  questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextBtton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtton.style.display = "block";
}
nextBtton.addEventListener("click", () => {
  if (currentQuestionINdex < questions.length) {
    handleNextBtton();
  } else {
    startQuiz();
  }
});
function showScore() {
  resetState();
  questionsElement.innerHTML = `Сен  ${questions.length}суроонон ${score} жооп бердин!`;
  nextBtton.innerHTML = "Play Again";
  nextBtton.style.display = "block";
}
function handleNextBtton() {
  currentQuestionINdex++;
  if (currentQuestionINdex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
startQuiz();
