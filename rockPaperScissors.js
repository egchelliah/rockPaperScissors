function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerPick;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection !== 'rock' && 'paper' && 'scissors') 
    
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
        console.log('Your pick for round ' + i + ' was ' + playerSelection);

        const computerSelection = getComputerChoice();
        console.log('Computer pick for round ' + i + ' was ' + computerSelection);

        let result = playRound(playerSelection,computerSelection)

        // if (result === 'INVALID'){
        //     console.log('This was an invalid selection.')
        //     break;
        // }

        if (result === 'WIN'){
            playerScore++
        }

        else if (result === 'LOSE'){
            computerScore++
        }

        else 
            continue
        
    }
    
    console.log('The final player score was ' + playerScore + '. And the final computer score was ' + computerScore);
}


game();