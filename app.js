"use strict";

let randomNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

document.querySelector(".try").addEventListener("click", function (e) {
  let guessingNumber = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = guessingNumber;

  if (!guessingNumber) {
    document.querySelector(".message").textContent = "No number provided!";
  } else if (guessingNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct!!!";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent =
        "Highscore: " + highscore;
    }
  } else if (guessingNumber < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = "Score: " + score;
    } else {
      document.querySelector(".message").textContent = "Game over!";
      document.querySelector(".score").textContent = "Score: " + 0;
    }
  } else if (guessingNumber > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = "Score: " + score;
    } else {
      document.querySelector(".score").textContent = "Score: " + 0;
      document.querySelector(".message").textContent = "Game over!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function (e) {
  randomNumber = generateRandomNumber();
  score = 20;
  document.querySelector(".score").textContent = "Score: " + score;
  document.querySelector(".message").textContent = "Let's try!";
  document.querySelector(".number").textContent = "Your number!";
  document.querySelector(".guess").value = "";
});

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
