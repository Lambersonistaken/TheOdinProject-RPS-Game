
const rockImg = document.getElementById("rock")
const paperImg = document.getElementById("paper")
const scissorImg = document.getElementById("scissor")
const alertMessage = document.getElementById("message")
const scoreBoard = document.getElementById("score-title")
const button = document.getElementById("play-again")
const buttonDiv = document.querySelector(".playAgain")





let choices = ["rock","paper","scissor"]
let playerChoice;
let compRealChoice;
let playerScore = 0;
let computerScore = 0;
let gameEnded = false

buttonDiv.style.display = "none"
scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`


button.addEventListener("click", () => {
    playAgain()
    buttonDiv.style.display = "none"
})


function getComputerChoice() {
let randomNumber = Math.floor(Math.random() * choices.length)
let compChoice = choices[randomNumber]
compRealChoice = compChoice

}


function getPlayerChoice() {
    rockImg.addEventListener("click", () => {
        playerChoice = choices[0]
        checkResult()
    })
    paperImg.addEventListener("click", () => {
        playerChoice = choices[1]
        checkResult()
    })
    scissorImg.addEventListener("click", () => {
        playerChoice = choices[2]
        checkResult()
    })
}


function checkResult(){
    if(gameEnded) return
    if(compRealChoice == playerChoice){
        alertMessage.textContent = "Game Tied Up, Play Again!"
        playerScore+=0
        computerScore+=0
        scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    }
    else if(compRealChoice == "rock" && playerChoice == "paper"){
        alertMessage.textContent = "Player won!"
        playerScore++
        scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    }
    else if(compRealChoice == "rock" && playerChoice == "scissor"){
        alertMessage.textContent = "Computer won!"
        computerScore++
        scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    }
    else if(compRealChoice == "paper" && playerChoice == "scissor"){
        alertMessage.textContent = "Player won!"
        playerScore++
        scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    }
    else if(compRealChoice == "paper" && playerChoice == "rock"){
        alertMessage.textContent = "Computer won!"
        computerScore++
        scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    }
    else if(compRealChoice == "scissor" && playerChoice == "rock"){
        alertMessage.textContent = "Player won!"
        playerScore++
        scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    }
    else if(compRealChoice == "scissor" && playerChoice == "paper"){
        alertMessage.textContent = "Computer won!"
        computerScore++
        scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    }
    checkEndGame()
    if(!gameEnded)
    getComputerChoice() 
}
    getComputerChoice()
    getPlayerChoice()


    function checkEndGame(){
        if(computerScore == 5 || playerScore == 5) {
            if(computerScore > playerScore){
                gameEnded = true
                alertMessage.textContent = "Computer won the whole game!"
                buttonDiv.style.display = "block"
            }
            else if(playerScore > computerScore) {
                gameEnded = true
                alertMessage.textContent = "Player won the whole game!"
                buttonDiv.style.display = "block"
            }
            else {
                gameEnded = true
                alertMessage.textContent = "Whole Game Tied Up, Play Again!"
                buttonDiv.style.display = "block"
            }
            
        }
    }
   
function playAgain() {
    playerScore = 0;
    computerScore = 0;
    scoreBoard.innerHTML = `Computer ${computerScore} - Player ${playerScore}`
    alertMessage.textContent = ""
    getComputerChoice()
    gameEnded = false;

}