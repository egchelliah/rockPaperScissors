
let playerSelection = prompt('Choose your pick', '').toLowerCase();
console.log('Your pick for the game was ' + playerSelection);


function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log('The computer picked ' + computerPick);
    return computerPick;
}

const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection){
    if (playerSelection !== 'rock' && 'paper' && 'scissors') {
        console.log('INSIDE FUNCTION Players pick is ' + playerSelection);
        console.log('INSIDE FUNCTION Computer pick is ' + computerSelection);
        return console.log('You did not pick a valid option. The end')
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'paper' ||
    playerSelection === 'scissors' && computerSelection === 'scissors')
    
    {
        console.log('INSIDE FUNCTION Players pick is ' + playerSelection);
        console.log('INSIDE FUNCTION Computer pick is ' + computerSelection);
        return console.log('You guys tied');

    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper')
    
    {
        console.log('INSIDE FUNCTION Players pick is ' + playerSelection);
        console.log('INSIDE FUNCTION Computer pick is ' + computerSelection);
        return console.log('The player won!')
    

    } else (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock')

    {   
        console.log('INSIDE FUNCTION Players pick is ' + playerSelection);
        console.log('INSIDE FUNCTION Computer pick is ' + computerSelection);
        return console.log ('The player lost')
    }
    
}

playRound(playerSelection, computerSelection );