/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human.
    Once Human will select Rock, Paper, or Scissors and in the 
    next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection
    to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

console.log("Getting Started with The Rock 🪨, Paper 🧻, or Scissors ✂️ Game");
function playRPSGame() {
    // 1. get user choice
    const userChoice = prompt("Enter The Rock 🪨, Paper 🧻, or Scissors ✂️").toLowerCase();
    if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        console.log("Please, input a valid Prompt to Play!");
        return playRPSGame();
    }

    // 2. set computer choice
    let computerChoice;
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    
    // 3. condition to get value from computer's choice
    if(randomChoice === 1) {
        computerChoice = "rock";
    }else if(randomChoice === 2) {
        computerChoice = "paper";
    }else {
        computerChoice = 'scissors';
    }
    
    console.log("User selected -", userChoice.toUpperCase());
    console.log("Computer selected -", computerChoice.toUpperCase());

    // 4. condition apply to decided the WINNER.
    if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Yahoo...! I Win!!!");
    }
    else if(
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("Oh...no! Computer is the Winner!");
    }
    else {
        console.log("The Game is a Tie.");
    }

    // 5. play again with yes in the prompt
    const playAgainPrompt = prompt("Do you want to Play Again! (yes/no)").toLowerCase();
    const playAgain = playAgainPrompt ? playAgainPrompt : "no";
    if(playAgain === "yes") {
        playRPSGame();
    } else {
        console.log("Thank You for playing, See you next time!");
    }
}
playRPSGame();