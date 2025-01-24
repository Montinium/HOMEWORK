// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 0;

document.getElementById("guessForm").onsubmit = function (e) {
    e.preventDefault();
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    let message = "";
    let resultClass = "";
    if (guess < randomNumber) {
        message = `Too low! Try again. Attempts: ${attempts}`;
        resultClass = "error";
    } else if (guess > randomNumber) {
        message = `Too high! Try again. Attempts: ${attempts}`;
        resultClass = "error";
    } else {
        score = 100 - attempts * 10;
        message = `🎉 Congratulations! You guessed it in ${attempts} attempts! Your score is ${score}.`;
        resultClass = "success";
        document.getElementById("resetGame").style.display = "inline";
    }

    document.getElementById("resultText").textContent = message;
    document.getElementById("resultText").className = resultClass;
    document.getElementById("result").style.display = "block";
    document.getElementById("scoreText").textContent = `Score: ${score}`;

    if (attempts >= 10 && guess !== randomNumber) {
        document.getElementById("resultText").textContent = "Game over! You've used all your attempts.";
        document.getElementById("resultText").className = "error";
        document.getElementById("result").style.display = "block";
        document.getElementById("guessForm").style.display = "none";
        document.getElementById("resetGame").style.display = "inline";
    }
};

document.getElementById("resetGame").onclick = function () {
    location.reload();
};