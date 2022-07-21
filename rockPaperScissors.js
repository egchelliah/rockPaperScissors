function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerPick;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') 
    
    {
        return 'INVALID'
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock' ||
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

// playRound(playerSelection, computerSelection );


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i<6; i++){
        
        let playerSelection = prompt('Choose your pick', '').toLowerCase();

        let computerSelection = getComputerChoice();


        let result = playRound(playerSelection,computerSelection)

        if (result === 'INVALID'){
        
            break;
        }

        else if (result === 'WIN'){
            playerScore = playerScore + 1
            console.log('Your pick for round ' + i + ' was ' + playerSelection);
            console.log('Computer pick for round ' + i + ' was ' + computerSelection);
            console.log('You Won! At the end of round ', + i)
            console.log('The player score was ' + playerScore + '. And the computer score was ' + computerScore);
            console.log('**********************************************')

        }

        else if (result === 'LOSE'){
            computerScore = computerScore + 1
            console.log('Your pick for round ' + i + ' was ' + playerSelection);
            console.log('Computer pick for round ' + i + ' was ' + computerSelection);
            console.log('You Lost. At the end of round ', + i)
            console.log('The player score was ' + playerScore + '. And the computer score was ' + computerScore);
            console.log('**********************************************')
        }

        else if (result === 'TIE'){
            console.log('Your pick for round ' + i + ' was ' + playerSelection);
            console.log('Computer pick for round ' + i + ' was ' + computerSelection);
            console.log('It was a tie. Scores are the same.');
            console.log('**********************************************')
            
        }
        else
            continue
    }
    
    console.log('THE END. The final player score was ' + playerScore + '. And the final computer score was ' + computerScore);
}


game();