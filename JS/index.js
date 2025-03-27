/* 1. Mostrar mensaje: "Elige entre piedra, papel o tijeras"
2. Obtener la elección del jugador (humano)
3. Generar la elección de la computadora al azar
4. Comparar ambas elecciones:
    - Si son iguales, mostrar "Es un empate"
    - Si una elección gana, mostrar "Gana (jugador o computadora)"
5. Repetir hasta que el usuario decida salir
6. Almacenar puntajes para ambos jugadores y mostrar al final */

function getComputerChoice() {
  let result = Math.random();
  let choice = "";

  if (result <= 0.33) {
    console.log("Computer choose: rock");
    choice = "rock";
  } else if (result > 0.33 && result < 0.66) {
    console.log("Computer choose: paper");
    choice = "paper";
  } else {
    console.log("Computer choose: scissors");
    choice = "scissors";
  }

  return choice;
}

function getHumanChoice() {
  let choice = "";
  let humanChoice = prompt("What's your choice?").toLowerCase();

  if (humanChoice == "rock") {
    console.log("You choose: rock");
    choice = "rock";
  } else if (humanChoice == "paper") {
    console.log("You choose: paper");
    choice = "paper";
  } else if (humanChoice == "scissors") {
    console.log("You choose: scissors");
    choice = "scissors";
  }

  return choice;
}

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(human, computer) {
    human = getHumanChoice()
    computer = getComputerChoice()

    if (human === computer) {
      console.log("Tie! No one wins!");
    } else if (human === "rock" && computer === "paper") {
      console.log("You lose! Paper beats rock");
      computerScore++;
    } else if (human === "rock" && computer === "scissors") {
      console.log("You win! Rock beats scissors");
      humanScore++;
    } else if (human === "paper" && computer === "rock") {
      console.log("You win! Paper beats rock");
      humanScore++;
    } else if (human === "paper" && computer === "scissors") {
      console.log("You lose! Scissors beats paper");
      computerScore++;
    } else if (human === "scissors" && computer === "paper") {
      console.log("You win! Scissors beats paper");
      humanScore++;
    } else if (human === "scissors" && computer === "rock") {
      console.log("You lose! Rock beats scissors");
      computerScore++;
    }
  
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if(humanScore === 5) {
    console.log(`You scored 5! You're the winner!`);
  } else if(computerScore === 5) {
    cconsole.log(`Computer scored 5! You're the loser!`);
  } else {
    console.log('No one scored 5! Draw!');
  }
}

playGame()
/* 
User needs to input a move 5 times.
*/