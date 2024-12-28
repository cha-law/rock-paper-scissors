// FUNCTIONS

// Returns rock, paper or scissors.
function getComputerChoice() { 
    result = Math.random() * 3
    if (result > 2) {
        return "ROCK";
    } else if (result > 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

// Returns choice from the user.
function getHumanChoice() {
    choice = prompt("Choose from rock, paper, or scissors: ");

    return choice;
}

// Plays one round of RPS.
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase(); // Making the user input case-insensitive.

    if (humanChoice === computerChoice) { // Checking for a draw before other checks.
        return "DRAW";
        
    // Human chooses rock.
    } else if (humanChoice === "ROCK") { 

        if (computerChoice == "PAPER") { // H: Rock, C: Paper
            return "LOSE";
        } else { // H: Rock, C: Scissors
            return "WIN";
        }
    // Human chooses paper.
    } else if (humanChoice === "PAPER") { 

        if (computerChoice == "SCISSORS") { // H: Paper, C: Scissors
            return "LOSE";
        } else { // H: Paper, C: Rock
            return "WIN";
        }
    // Human chooses paper.
    } else if (humanChoice === "SCISSORS") { 

        if (computerChoice == "ROCK") { // H: Scissors, C: Rock
            return "LOSE";
        } else { // H: Scissors, C: Paper
            return "WIN";
        }
    } else {
        return 
    }
}

// Function to start the game.
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    // Loops the code 5 times.
    for (let i = 1; i < 6; i++) {

        // Outputs the round number.
        console.log(`Round ${i}.`);

        // Getting the result of the round. (playing the round)
        let computerChoice = getComputerChoice()
        result = playRound(getHumanChoice(), computerChoice);

        // Checking the win condition, and outputting the corresponding message.
        if (result === "WIN") {
            console.log(`You won! The computer chose ${computerChoice}.`);
            humanScore++;
        } else if (result === "LOSE") {
            console.log(`You lost. The computer chose ${computerChoice}`);
            computerScore++;
        } else if (result === "DRAW") {
            console.log("It's a draw!");
        } else {
            console.log("Something went wrong.")
        }
    }

    // The end of the game: collecting the scores and declaring a winner.
    if (humanScore === computerScore) {
        console.log(`It was a draw. Good game.\nYou got ${humanScore} points.\nThe computer got ${computerScore} points.`)
    } else if (humanScore > computerScore) {
        console.log(`You are the winner! Well done.\nYou got ${humanScore} points.\nThe computer got ${computerScore} points.`)
    } else {
        console.log(`You lost. Better luck next time.\nYou got ${humanScore} points.\nThe computer got ${computerScore} points.`)
    }

}

// Running the game.
playGame();


