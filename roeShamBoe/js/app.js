var user;
var computer;
var options = ['ROCK', 'PAPER', 'SCISSORS']
var wins = 0;
var losses = 0;
var ties = 0;

var winBanner = document.getElementById('wins');
var lossBanner = document.getElementById('losses');
var tiesBanner = document.getElementById('ties');
var message = document.getElementById('message');

function userChoice() {
    user = this.id;
    document.getElementById('user_choice').innerHTML = 'YOU CHOOSE: ' + user + '!!';
    computerChoice();
}

function computerChoice() {
    var computerChoice = Math.random();
    // console.log(computerChoice);

    if (computerChoice <= 0.33) {
        computerChoice = "ROCK";
    } else if (computerChoice <= 0.66) {
        computerChoice = "PAPER";
    } else { computerChoice = "SCISSORS"; }
    //console.log("Computer: " + computerChoice);
    document.getElementById('computer_choice').innerHTML = 'COMPUTER CHOOSE: ' + computer;
    compare();
}

function compare() {
    if (computer === user)
        tie();
    else {
        switch (user) {
            case 'ROCK':
                if (computer === 'PAPER')
                    lose();
                else
                    win();
                break;
            case 'PAPER':
                if (computer === 'SCISSORS')
                    lose();
                else
                    win();
                break;
            case 'SCISSORS':
                if (computer === 'ROCK')
                    lose();
                else
                    win();
                break;
        }
    }
}

function tie() {
    ties += 1;
    updateUi('DRAW');
}

function win() {
    wins += 1;
    updateUi('WIN');
}

function lose() {
    losses += 1;
    updateUi('LOSS');
}

function updateUi(result) {
    message.innerHTML = 'Your result was a ' + result;
    message.className = result + ' center';
    winBanner.innerHTML = 'Wins: ' + wins;
    lossBanner.innerHTML = 'Losses: ' + losses;
    tiesBanner.innerHTML = 'Ties: ' + ties;
}

var choices = document.getElementsByClassName('choice');
for (var index in choices) {
    choices[index].addEventListener('click', userChoice);
}