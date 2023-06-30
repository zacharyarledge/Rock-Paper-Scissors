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
    if (pS == cS) {
        return console.log("TIE");
    } else if ((pS == "ROCK" && cS == "PAPER") 
            || (pS == "PAPER" && cS == "SCISSORS") 
            || (pS == "SCISSORS" && cS == "ROCK")) {
        return console.log("LOSE");
    } else {
        return console.log("WIN");
    }
    }



let text1 = prompt("ROCK, PAPER, or SCISSORS");
let text2 = text1.trim();
let playerSelection = text2.toUpperCase();

let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection)

