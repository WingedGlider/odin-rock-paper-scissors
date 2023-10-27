let userScore = 0;
let compScore = 0;
let playerChoice = null;
playGame();

function evalPlayerChoice(choice){
    if ( !( choice == "scissors" || choice == "rock" || choice == "paper")){
    choice = prompt("Not a valid input... Please enter: Rock, Paper, or Scissors?");
    choice = evalPlayerChoice(choice);
    }
    return choice;
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) return "rock";
    if (choice == 1) return "paper";
    else return "scissors";
}

function checkOutcome(comp, user){
    if (comp == user) alert("Neither wins, it's a draw!");
    else if ((user == "rock" && comp == "scissors") || (user == "scissors" && comp == "paper") || (user == "paper" && comp == "rock")){
        alert ("You win, " +user+ " beats " +comp+ "!");
        userScore++;
    }else{
        alert ("You lose, " +user+ " loses to " +comp+ "!");
        compScore++;
    }
    alert ("The score is "+userScore+" to " +compScore+ "!");
}

function playGame(){
    for(let i = 1; i <= 5; i++){
        if (i == 1) playerChoice = prompt("Hello, user! Rock, Paper, or Scissors?").toLowerCase();
        else playerChoice = prompt("Round " +i+ ", Rock, Paper, or Scissors?");
        playerChoice = evalPlayerChoice(playerChoice);
        alert("You chose " +playerChoice.toLowerCase()+"!");
        let compChoice = getComputerChoice();
        alert("Your opponent chose " +compChoice.toLowerCase()+"!");
        checkOutcome(compChoice,playerChoice);
    }
    alert("Game over, check the console for results!");
    if (compScore == userScore) console.log("Game ended with a tie.");
    else if (compScore < userScore) console.log ("Game ended in favor of player, " +userScore+ " to " +compScore+".");
    else console.log("Game ended in favor of computer, " +userScore+ " to " +compScore+".");
}