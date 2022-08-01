const clickSound = document.getElementById("clicksound");
const playAgainSound = document.getElementById("playagain");
const gameWinSound = document.getElementById("gamewin");
const gameOverSound = document.getElementById("gameover");

let playerScoreElement = document.getElementById('player_score')
let computerScoreElement = document.getElementById('computer_score')
let roundInfo = document.getElementById('round')


document.querySelectorAll('.playerimage').forEach(e => e.addEventListener("mouseover", (event) => {
    event.target.style.transform='scale(1.7)'
}))

document.querySelectorAll('.playerimage').forEach(e => e.addEventListener("mouseout", (event) => {
    event.target.style.transform='scale(1)'
}))


// Function to play various sounds
function bell(sound){
    sound.play();
}


function resetPicks(){

    document.querySelectorAll('img').forEach(e =>{
        e.style.transform='scale(1)'
    })  
}

const onClick = (event) => {

    if(event.srcElement.id === 'rock'){
        resetPicks();
        event.srcElement.style.transform='scale(1.7)'
        game('rock')
    } else if(event.srcElement.id === 'paper'){
        resetPicks();
        event.srcElement.style.transform='scale(1.7)'
        game('paper')
    } else if(event.srcElement.id === 'scissors'){
        resetPicks();
        event.srcElement.style.transform='scale(1.7)'
        game('scissors')
    } else if(event.srcElement.id === 'playagain'){
        resetGame()
    }
        console.log(event.srcElement.id)
    }

window.addEventListener('click', onClick);




function getComputerChoice() {
    let card =''
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    if (computerPick === 'rock'){
        card = '#rock_computer'
    } else if(computerPick=== 'paper'){
        card = '#paper_computer'
    } else if(computerPick==='scissors'){
        card = '#scissors_computer'
    }


    document.querySelector(card).style.transform = 'scale(1.7)'



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
            roundInfo.textContent = 'you win! ' + playerSelection + ' beats ' + computerSelection;
        }

        else if (result === 'LOSE'){
            computerScore = computerScore + 1
            computerScoreElement.textContent = String(computerScore)
            roundInfo.textContent = 'you lose. ' + playerSelection + ' does not beat ' + computerSelection;
        }

        else if (result === 'TIE'){
            roundInfo.textContent = 'it was a tie. both players picked ' + playerSelection;            
        }

    if(playerScoreElement.textContent === '5' || computerScoreElement.textContent === '5'){
        if(playerScoreElement.textContent > computerScoreElement.textContent){
            resetPicks();
            document.querySelector('#player_picture').style.transform= 'scale(2)';
            roundInfo.textContent = 'game over. you won!'
            bell(gameWinSound)
        }

        else{
            resetPicks();
            document.querySelector('#computer_picture').style.transform= 'scale(2)';
            roundInfo.textContent = 'game over. you lose.'
            bell(gameOverSound)

        }


        document.querySelector('.player').style.pointerEvents='none'
        document.querySelector('#playagain').hidden=false

    }

}

    function resetGame(){
        resetPicks();
        playerScoreElement.textContent = '0';
        computerScoreElement.textContent = '0';
        roundInfo.textContent = 'pick an option to start the game';
        document.querySelector('.player').style.pointerEvents='auto'
        document.querySelector('#playagain').hidden=true


    }


// module.exports =
//     getComputerChoice,
//     playRound,
//     game,
