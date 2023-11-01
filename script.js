let userScore = 0;
let compScore = 0;
let playerChoice = null;
const choices = document.createElement('h3');
const winText = document.querySelector('.win-text');
const shell = document.querySelector('body');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('.rock, .paper, .scissors');
const start = document.querySelector('.start');
start.addEventListener('click', () => beginGame());

function beginGame(){
    userScore = 0;
    compScore = 0;
    playerChoice = null;
    shell.removeChild(start);
    shell.appendChild(winText);
    score.textContent = (userScore + " - " + compScore);
    winText.textContent = ("Press a button to begin!");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playerChoice = button.className;
            checkOutcome(getComputerChoice(),playerChoice);
        });
    });
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) return "rock";
    if (choice == 1) return "paper";
    else return "scissors";
}

function checkOutcome(comp, user){
    if (comp == user) {
    winText.textContent = ("Neither wins, it's a draw!");
    shell.appendChild(choices);
    shell.removeChild(choices);
    }
    else if ((user == "rock" && comp == "scissors") || (user == "scissors" && comp == "paper") || (user == "paper" && comp == "rock")){
        winText.textContent = ("You win, " +user+ " beats " +comp+ "!"); 
        userScore++;
    }else{
        winText.textContent = ("You lose, " +user+ " loses to " +comp+ "!");
        compScore++;
    }
    choices.textContent = ("You chose " +user+", computer chose " +comp+"!");
    shell.appendChild(choices);
    score.textContent = (userScore + " - " + compScore);
    if (userScore == 5 || compScore == 5){
        shell.removeChild(choices);
        winText.textContent = ('Refresh to play again!')
        if (userScore > compScore){
            score.innerHTML = ("You win!<br>"+ userScore + " - " + compScore);
        }else{
            score.innerHTML = ("You lose!<br>"+ userScore + " - " + compScore);
        }
        buttons.forEach(button => {
            button.disabled = true;
        });
    }

};