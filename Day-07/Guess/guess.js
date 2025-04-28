/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number,
   you will tell user if the entered number is lower or higher. With this information,
   user will change the number and finally guess the right number. You also need to 
   show the number of attempts made by users to reach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prompt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue
//  a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again


// 1. set constant number for secret number
const minNumber = 1;
const maxNumber = 10;

function playingSecretNumberGame() {

  // Welcome message
  console.log("Welcome to the Number Guessing Game!");
  console.log("Guess the Number between 1 to 10.");

  // 2. random number generate for secret number
  const secretNumber = Math.floor(Math.random() * maxNumber) + 1;

  // 3. attempts and guess number(let for keep changing the value)
  let  attempts = 0;
  let guess = null;

  // 4. while loop 
  while(guess !== secretNumber) {
    // 5. add prompt as a guess value
    const guessPrompt = prompt("Enter your guess number: ");
    guess = parseInt(guessPrompt);

    // to show guess number and secret number for testing
    // console.log(`Guess number is ${guess}`);
    // console.log(`Secret number is ${secretNumber}`);

    // 6. validation if guess input value isn't match
    if(isNaN(guess) || guess > maxNumber || guess < minNumber) {
      console.log(`Invalid input, please enter a number between ${minNumber} and ${maxNumber}.`);
      continue;
    }

    // 7. increase attempts
    attempts ++;

    // 8. condition for less/greater or matched number
    if (guess > secretNumber) {
      console.log("Too High! Try Again.");
    } else if (guess < secretNumber) {
      console.log("Too Low! Try Again.");
    } else {
      console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
      break;
    }
  }
  // 9. playAgain prompt
  const playAgainPrompt = prompt("Do you want to play again? yes/no");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  // 10. condition for play again prompt
  if(playAgain === "yes") {
    playingSecretNumberGame();
  } else {
    console.log("Thank You for playing! See you next time.");
  }
}
// call the function to start the game
playingSecretNumberGame();