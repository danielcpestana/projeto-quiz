document.addEventListener("DOMContentLoaded", function () {
    const welcomeContainer = document.getElementById("welcome-container");
    const questionContainer = document.getElementById("question-container");
    const startButton = document.getElementById("start-button");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");
    const answerFeedback = document.getElementById("answer-feedback");
    const submitButton = document.getElementById("submit-button");
    const restartButton = document.getElementById("restart-button");

    let score = 0;
    let currentQuestionIndex = 0;

    const questions = [
        {
            question: "Qual é a capital do Brasil?",
            answers: [
                { text: "Rio de Janeiro", correct: false },
                { text: "São Paulo", correct: false },
                { text: "Brasília", correct: true },
                { text: "Salvador", correct: false }
            ]
        },
        {
            question: "Qual é o maior planeta do sistema solar?",
            answers: [
                { text: "Vênus", correct: false },
                { text: "Terra", correct: false },
                { text: "Júpiter", correct: true },
                { text: "Marte", correct: false }
            ]
        }
    ];

    // Função para exibir a próxima pergunta
    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            const questionElement = document.getElementById("question");
            const optionsElement = document.getElementById("options");

            questionElement.querySelector("h2").textContent = `Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
            optionsElement.innerHTML = "";

            currentQuestion.answers.forEach((answer, index) => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = "answer";
                input.value = index;
                label.appendChild(input);
                label.appendChild(document.createTextNode(` ${answer.text}`));
                optionsElement.appendChild(label);
            });

            submitButton.classList.remove("correct-answer", "wrong-answer");
            answerFeedback.textContent = "";
            submitButton.addEventListener("click", checkAnswer);
        } else {
            showResult();
        }
    }

    // Função para verificar a resposta do usuário
    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');

        if (!selectedOption) {
            return;
        }

        const selectedAnswerIndex = parseInt(selectedOption.value);
        const currentQuestion = questions[currentQuestionIndex];

        if (currentQuestion.answers[selectedAnswerIndex].correct) {
            score++;
            answerFeedback.textContent = "Resposta Correta!";
        } else {
            answerFeedback.textContent = "Resposta Errada!";
        }

        const optionsLabels = document.querySelectorAll('input[name="answer"] + label');
        optionsLabels[selectedAnswerIndex].classList.add(
            currentQuestion.answers[selectedAnswerIndex].correct ? "correct-answer" : "wrong-answer"
        );

        currentQuestionIndex++;

        // Adicione este trecho para verificar se há mais perguntas
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    // Função para exibir o resultado do quiz
    function showResult() {
        questionContainer.style.display = "none";
        resultContainer.styledisplay = "block"; // Corrigido "style display" para "style.display"
        scoreElement.textContent = score;
        restartButton.style.display = "block";
        submitButton.removeEventListener("click", checkAnswer);
    }

    // Função para recomeçar o quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
        resultContainer.style.display = "none";
        restartButton.style.display = "none";
        answerFeedback.textContent = "";
    }

    // Adicionando eventos aos botões
    startButton.addEventListener("click", function () {
        welcomeContainer.style.display = "none";
        questionContainer.style.display = "block";
        showQuestion();
    });

    restartButton.addEventListener("click", restartQuiz);
});
