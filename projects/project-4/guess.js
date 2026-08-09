const randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#sbt");
const userInput = document.querySelector("#userInput");
const prevGuess = document.querySelector("#prevGuess");
const remainingGuesses = document.querySelector("#remainingGuesses");
const result = document.querySelector("#score");

const previousGuesses = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please provide a valid number");
  }
  if (guess < 1 || guess > 100) {
    alert("Please provide a number more than 1 and less than 100");
  } else {
    previousGuesses.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      endGame();

      displayMessage("Game Over ❌");
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("You guessed it right ✅. Game over");
    endGame();
  } else if (guess < randomNum) {
    displayMessage("You guesse is tooooo low ❌.");
  } else if (guess > randomNum) {
    displayMessage("You guessed it toooooo high ❌.");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess},`;
  numGuesses++;
  remainingGuesses.innerHTML = `${10 - numGuesses + 1}`;
}

function displayMessage(message) {
  result.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  //
  playGame = false;
  submit.dsabled = true;
  displayMessage("Game Over ❌. No guesses remains");
}
