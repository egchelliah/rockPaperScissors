let playerScoreElement = document.getElementById('player_score')
let computerScoreElement = document.getElementById('computer_score')
let roundInfo = document.getElementById('round')

const onClick = (event) => {
    if(event.srcElement.id === 'rock'){
        game('rock')
    } else if(event.srcElement.id === 'paper'){
        game('paper')
    } else if(event.srcElement.id === 'scissors'){
        game('scissors')
    } else if(event.srcElement.id === 'playagain'){
        resetGame()
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
            roundInfo.textContent = 'You Won! ' + playerSelection + ' beats ' + computerSelection;
            // console.log('Your pick for round  was ' + playerSelection);
            // console.log('Computer pick for round was ' + computerSelection);
            // console.log('You Won! At the end of round ')
            // console.log('The player score was ' + playerScore + '. And the computer score was ' + computerScore);
            // console.log('**********************************************')

        }

        else if (result === 'LOSE'){
            computerScore = computerScore + 1
            computerScoreElement.textContent = String(computerScore)
            roundInfo.textContent = 'You Lose! ' + playerSelection + ' does not beat ' + computerSelection;
            // console.log('Your pick for round was ' + playerSelection);
            // console.log('Computer pick for round was ' + computerSelection);
            // console.log('You Lost. At the end of round ')
            // console.log('The player score was ' + playerScore + '. And the computer score was ' + computerScore);
            // console.log('**********************************************')
        }

        else if (result === 'TIE'){
            roundInfo.textContent = 'It was a tie. Both players picked ' + playerSelection;
            // console.log('Your pick for round  was ' + playerSelection);
            // console.log('Computer pick for round was ' + computerSelection);
            // console.log('It was a tie. Scores are the same.');
            // console.log('**********************************************')
            
        }

    if(playerScoreElement.textContent === '5' || computerScoreElement.textContent === '5'){
        if(playerScoreElement.textContent > computerScoreElement.textContent){
            // alert('GAME OVER. YOU WON')
            document.querySelector('.player').style.backgroundColor= 'rgba(0, 0, 0, 0.1)';
            roundInfo.textContent = 'game over. you won!'
        }

        else{
            document.querySelector('.computer').style.backgroundColor= 'rgba(0, 0, 0, 0.1)'
            roundInfo.textContent = 'game over. you lose.'
        }


        document.querySelector('.player').style.pointerEvents='none'
        document.querySelector('#playagain').hidden=false

    }

    }

    function resetGame(){
        playerScoreElement.textContent = '0';
        computerScoreElement.textContent = '0';
        roundInfo.textContent = 'pick an option to start the game';
        document.querySelector('.player').style.pointerEvents='auto'
        document.querySelector('#playagain').hidden=true
        document.querySelector('.computer').style.backgroundColor= 'transparent'
        document.querySelector('.player').style.backgroundColor= 'transparent'


    }


// module.exports =
//     getComputerChoice,
//     playRound,
//     game,
