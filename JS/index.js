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