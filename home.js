let secretNumber;
let attemptsLeft;
const maxAttempts = 3;

function startGame() {
    secretNumber = generateRandomNumber();
    attemptsLeft = maxAttempts;
    document.getElementById('retryButton').disabled = true;
    document.getElementById('result').textContent = '';
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() { 
    const guessInput = document.getElementById('guessInput').value;
    const resultElement = document.getElementById('result');

    if (attemptsLeft > 0) {
        const userGuess = parseInt(guessInput);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            resultElement.textContent = 'Please enter a valid number between 1 and 10.';
        } else {
            attemptsLeft--;

            if (userGuess === secretNumber) {
                resultElement.textContent = 'Congratulations! You guessed the correct number!';
                document.getElementById('retryButton').disabled = false;
            } else {
                if (attemptsLeft === 0) {
                    resultElement.textContent = `Out of attempts! The correct number was ${secretNumber}.`;
                    document.getElementById('retryButton').disabled = false;
                } else {
                    const higherOrLower = userGuess < secretNumber ? 'higher' : 'lower';
                    resultElement.textContent = `Incorrect! Try a ${higherOrLower} . Attempts left: ${attemptsLeft}`;
                }
            }
        }
    }

    if (attemptsLeft === 0 && userGuess !== secretNumber) {
        resultElement.textContent = `Out of attempts! The correct number was ${secretNumber}.`;
        document.getElementById('retryButton').disabled = false;
    }
}

function resetGame() {
    startGame();
    document.getElementById('guessInput').value = '';
}

// Start the game when the page loads
window.onload = startGame;
