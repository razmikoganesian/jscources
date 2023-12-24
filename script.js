"use strict";
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1; // generate number from 1 to 20

const check = document.querySelector(".check");
const restart = document.querySelector(".again");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

check.addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value); // take a value from input field

  // when no input number
  if (!guessNumber) {
    displayMessage("Please enter a number ⛔️");
    alert("Please enter a number");
    // when number is wrong
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? "Too much ⬆️" : "Too less ⬇️"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game 😔");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF7F7F";
    }
  }
  // when number correct
  else if (guessNumber === secretNumber) {
    displayMessage("Corect number 🥳");
    document.querySelector("body").style.backgroundColor = "#00ab41";
    document.querySelector(".number").style.width = "200px";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

restart.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "100px";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
