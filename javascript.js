
console.log("Hello")

//alert("Hello2")

function getComputerChoice(){
    let number;
    number = Math.floor(Math.random() * 3)
    if (number === 0){
        return  "Rock";
    } else if(number === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}



function playRound(){

    let playerSelection;
    
    playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let computerSelection = getComputerChoice()

    if (playerSelection === computerSelection){
        alert("Tie Game")
    }else if (((playerSelection === "Rock") && (computerSelection === "Paper")) ||
            ((playerSelection === "Paper") && (computerSelection === "Scissors")) ||
            ((playerSelection === "Scissors") && (computerSelection === "Rock"))){
                computerScore += 1
                alert(`You lose! ${computerSelection} beats ${playerSelection}`)
    }else if (((playerSelection === "Rock") && (computerSelection === "Scissors")) ||
            ((playerSelection === "Paper") && (computerSelection === "Rock")) ||
            ((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
                playerScore += 1
                alert(`You win! ${playerSelection} beats ${computerSelection}`)       
    }else{
        alert(`You entered ${playerSelection}. Please choose Rock, Paper, or Scissors`)
    }
}

function game(){
    
    playerScore = 0
    computerScore = 0

    while ((playerScore < 5) && (computerScore < 5)){
        playRound(playerScore, computerScore)
        console.log(`Player: ${playerScore} Computer: ${computerScore}`)
    }
    
    
}


