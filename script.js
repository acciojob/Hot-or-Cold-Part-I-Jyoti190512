//your code here
let secretNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = null;
let previousDifference = null;

function checkGuess() {
  console.log("Checking guess...");
  
  let guess = parseInt(document.getElementById('guess').value);
  let responseElement = document.getElementById('respond');

  console.log("Guess:", guess);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    responseElement.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  console.log("Secret Number:", secretNumber);
  console.log("Previous Guess:", previousGuess);
  console.log("Previous Difference:", previousDifference);
  
  if (previousGuess === null) {
    if (guess < secretNumber) {
      responseElement.textContent = "Guess higher";
    } else if (guess > secretNumber) {
      responseElement.textContent = "Guess lower";
    } else {
      responseElement.textContent = "Congratulations! You guessed the number!";
    }
  } else {
    let currentDifference = Math.abs(guess - secretNumber);

    if (currentDifference < previousDifference) {
      if (guess < secretNumber) {
        responseElement.textContent = "Getting hotter, guess higher";
      } else if (guess > secretNumber) {
        responseElement.textContent = "Getting hotter, guess lower";
      }
    } else {
      if (guess < previousGuess) {
        responseElement.textContent = "Guess higher";
      } else if (guess > previousGuess) {
        responseElement.textContent = "Guess lower";
      }
    }
  }

  previousGuess = guess;
  if (previousGuess !== null) {
    previousDifference = Math.abs(previousGuess - secretNumber);
  }
}

