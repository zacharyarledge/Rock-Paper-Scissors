# Rock-Paper-Scissors

This is a rock, paper, scissors game you can play with the console,
find out more about this project here: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

The following is some pseudo-code used to plan out the project. 


Function game()
Function getComputerChoice which randomly returns Rock Paper or Scissors*

Function playRound plays a round of r/p/s*
variable playerSelection gets players r/p/s *
variable computerSelection gets computers r/p/s *

make playerSelection case-insensitive  *

display results each round and  the winner at the end

___________________________________________

function getComputer Choice {
get random number from computer
use conditional 
if less than or equal to .333 then rock
if less than or equal to .666 then paper
if less than 1 then scissors
}

Function game {
game1 = playRound()
game2 = playRound()
game3 = playRound()
game4 = playRound()
game5 = playRound()

Function playRound {
takes the variables playerSelection and computerSelection as pS and cS respectively
if pS == cS then return tie
if (pS == ROCK & cS == PAPER) || (pS == PAPER & cS == SCISSORS) || (pS == SCISSORS & cS == ROCK) then return you lose
else then return you win
}


variable computerSelection
stores results from getComputerChoice function as a variable

variable playerSelection
variable x = ask the user for r/p/s
cut the blank space off
change all characters to upper case
if x == ROCK  || PAPER || SCISSORS then x = playerSelection
else prompt user to enter RPS

tell the user whether they won or loss the round


