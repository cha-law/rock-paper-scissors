// FUNCTIONS

// Returns rock, paper or scissors.
function getComputerChoice() { 
    let comImage = document.querySelector(".computer-img")
    result = Math.random() * 3
    if (result > 2) {
        comImage.src = "./images/icons8-lime-stone-96.png"
        return "ROCK";
    } else if (result > 1) {
        comImage.src = "./images/icons8-paper-waste-96.png"
        return "PAPER";
    } else {
        comImage.src = "./images/icons8-scissors-96.png"
        return "SCISSORS";
    }
}

// Returns choice from the user.
function getHumanChoice(target) {
    let humanImage = document.querySelector(".human-img")
    if ((target === document.querySelector("#rock")) || (target.parentNode === document.querySelector("#rock"))) {
        humanImage.src = "./images/icons8-lime-stone-96.png"
        return "ROCK";
    } else if ((target === document.querySelector("#paper")) || (target.parentNode === document.querySelector("#paper"))) {
        humanImage.src = "./images/icons8-paper-waste-96.png"
        return "PAPER";
    } else if ((target === document.querySelector("#scissors")) || (target.parentNode === document.querySelector("#scissors"))) {
        humanImage.src = "./images/icons8-scissors-96.png"
        return "SCISSORS";
    } else {
        return "INVALID";
    }
}

// Plays one round of RPS.
function playRound(humanChoice, computerChoice) {
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
    
    let outcomeText = document.querySelector(".outcome-text")
    let buttons = document.querySelectorAll("button");

    let i = 1;

    // Getting the result of the round. (playing the round)

    document.onclick = function(event) {

        if (i >= 5) {
            document.querySelector(".round-text").textContent = `Final round.`;
            endGame(humanScore, computerScore);
            return;
        }

        let humanChoice = getHumanChoice(event.target)

        if (humanChoice === "INVALID") {
            return;
        } else {
            result = playRound(humanChoice, getComputerChoice());

            // Checking the win condition, and outputting the corresponding message.
            if (result === "WIN") {
                outcomeText.textContent = `You won!`;
                humanScore++;
                document.querySelector(".human-score").textContent = String(humanScore + " points");
            } else if (result === "LOSE") {
                outcomeText.textContent = `You lost.`;
                computerScore++;
                document.querySelector(".computer-score").textContent = String(computerScore + " points");
            } else if (result === "DRAW") {
                outcomeText.textContent = "It's a draw!";
            } else {
                console.log("Something went wrong.");
            }
            document.querySelector(".round-text").textContent = `Round ${i}.`;
            i++;
        }
    }
}

function endGame(humanScore, computerScore) {
    // The end of the game: collecting the scores and declaring a winner.
    if (humanScore === computerScore) {
        document.querySelector(".outcome-text").textContent = `It was a draw. Good game.`;
    } else if (humanScore > computerScore) {
        document.querySelector(".outcome-text").textContent = `You are the winner!`;
    } else {
        document.querySelector(".outcome-text").textContent = `You are a loser!`;
    }
    return;
}

// Running the game.
playGame();


