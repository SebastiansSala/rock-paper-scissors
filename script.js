function getComputerChoice(){
    return ["rock", "paper", "scissors"].random()
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        return "You Win!";
    }else{
        return "You Lose!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound)
    }
}


const playerSelection = "paper";
const computerSelection = getComputerChoice();

