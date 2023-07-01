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
    console.log(game1)

    if (game1 == "WIN") {
        var playerScore = 1;
        var computerScore = 0;
        } else if (game1 == "LOSE") {
        var computerScore = 1;
        var playerScore = 0;
        } else {
            var playerScore = 0;
            var computerScore = 0;
        }
   
    let game2 = playRound();
    console.log(game2)

    if (game2 == "WIN") {
    playerScore += 1;
    } else if (game2 == "LOSE") {
    computerScore += 1;
    } else {
    console.log("What a great game!")
    }
    
    let game3 = playRound();
    console.log(game3)

    if (game3 == "WIN") {
        playerScore += 1;
    } else if (game3 == "LOSE") {
        computerScore += 1;
    } else {
    console.log("What a great game!")
    }
    
    let game4 = playRound();
    console.log(game4)

    if (game4 == "WIN") {
        playerScore += 1;
    } else if (game4 == "LOSE") {
        computerScore += 1;
    } else {
    console.log("What a great game!")
    }

    let game5 = playRound();
    console.log(game5)
    if (game5 == "WIN") {
        playerScore += 1;
    } else if (game5 == "LOSE") {
        computerScore += 1;
    } else {
    console.log("What a great game!")
    }  

    console.log(playerScore + "-" + computerScore)
}

game()

