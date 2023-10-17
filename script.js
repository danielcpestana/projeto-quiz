let currentQuestion = 0;
let score = 0;

const questions = [
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
        question: "Qual é a importância da lavagem frequente das mãos na prevenção da COVID-19?",
        choices: [
            "Manter as mãos quentes",
            "Eliminar vírus e bactérias",
            "Deixar a pele mais macia",
            "Prevenir dores de cabeça"
        ],
        correctAnswer: "Eliminar vírus e bactérias"
    },
    {
        question: "Qual é a distância recomendada para o distanciamento social?",
        choices: [
            "1 metro",
            "3 metros",
            "5 centímetros",
            "2 metros"
        ],
        correctAnswer: "2 metros"
    },
    {
        question: "O que é um sintoma comum da COVID-19 em relação à respiração?",
        choices: [
            "Respiração mais fácil",
            "Dificuldade para respirar",
            "Aumento do apetite",
            "Cansaço extremo"
        ],
        correctAnswer: "Dificuldade para respirar"
    },
    {
        question: "Qual é o nome das vacinas que foram desenvolvidas para prevenir a COVID-19?",
        choices: [
            "CovidShield e Covaxin",
            "Vaxzevria e Coronavac",
            "Pfizer-BioNTech e Moderna",
            "Tylenol e Advil"
        ],
        correctAnswer: "Pfizer-BioNTech e Moderna"
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
    // Adicione mais perguntas aqui
];


function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    if (currentQuestion < questions.length) {
        questionElement.textContent = `Pergunta ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
        choicesElement.innerHTML = "";

        questions[currentQuestion].choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => checkAnswer(choice);
            choicesElement.appendChild(document.createElement("li")).appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    displayQuestion();
}

function showResult() {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const resultElement = document.getElementById("result");

    questionContainer.style.display = "none";
    resultContainer.style.display = "block";

    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        const questionContainer = document.getElementById("question-container");
        const resultContainer = document.getElementById("result-container");

        questionContainer.style.display = "block";
        resultContainer.style.display = "none";

        displayQuestion();
    }
}
function returnToStart() {
    currentQuestion = 0; // Define a pergunta atual de volta para 0.
    score = 0; // Reinicia a pontuação.
    displayQuestion(); // Mostra a primeira pergunta.
    
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");

    questionContainer.style.display = "block";
    resultContainer.style.display = "none";
}

function startQuiz() {
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");

    startScreen.style.display = "none";
    quizScreen.style.display = "block";

    displayQuestion();
}


displayQuestion();
