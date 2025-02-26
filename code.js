// Chooses random float as the computer's choice.
let computerChoice = Math.random();

// Prompts user to enter their choice.
let humanChoice = prompt("Enter your choice of rock, paper, or scissors.");

// Initializes human score, starting from 0.
let humanScore = 0;

// Initializes computer score, starting from 0.
let computerScore = 0;


// Takes random float between 0 and 1 to assign rock, paper, scissors as the computer's choice.
function getComputerChoice() {
    if (computerChoice <= 0.34) {
        console.log("Computer chooses rock");
    } else if (computerChoice > 0.34 && computerChoice <= 0.67) {
        console.log("Computer chooses paper");
    } else if (computerChoice > 0.67) {
        console.log("Computer chooses scissors");
    }
}

// Prompts user to input "rock," "paper," or "scissors" to play against computer.
function getHumanChoice() {
    if (humanChoice === "rock") {
        console.log("You chose rock.");
    } else if (humanChoice === "paper") {
        console.log("You chose paper.");
    } else if (humanChoice === "scissors") {
        console.log("You chose scissors.");
    } else {
        console.log("I didn't quite catch that.")
    }
}



getHumanChoice(humanChoice);
getComputerChoice(computerChoice);