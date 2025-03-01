
const choices = ["stone", "paper", "scissor"]

const user = document.querySelector("#userChoice");
const comp = document.querySelector("#computerChoice");
const resss = document.querySelector("#result");
const PlayerscoreCard = document.querySelector("#playerScore")
const ComputerscoreCard = document.querySelector("#computerScore")

let userScore = 0;
let compScore = 0;
function game(playerChoice) {

    const compChoice = choices[Math.floor(Math.random() * 3)]

    let res = "";

    if (playerChoice === compChoice) {
        res = "THE GAME IS DRAW 😑"

    }
    else if (playerChoice === "stone") {
        res = (compChoice === "scissor") ? "YOU WIN 😀" : "YOU LOSE😭"
        
    }
    else if (playerChoice === "paper") {
        res = (compChoice === "stone") ? "YOU WIN 😀" : "YOU LOSE😭"

    }
    else if (playerChoice === "scissor") {
        res = (compChoice === "paper") ? "YOU WIN 😀" : "YOU LOSE😭"

    }

    if(res === "YOU WIN 😀"){
        userScore++;
        playerScore.textContent = userScore;
    }else if(res==="YOU LOSE😭"){
        compScore++;
        computerScore.textContent = compScore;
        
    }

 
    userChoice.textContent = `Player:- ${playerChoice}`;
    computerChoice.textContent = `Computer:- ${compChoice}`;
    result.textContent = res;
}