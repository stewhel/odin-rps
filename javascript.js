playerScore = 0
computerScore = 0

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => btn.addEventListener('click', playRound));

const content = document.createElement('div');
content.classList.add('text')
const head = document.createElement('div');
head.classList.add('top')



head.textContent = "Welcome to Rock-Paper-Scissors! Click to start."
//content.textContent = `You: ${playerScore}  Computer: ${computerScore}`

function updateScore(){
    content.textContent = `You: ${playerScore}  Computer: ${computerScore}`
}

const container = document.querySelector('.container')

container.appendChild(head)
container.appendChild(content)

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

function playRound(event){

    let playerSelection = event.srcElement.innerText;
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){
        head.textContent = "Tie Game!";
        updateScore();
    }else if (((playerSelection === "Rock") && (computerSelection === "Paper")) ||
            ((playerSelection === "Paper") && (computerSelection === "Scissors")) ||
            ((playerSelection === "Scissors") && (computerSelection === "Rock"))){
                computerScore += 1
                updateScore();
                checkLose(playerSelection, computerSelection);
                
                
                
                
    }else if (((playerSelection === "Rock") && (computerSelection === "Scissors")) ||
            ((playerSelection === "Paper") && (computerSelection === "Rock")) ||
            ((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
                playerScore += 1
                updateScore();
                checkWin(playerSelection, computerSelection);
    }
}


function resetScores(){
    playerScore = 0
    computerScore = 0
}


function checkWin(playerSelection, computerSelection){
    if(playerScore > 4){
        head.textContent = "Congratulations! You win!"
        resetScores();
    }else{
        head.textContent = `You win! ${playerSelection} beats ${computerSelection}`
    }}

function checkLose(playerSelection, computerSelection){
    if(computerScore > 4){
        head.textContent = "Sorry! You lost!";
        resetScores();
    }else{
        head.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
