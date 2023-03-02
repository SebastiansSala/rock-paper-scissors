let playerScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const arr = ["rock", "paper", "scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}

function tie(){

}

function score(){
    document.getElementById("computer-result").innerHTML = computerScore;
    document.getElementById("player-result").innerHTML = playerScore;
}

function playRound(player, computer){
    if(player === computer){
        tie();
    }
    if(player === 'rock' && computer === 'scissors'){
        playerScore++;
    }else if(player === 'paper' && computer === 'rock'){
        playerScore++;
    }else if(player === 'scissors' && computer === 'paper'){
        playerScore++;
    }  

    if(computer === 'rock' && player === 'scissors'){
        computerScore++;
    }else if(computer === 'paper' && player === 'rock'){
        computerScore++;
    }else if(computer === 'scissors' && player === 'paper'){
        computerScore++;
    }
    score();
}

function showChoice(playerChoice, computerSelection){
    switch(playerChoice){
        case 'rock':
            document.getElementById("player").innerHTML = '✊';
            break;
        case 'paper':
            document.getElementById("player").innerHTML = '🖐️';
            break;
        case 'scissors':
            document.getElementById("player").innerHTML = '✌';
    }
    switch(computerSelection){
        case 'rock':
            document.getElementById("computer").innerHTML = '✊';
            break;
        case 'paper':
            document.getElementById("computer").innerHTML = '🖐️';
            break;
        case 'scissors':
            document.getElementById("computer").innerHTML = '✌';
    }
}

function generate(playerChoice){
    const computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
    showChoice(playerChoice, computerSelection)
}


const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper'); 
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => generate('rock'));
paperBtn.addEventListener('click', () => generate('paper'));
scissorsBtn.addEventListener('click', () => generate('scissors'));