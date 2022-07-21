
let playerSelection = prompt('Choose your pick', '').toLowerCase();
console.log('Your pick for the game was ' + playerSelection);


function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log('The computer picked ' + computerPick);
    return computerPick;
}

const computerSelection = getComputerChoice();