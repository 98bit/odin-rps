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
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log("You win this round. Rock beats Scissors");
            return 1;
        } else if (computerSelection == "paper") {
            console.log("You lose this round. Paper beats Rock");
            return 0;
        } else if (computerSelection == "rock") {
            console.log("This round is a tie.");
            return;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log("You lose this round. Scissors beats Paper");
            return 0;
        } else if (computerSelection == "paper") {
            console.log("This round is a tie.");
            return;
        } else if (computerSelection == "rock") {
            console.log("You win this round. Paper beats Rock");
            return 1;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            console.log("This round is a tie.");
            return;
        } else if (computerSelection == "paper") {
            console.log("You win this round. Scissors beats Paper");
            return 1;
        } else if (computerSelection == "rock") {
            console.log("You lose this round. Rock beats Scissors");
            return 0;
        }
    }

    // if user does not input a valid selection reprompt and run function again recursively
    console.log("You did not input a valid play. Please try again.");
    playerSelection = prompt("Please choose either 'Rock', 'Paper', or 'Scissors'");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
}

function playGame() {
    // initializing counters before loop
    let playerCounter = 0;
    let compCounter = 0;
    // run the game for 5 rounds and then determine winner
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please choose either 'Rock', 'Paper', or 'Scissors'");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == 0) {
            compCounter++;
        }
        if (result == 1) {
            playerCounter++;
        }
    }
    if (playerCounter > compCounter) {
        console.log("You've won the game!");
    }
    if (compCounter > playerCounter) {
        console.log("You've lost the game, better luck next time!");
    }
    if (playerCounter == compCounter) {
        console.log("The game ends in a tie!");
    }
}

playGame();
