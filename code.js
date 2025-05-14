// Title Page Text
title = document.querySelector("h1");
title.style["text-align", "center"];

// Prompts user to make their choice.
const choicePrompt = document.querySelector("p");
const prompt = document.createElement("p");
choicePrompt.textContent = "Select your choice:";

// Declares answers as blank string.
let humanSelection = "";
let computerSelection = "";

// Initializes round counter, starting with one.
let roundNum = 1;

// Initializes human and computer scores.
let humanScore = 0;
let computerScore = 0;

// Adds score and round counters to UI
const scores = document.querySelector("ul");
const score1 = document.createElement("li");
const score2 = document.createElement("li");
const currentRound = document.createElement("li");
currentRound.textContent = `Round: ${roundNum}`;

scores.appendChild(score1);
scores.appendChild(score2);
scores.appendChild(currentRound);

score1.textContent = `Player Score: ${humanScore}`;
score2.textContent = `Computer Score: ${computerScore}`;

// Uses RNG to determine CPU answer
function getComputerSelection() {
    let computerAnswer = Math.random();
        if (computerAnswer <= 0.34) {
            computerSelection = "rock";
        } else if (computerAnswer > 0.34 && computerAnswer <= 0.67) {
           computerSelection = "paper";
        } else if (computerAnswer > 0.67) {
            computerSelection = "scissors";
        }
};   

// Adds Rock button for user selection and runs playRound() when clicked.
const buttons = document.querySelector("#buttons");
const rockBtn = document.createElement("button");

rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", () => {
    humanSelection = "rock";
        getComputerSelection();
        playRound(humanSelection, computerSelection);
    });

// Adds Paper button for user selection and runs RPS round when clicked.
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", () => {
    humanSelection = "paper";
        getComputerSelection();
        playRound(humanSelection, computerSelection);
    });

// Adds Scissors button for user selection and runs RPS round when clicked.
const scissorsBtn = document.createElement("button");

scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener("click", () => {
    humanSelection = "scissors";
        getComputerSelection();
        playRound(humanSelection, computerSelection);
    });

// Adds UI buttons
buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);

// Styles buttons.
rockBtn.setAttribute("style", "color: red;",);
rockBtn.style.padding = "15px";
rockBtn.style.margin = "15px";
paperBtn.setAttribute("style", "color: blue;");
paperBtn.style.padding = "15px";
paperBtn.style.margin = "15px";
scissorsBtn.setAttribute("style", "color: green;");
scissorsBtn.style.padding = "15px";
scissorsBtn.style.margin = "15px";

// Logs results of rounds
const log = document.querySelector("#log");
const addLog = document.createElement("p");

    
function playRound(choice1, choice2) {
    currentRound.textContent = `Round: ${roundNum}`;

    // Compares selections for each round to determine the round winner.
    if (choice1 === choice2) {
        addLog.textContent = `You chose ${choice1}, CPU chose ${choice2}. Round ${roundNum} ends in a tie.`
        log.appendChild(addLog);
        roundNum++;
    } else if (choice1 === "rock" && choice2 === "paper") {
        addLog.textContent = `You chose ${choice1}, CPU chose ${choice2}. paper beats rock. Computer wins round ${roundNum}!`;
        log.appendChild(addLog);
        computerScore++;
        roundNum++;
        score1.textContent = `Player Score: ${humanScore}`;
        score2.textContent = `Computer Score: ${computerScore}`;
    } else if (choice1 === "rock" && choice2 === "scissors") {
        addLog.textContent = `You chose ${choice1}, CPU chose ${choice2}. rock beats scissors. Player wins round ${roundNum}!`;
        log.appendChild(addLog);
        humanScore++;
        roundNum++;
        score1.textContent = `Player Score: ${humanScore}`;
        score2.textContent = `Computer Score: ${computerScore}`;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        addLog.textContent = `You chose ${choice1}, CPU chose ${choice2}. paper beats rock. Player wins round ${roundNum}!`;
        log.appendChild(addLog);
        humanScore++;
        roundNum++;
        score1.textContent = `Player Score: ${humanScore}`;
        score2.textContent = `Computer Score: ${computerScore}`;
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        addLog.textContent = `You chose ${choice1}, CPU chose ${choice2}. scissors beats paper. Computer wins round ${roundNum}!`;
        log.appendChild(addLog);
        computerScore++;
        roundNum++;
        score1.textContent = `Player Score: ${humanScore}`;
        score2.textContent = `Computer Score: ${computerScore}`;
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        addLog.textContent = `You chose ${choice1}, CPU chose ${choice2}. rock beats scissors. Computer Wins round ${roundNum}!`;
        log.appendChild(addLog);
        computerScore++;
        roundNum++;
        score1.textContent = `Player Score: ${humanScore}`;
        score2.textContent = `Computer Score: ${computerScore}`;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        addLog.textContent = `You chose ${choice1}, CPU chose ${choice2}. scissors beats paper. Player wins round ${roundNum}!`;
        log.appendChild(addLog);
        humanScore++;
        roundNum++;
        score1.textContent = `Player Score: ${humanScore}`;
        score2.textContent = `Computer Score: ${computerScore}`;
    };
        // Evaluates scores to determine the overall winner.
        if (humanScore === 5 && computerScore < 5) {
            addLog.textContent = `Your scored 5 points, you win!`;
            log.appendChild(addLog);
            buttons.remove();
        } else if (computerScore === 5 && humanScore < 5) {
            addLog.textContent = "Computer scored 5 points, you lose!"
            log.appendChild(addLog);
            buttons.remove();
        };
};
