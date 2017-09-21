var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
// console.log(computerChoice);

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else { computerChoice = "scissors"; }
console.log("Computer: " + computerChoice);


function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ('The result is a tie!');
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return ('Rock Wins!');
        } else {
            return ('Paper Wins!');
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return ('Paper Wins!');
        } else {
            return ('Scissors Wins!');
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return ('Rock Wins!');
        } else {
            return ('Scissors Wins!');
        }
    }
}

console.log(compare(userChoice, computerChoice));

userChoice = prompt("Rock, Paper, or Scissors?");

computerChoice = Math.random