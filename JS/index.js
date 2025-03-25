// create the function
function getComputerChoice() {
  // generate a random number and store it
  const result = Math.random()
  // depending on the number, return string "rock", "paper" or "scissors"
  if(result <= 0.33) {
    console.log("rock")
  } else if
    (result > 0.33 && result < 0.66) {
    console.log('paper') 
  } else {
    console.log('scissors');
  }
}

getComputerChoice()

// get human choice
function getHumanChoice() {
  // generate a prompt for the user to choice his play 
  let humanChoice = prompt("What's your choice?")
  // depending on what the user writes, he chooses the move
  if(humanChoice == "rock") {
    console.log('rock')
  } else if(humanChoice == "paper") {
    console.log('paper')
  } else if(humanChoice == "scissors") {
    console.log('You choose: scissors');
  }
}

getHumanChoice()

let humanScore = 0

let computerScore = 0

function playRound(getHumanChoice, getComputerChoice) {
  // get previous choices and compare them
  if(getComputerChoice == "rock" && getHumanChoice == "paper") {
    console.log('You won!');
    humanScore++
  }
}

playRound();
