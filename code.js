// Chooses random float as the computer's choice.
let computerAnswer = Math.random();

// Prompts user to enter their choice.
let humanAnswer = prompt("Enter your choice of rock, paper, or scissors.");

// Initializes human score, starting from 0.
let humanScore = 0;

// Initializes computer score, starting from 0.
let computerScore = 0;


// Takes random float between 0 and 1 to assign rock, paper, scissors as the computer's choice.
function getComputerChoice() {
    if (computerAnswer <= 0.34) {
        console.log("Computer chooses rock");
    } else if (computerAnswer > 0.34 && computerAnswer <= 0.67) {
        console.log("Computer chooses paper");
    } else if (computerAnswer > 0.67) {
        console.log("Computer chooses scissors");
    }
}

// Prompts user to input "rock," "paper," or "scissors" to play against computer.
function getHumanChoice() {
    if (humanAnswer.toLowerCase() === "rock") {
        console.log("You chose rock.");
    } else if (humanAnswer.toLowerCase() === "paper") {
        console.log("You chose paper.");
    } else if (humanAnswer.toLowerCase() === "scissors") {
        console.log("You chose scissors.");
    } else {
        console.log("I didn't quite catch that.")
    }
}

// Compares human answer to computer answer to evaluate who won the round.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice <= 0.34) {
        console.log("It's a tie.");
    } else if (humanChoice === "rock" && (computerChoice > 0.34) && (computerChoice <= 0.67)) {
        console.log("Paper beats rock. Computer wins!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice > 0.67) {
        console.log("Rock beats scissors. Player wins!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice <= 0.34) {
        console.log("Paper beats rock. Player wins!");
        humanScore++;
    } else if (humanChoice === "paper" && (computerChoice > 0.34) && (computerChoice <= 0.67)) {
        console.log("It's a tie.");
    } else if (humanChoice === "paper" && computerChoice > 0.67) {
        console.log("Scissors beats paper. Computer wins!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice <= 0.34) {
        console.log("Rock beats paper. Computer Wins!");
        computerScore++;
    } else if (humanChoice === "scissors" && (computerChoice > 0.34) && (computerChoice <= 0.67)) {
        console.log("Scissors beats paper. Player wins!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerScore > 0.67) {
        console.log("It's a tie.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);