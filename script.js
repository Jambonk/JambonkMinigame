function playStartSound() {
    const startSound = document.getElementById("start-sound");
    startSound.play();
    startSound.onended = () => {
        showQuiz();
    };
}

function showQuiz() {
    document.querySelector(".center").style.display = "none";
    document.body.innerHTML += `
        <div class="quiz-container">
            <div class="question">Who is the creator of JavaScript?</div>
            <div class="answer" onclick="checkAnswer(true)">Brendan Eich</div>
            <div class="answer" onclick="checkAnswer(false)">Elon Musk</div>
            <div class="answer" onclick="checkAnswer(false)">Mark Zuckerberg</div>
            <div class="answer" onclick="checkAnswer(false)">Bill Gates</div>
        </div>
    `;
}

function checkAnswer(isCorrect) {
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    if (isCorrect) {
        correctSound.play();
        alert("Correct!");
    } else {
        wrongSound.play();
        alert("Wrong answer.");
    }
}