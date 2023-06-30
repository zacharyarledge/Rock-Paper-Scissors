function getComputerChoice() {
    let x = Math.random();
    if (x <= .333) {
        return "ROCK";
    } else if (x <= .666) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }    
}

function playRound() {
    let text1 = prompt("ROCK, PAPER, or SCISSORS");
    let text2 = text1.trim();
    let playerSelection = text2.toUpperCase();

    let computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "TIE";
    } else if ((playerSelection == "ROCK" && computerSelection == "PAPER") 
            || (playerSelection == "PAPER" && computerSelection == "SCISSORS") 
            || (playerSelection == "SCISSORS" && computerSelection == "ROCK")) {
        return "LOSE";
    } else {
        return "WIN";
    }
    }

function game() {
    let game1 = playRound();
    let game2 = playRound();
    let game3 = playRound();
    let game4 = playRound();
    let game5 = playRound();
    return console.log(game1, game2, game3, game4, game5)
}





game()

