let playerScoreElement = document.getElementById('player_score')
let computerScoreElement = document.getElementById('computer_score')

const onClick = (event) => {
    if(event.srcElement.id === 'rock'){
        game('rock')
    } else if(event.srcElement.id === 'paper'){
        game('paper')
    } else if(event.srcElement.id === 'scissors'){
        game('scissors')
    }
        console.log(event.srcElement.id)
    }

window.addEventListener('click', onClick);




function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerPick;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'paper' ||
    playerSelection === 'scissors' && computerSelection === 'scissors')
    
    {
        return 'TIE';

    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper')
    
    {
        return 'WIN'
    

    } else (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock')

    {   
        return 'LOSE'
    }
    
}


function game(playerSelection){
    let playerScore = parseInt(playerScoreElement.textContent);
    let computerScore = parseInt(computerScoreElement.textContent);
        
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection)


        if (result === 'WIN'){
            playerScore = playerScore + 1
            playerScoreElement.textContent = String(playerScore);
            console.log('Your pick for round  was ' + playerSelection);
            console.log('Computer pick for round was ' + computerSelection);
            console.log('You Won! At the end of round ')
            console.log('The player score was ' + playerScore + '. And the computer score was ' + computerScore);
            console.log('**********************************************')

        }

        else if (result === 'LOSE'){
            computerScore = computerScore + 1
            computerScoreElement.textContent = String(computerScore)
            console.log('Your pick for round was ' + playerSelection);
            console.log('Computer pick for round was ' + computerSelection);
            console.log('You Lost. At the end of round ')
            console.log('The player score was ' + playerScore + '. And the computer score was ' + computerScore);
            console.log('**********************************************')
        }

        else if (result === 'TIE'){
            console.log('Your pick for round  was ' + playerSelection);
            console.log('Computer pick for round was ' + computerSelection);
            console.log('It was a tie. Scores are the same.');
            console.log('**********************************************')
            
        }

    }



// game();

// module.exports =
//     getComputerChoice,
//     playRound,
//     game,
