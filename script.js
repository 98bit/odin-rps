function getComputerChoice() {
    // get a random number to determine computer choice
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let gameLog = document.querySelector(".log");

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            gameLog.textContent = "You win this round. Rock beats Scissors";
            return 1;
        } else if (computerSelection == "paper") {
            gameLog.textContent = "You lose this round. Paper beats Rock";
            return 0;
        } else if (computerSelection == "rock") {
            gameLog.textContent = "This round is a tie.";
            return;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            gameLog.textContent = "You lose this round. Scissors beats Paper";
            return 0;
        } else if (computerSelection == "paper") {
            gameLog.textContent = "This round is a tie.";
            return;
        } else if (computerSelection == "rock") {
            gameLog.textContent = "You win this round. Paper beats Rock";
            return 1;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            gameLog.textContent = "This round is a tie.";
            return;
        } else if (computerSelection == "paper") {
            gameLog.textContent = "You win this round. Scissors beats Paper";
            return 1;
        } else if (computerSelection == "rock") {
            gameLog.textContent = "You lose this round. Rock beats Scissors";
            return 0;
        }
    }
}

// UI

let playerCounter = 0;
let compCounter = 0;
let result;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const playerResult = document.querySelector(".player");
const compResult = document.querySelector(".comp");
const gameResult = document.querySelector(".result");

const replayButton = document.querySelector(".replay");

function playGame() {
    playerResult.textContent = "You: " + playerCounter;
    compResult.textContent = "Computer: " + compCounter;

    rockButton.addEventListener("click", () => {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            playerCounter++;
            playerResult.textContent = "You: " + playerCounter;
        } else if (result === 0) {
            compCounter++;
            compResult.textContent = "Computer: " + compCounter;
        }
        checkGameStatus();
    });

    paperButton.addEventListener("click", () => {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            playerCounter++;
            playerResult.textContent = "You: " + playerCounter;
        } else if (result === 0) {
            compCounter++;
            compResult.textContent = "Computer: " + compCounter;
        }
        checkGameStatus();
    });

    scissorsButton.addEventListener("click", () => {
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            playerCounter++;
            playerResult.textContent = "You: " + playerCounter;
        } else if (result === 0) {
            compCounter++;
            compResult.textContent = "Computer: " + compCounter;
        }
        checkGameStatus();
    });

}

function checkGameStatus() {
    if (playerCounter === 5) {
        gameResult.textContent = "You won!";
        gameOver();
    }
    if (compCounter === 5) {
        gameResult.textContent = "You lost...";
        gameOver();
    }
}

function gameOver() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    replayButton.classList.add("fadeIn");
    replayButton.addEventListener("click", () => {
        window.location.reload();
    })
}

playGame();
