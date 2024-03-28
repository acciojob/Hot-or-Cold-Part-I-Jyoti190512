//your code here
// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Variable to store the previous guess
let previousGuess = null;

// Variable to store the difference between the previous guess and the secret number
let previousDifference = null;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    let guess = parseInt(document.getElementById('guess').value);

    // Get the response paragraph element
    let responseElement = document.getElementById('response');

    // Check if the guess is valid
    if (isNaN(guess) || guess < 1 || guess > 100) {
        responseElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Check if this is the first guess
    if (previousGuess === null) {
        // Compare the guess with the secret number and provide initial feedback
        if (guess < secretNumber) {
            responseElement.textContent = "Guess higher";
        } else if (guess > secretNumber) {
            responseElement.textContent = "Guess lower";
        } else {
            responseElement.textContent = "Congratulations! You guessed the number!";
        }
    } else {
        // Calculate the difference between the current guess and the secret number
        let currentDifference = Math.abs(guess - secretNumber);

        // Check if the current guess is getting closer to the secret number
        if (currentDifference < previousDifference) {
            // Provide feedback based on whether the guess is higher or lower than the previous guess
            if (guess < secretNumber) {
                responseElement.textContent = "Getting hotter, guess higher";
            } else if (guess > secretNumber) {
                responseElement.textContent = "Getting hotter, guess lower";
            }
        } else {
            // Provide feedback based on whether the guess is higher or lower than the previous guess
            if (guess < previousGuess) {
                responseElement.textContent = "Guess higher";
            } else if (guess > previousGuess) {
                responseElement.textContent = "Guess lower";
            }
        }
    }

    // Update the previous guess and difference for the next iteration
    previousGuess = guess;
    if (previousGuess !== null) {
        previousDifference = Math.abs(previousGuess - secretNumber);
    }
}


