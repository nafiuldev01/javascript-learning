const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector(".result");
let computerMove = pickComputerMove();

// computer move funciton

function pickComputerMove() {
  const randomNum = parseInt(Math.random() * 3 + 1);
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// Rock

rock.addEventListener("click", function (e) {
  computerMove = pickComputerMove();
  if (computerMove === "rock") {
    showMoves("👊", "👊");
    showResult("Draw 📍");
  } else if (computerMove === "paper") {
    showMoves("👊", "✋");
    showResult("You lose ❌");
  } else {
    showMoves("👊", "✌");
    showResult("You win ✅");
  }
});

// paper

paper.addEventListener("click", function (e) {
  computerMove = pickComputerMove();
  if (computerMove === "paper") {
    showMoves("✋", "✋");
    showResult("Draw 📍");
  } else if (computerMove === "scissor") {
    showMoves("✋", "✌");
    showResult("You lose ❌");
  } else {
    showMoves("✋", "👊");
    showResult("You win ✅");
  }
});

// scissor

scissor.addEventListener("click", function (e) {
  computerMove = pickComputerMove();
  if (computerMove === "scissor") {
    showMoves("✌", "✌");
    showResult("Draw 📍");
  } else if (computerMove === "rock") {
    showMoves("✌", "👊");
    showResult("You lose ❌");
  } else {
    showMoves("✌", "✋");
    showResult("You win ✅");
  }
});

function showMoves(userMove, computerMove) {
  result.innerHTML = ` <p>You = ${userMove} Computer = ${computerMove}</p>`;
}

function showResult(message) {
  result.innerHTML += `<p>${message}</p>`;
}
