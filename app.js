"use strict";

// DOM elements
let $message = document.querySelector(".message");
let $highscore = document.querySelector(".highscore");
let $score = document.querySelector(".score");
let $number = document.querySelector(".number");
let $guess = document.querySelector(".guess");
let $tryBtn = document.querySelector(".try");
let $resetBtn = document.querySelector(".again");

// Other variables
let randomNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

// Start the game
$tryBtn.addEventListener("click", function (e) {
  let guessingNumber = Number($guess.value);
  setValueToDomElement($number, guessingNumber);

  if (!guessingNumber) {
    setValueToDomElement($message, "No number provided!");
  } else if (guessingNumber === randomNumber) {
    setValueToDomElement($message, "Correct!!!");
    if (score > highscore) {
      highscore = score;
      setValueToDomElement($highscore, "Highscore: " + highscore);
    }
  } else if (guessingNumber !== randomNumber) {
    if (score > 1) {
      setValueToDomElement(
        $message,
        guessingNumber > randomNumber ? "Too High!" : "Too Low!"
      );
      score--;
      setValueToDomElement($score, "Score: " + score);
    } else {
      setValueToDomElement($message, "Game over!");
      setValueToDomElement($score, "Score: " + 0);
    }
  }
});

// Reset the game
$resetBtn.addEventListener("click", function (e) {
  randomNumber = generateRandomNumber();
  score = 20;
  setValueToDomElement($score, "Score: " + score);
  setValueToDomElement($message, "Let's play!");
  setValueToDomElement($number, "Your number!");
  setValueToDomElement($guess, "", true);
});

// Helper functions
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function setValueToDomElement(element, elValue, isInput = false) {
  if (isInput) {
    element.value = elValue;
  }
  element.textContent = elValue;
}
