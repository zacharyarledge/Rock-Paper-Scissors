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

function playRound(pS, cS) {


}

let text1 = prompt("ROCK, PAPER, or SCISSORS");
let text2 = text1.trim();
let playerSelection = text2.toUpperCase();

let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection)

