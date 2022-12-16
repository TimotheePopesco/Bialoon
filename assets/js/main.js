// Questions

let questionsData = [
    {
        text: "How many people have bipolarity ?(1)",
        answers: [
            {
                text: "100 000",
                isCorrect: false
            },
            {
                text: "100 000 000",
                isCorrect: true
            },
            {
                text: "10 000 000",
                isCorrect: false
            },
            {
                text: "1 000 000",
                isCorrect: false
            },
        ]
    },
    {
        text: "How many people have bipolarity ?(2)",
        answers: [
            {
                text: "100 000",
                isCorrect: false
            },

            {
                text: "10 000 000",
                isCorrect: false
            },
            {
                text: "100 000 000",
                isCorrect: true
            },
            {
                text: "1 000 000",
                isCorrect: false
            },
        ]
    },
    {
        text: "How many people have bipolarity ?(3)",
        answers: [
            {
                text: "100 000",
                isCorrect: false
            },
            
            {
                text: "10 000 000",
                isCorrect: false
            },
            {
                text: "1 000 000",
                isCorrect: false
            },
            {
                text: "100 000 000",
                isCorrect: true
            },
        ]
    },
    {
        text: "How many people have bipolarity ?(4)",
        answers: [
            {
                text: "100 000 000",
                isCorrect: true
            },
            {
                text: "100 000",
                isCorrect: false
            },

            {
                text: "10 000 000",
                isCorrect: false
            },
            {
                text: "1 000 000",
                isCorrect: false
            },
        ]
    },
    {
        text: "How many people have bipolarity ?(5)",
        answers: [
            {
                text: "100 000",
                isCorrect: false
            },
            {
                text: "10 000 000",
                isCorrect: false
            },
            {
                text: "1 000 000",
                isCorrect: false
            },
            {
                text: "100 000 000",
                isCorrect: true
            },
        ]
    },
    {
        text: "How many people have bipolarity ?(6)",
        answers: [
            {
                text: "100 000",
                isCorrect: false
            },
            {
                text: "100 000 000",
                isCorrect: true
            },
            {
                text: "10 000 000",
                isCorrect: false
            },
            {
                text: "1 000 000",
                isCorrect: false
            },
        ]
    },
];
  
// variables initialization
let questions = [];
let score = 0, answeredQuestions = 0;
let appContainer = document.getElementById("questions-container");
let scoreContainer = document.getElementById("score-container");
let startBtn = document.getElementById('start-btn');
scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;

/**
 * Shuffles array in place. ES6 version
 * @param {Array} arr items An array containing the items.
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(questionsData);

// creating questions
for (var i = 0; i < questionsData.length; i++) {
  let question = new Question({
    text: questionsData[i].text,
    answers: questionsData[i].answers
  });

  questions.push(question);
}

startBtn.onclick = (ev) => {
    if (!document.querySelector('.question.popup.active')){
        appContainer.appendChild(questions[0].create());
        questions[0].html.classList.add('popup', 'active');
    }
}


document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
        score++;
    }

    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();

    if (answeredQuestions == questions.length) {
        setTimeout(function () {
            alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
        }, 100);
    } else{
        let currentQuestion = document.querySelector('.question.popup.active');
        currentQuestion.classList.add('fadeout');
        setTimeout(() => {
            appContainer.removeChild(currentQuestion);
            appContainer.appendChild(questions[answeredQuestions].create());
            questions[answeredQuestions].html.classList.add('popup', 'active');
        }, 1000);
    }
});

console.log(questions, questionsData);
