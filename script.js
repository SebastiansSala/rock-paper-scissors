function getComputerChoice(){
    return ["rock", "paper", "scissors"][(Math.floor(Math.random() * arr.length))];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "Its a Tie!"
        }else if(computerSelection === "paper"){
            return "You Lose!"
        }else if(computerSelection === "scissors"){
            return "You win!"
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            return "Its a Tie!"
        }else if(computerSelection === "scissors"){
            return "You Lose!"
        }else if(computerSelection === "rock"){
            return "You win!"
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            return "Its a Tie!"
        }else if(computerSelection === "rock"){
            return "You Lose!"
        }else if(computerSelection === "paper"){
            return "You win!"
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        return document.getElementsByClassName("btn").addEventListener("click", playRound);
    }
}

const playerSelection = document.getElementsByClassName('btn').addEventListener("click")
console.log(playerSelection);
const computerSelection = getComputerChoice();
 