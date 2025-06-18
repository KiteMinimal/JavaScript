const randomNumber = Math.round(Math.random() * 100 + 1);

const guessInput = document.querySelector("#guessInput");
const button = document.querySelector("button");
const result = document.querySelector(".result");
const guessRemain = document.querySelector("#guessRemain");
const prevGuess = document.querySelector("#prevGuess");
const reStart = document.querySelector("#restart")

let count = 10;
const prevGuesses = [];
let playGame = true

function checkGuess() {
  const guess = parseInt(guessInput?.value);
  prevGuesses.push(guess);
//   console.log(prevGuesses)

  if (count > 0 && playGame) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      result.textContent = "Please enter a valid number between 1 and 100.";
      count--;
      console.log(guessRemain);

      guessRemain.textContent = `Guessess Remaining: ${count}`;
      prevGuess.textContent = `Previous Guesses: ${prevGuesses}`;
      return;
    } else if (guess < randomNumber) {
      result.textContent = "Too low! Try again.";
      count--;
      guessRemain.textContent = `Guessess Remaining: ${count}`;
      prevGuess.textContent = `Previous Guesses: ${prevGuesses}`;
      return;
    } else if (guess > randomNumber) {
      result.textContent = "Too high! Try again.";
      count--;
      guessRemain.textContent = `Guessess Remaining: ${count}`;
      prevGuess.textContent = `Previous Guesses: ${prevGuesses}`;
      return;
    } else {
      result.textContent = "Congratulatons! You've guessed the number!";
      return;
    }
  } else {
    result.textContent = "Game Over! You've used all your guesses. Restart";
    prevGuesses.length = 0;
    prevGuess.textContent = `Previous Guesses: ${prevGuesses}`;
    playGame = false
    reStart.style.display = "inline"
    return;
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkGuess();
});
