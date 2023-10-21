
let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "Qual é o nome do vírus que causa a COVID-19?",
        choices: [
            "SARS-CoV-2",
            "H1N1",
            "Ebola",
            "HIV"
        ],
        correctAnswer: "SARS-CoV-2"
    },
    {
        question: "Quais são os sintomas comuns da COVID-19?",
        choices: [
            "Febre, tosse e dor de cabeça",
            "Dor de garganta e dor nas costas",
            "Náusea e vômito",
            "Dor nos olhos e coriza"
        ],
        correctAnswer: "Febre, tosse e dor de cabeça"
    },
    {
        question: "Qual é a principal forma de prevenção da COVID-19?",
        choices: [
            "Vacinação",
            "Uso de antibióticos",
            "Inalação de vapor",
            "Exercícios físicos intensos"
        ],
        correctAnswer: "Vacinação"
    },
    {
        question: "Quanto tempo deve durar o isolamento de alguém com COVID-19?",
        choices: [
            "2 dias",
            "5 dias",
            "10 dias",
            "14 dias"
        ],
        correctAnswer: "14 dias"
    },
    {
        question: "Qual é a principal forma de transmissão da COVID-19?",
        choices: [
            "Contato com superfícies contaminadas",
            "Transmissão pelo ar",
            "Insetos vetores",
            "Água contaminada"
        ],
        correctAnswer: "Transmissão pelo ar"
    },
    {
        question: "Quais são os sintomas mais comuns da COVID-19?",
        choices: [
            "Dor de estômago e febre alta",
            "Febre, tosse seca, perda de paladar e olfato",
            "Dor nas costas e dor de cabeça",
            "Erupção cutânea e náuseas"
        ],
        correctAnswer: "Febre, tosse seca, perda de paladar e olfato"
    },
    {
        question: "O uso de máscaras faciais é recomendado para quê?",
        choices: [
            "Proteger os olhos",
            "Evitar a transmissão de vírus",
            "Manter o rosto aquecido",
            "Prevenir o câncer de pele"
        ],
        correctAnswer: "Evitar a transmissão de vírus"
    },
    {
        question: "O que significa 'quarentena'?",
        choices: [
            "Um filme de ação",
            "Ficar em casa por 40 dias",
            "Isolamento de pessoas doentes",
            "Um período de 14 dias de isolamento para prevenir a propagação da doença"
        ],
        correctAnswer: "Um período de 14 dias de isolamento para prevenir a propagação da doença"
    },
    {
        question: "Qual grupo de idade tem maior risco de complicações graves pela COVID-19?",
        choices: [
            "Crianças",
            "Pessoas jovens e saudáveis",
            "Pessoas idosas",
            "Adolescentes"
        ],
        correctAnswer: "Pessoas idosas"
    },
    {
        question: "Quando a pandemia de COVID-19 foi oficialmente declarada pela OMS?",
        choices: [
            "Janeiro de 2020",
            "Março de 2020",
            "Dezembro de 2019",
            "Abril de 2020"
        ],
        correctAnswer: "Março de 2020"
    }

];

function startQuiz() {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");

    startScreen.style.display = "none";
    quizScreen.style.display = "block";

    displayQuestion();
}

// Vincule o evento de clique ao botão de início
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);


function displayQuestion() {
    clearButtonStyles();

    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const incorrectAnswerText = document.getElementById("incorrect-answer");
    const explanationContainer = document.getElementById("explanation-container");
    const nextButton = document.querySelector(".next-button");

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;

        choicesElement.innerHTML = "";

        questions[currentQuestion].choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => checkAnswer(choice);
            choicesElement.appendChild(document.createElement("li")).appendChild(button);
        });

        incorrectAnswerText.textContent = ""; // Limpar a resposta incorreta da pergunta anterior
        explanationContainer.style.display = "none";
        nextButton.style.display = "none"; // Esconder o botão "Próxima Pergunta"
    } else {
        showResult();
    }
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const choiceButtons = document.querySelectorAll("#choices button");
    const incorrectAnswerText = document.getElementById("incorrect-answer");
    const nextButton = document.querySelector(".next-button");
    const explanationContainer = document.getElementById("explanation-container");

    if (answer === correctAnswer) {
        score++;
        incorrectAnswerText.textContent = ""; // Limpar a resposta incorreta
        nextButton.style.display = "block"; // Mostrar o botão "Próxima Pergunta"

        // Mudar a cor do botão correto para verde
        choiceButtons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = "green";
            }
        });

        // Exibir mensagem de resposta correta
        explanationContainer.style.display = "block";
        explanationContainer.innerHTML = "Resposta correta!";
        explanationContainer.style.color = "green";
    } else {
        incorrectAnswerText.textContent = `Resposta incorreta. A resposta correta é: ${correctAnswer}`;
        nextButton.style.display = "block"; // Mostrar o botão "Próxima Pergunta"

        // Mudar a cor do botão errado para vermelho
        choiceButtons.forEach(button => {
            if (button.textContent === answer) {
                button.style.backgroundColor = "red";
            }
        });

        // Limpar a mensagem de resposta correta
        explanationContainer.style.display = "none";
    }
}


function nextQuestion() {
    currentQuestion++;
    displayQuestion();
}



function showResult() {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("result-container");
    const resultElement = document.createElement("h2");
    resultElement.classList.add("result-text");
    const restartButton = document.createElement("button");
    restartButton.classList.add("restart-button");
    restartButton.addEventListener("click", returnToStart);
    const resultImage = document.createElement("img"); // Adicione a tag <img> para a imagem
    resultImage.setAttribute("src", "imagens/covid.jpeg"); // Substitua pelo caminho da sua imagem
    resultImage.setAttribute("alt", "Imagem de resultado"); // Adicione um atributo alt para acessibilidade
    resultImage.classList.add("result-image");

    questionContainer.style.display = "none";

    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    resultContainer.appendChild(resultImage); // Adicione a imagem à div de resultado
    resultContainer.appendChild(resultElement);
    restartButton.textContent = "Recomeçar";
    resultContainer.appendChild(restartButton);

    // Ocultar o botão "Próxima Pergunta" na página de resultado
    const nextButton = document.querySelector(".next-button");
    nextButton.style.display = "none";

    questionContainer.insertAdjacentElement('afterend', resultContainer);
    resultContainer.style.display = "block";
}



function returnToStart() {
    location.reload();
}
// Atribua o evento de clique ao botão "Recomeçar" aqui, uma vez é suficiente.
// const restartButton = document.querySelector(".restart-button");
// restartButton.addEventListener("click", returnToStart);

function clearButtonStyles() {
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(button => {
        button.style.backgroundColor = '#467EEC';
    });
}



displayQuestion();