function getComputerChoice() {
    // get a random number to determine computer choice
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let gameLog = document.querySelector(".log");

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            gameLog.textContent = "You win this round. Rock beats Scissors";
            return;
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

function playGame() {
    let playerCounter = 0;
    let compCounter = 0;

    let rockButton = document.querySelector(".rock");
    let paperButton = document.querySelector(".paper");
    let scissorsButton = document.querySelector(".scissors");

    rockButton.addEventListener("click", () => {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        
    });

    paperButton.addEventListener("click", () => {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });

    scissorsButton.addEventListener("click", () => {
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });

    // if (playerCounter > compCounter) {
    //     gameLog.textContent("You've won the game!");
    // }
    // if (compCounter > playerCounter) {
    //     gameLog.textContent("You've lost the game, better luck next time!");
    // }
    // if (playerCounter == compCounter) {
    //     gameLog.textContent("The game ends in a tie!");
    // }
}

playGame();
