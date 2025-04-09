/* 1. Mostrar mensaje: "Elige entre piedra, papel o tijeras"
2. Obtener la elección del jugador (humano)
3. Generar la elección de la computadora al azar
4. Comparar ambas elecciones:
    - Si son iguales, mostrar "Es un empate"
    - Si una elección gana, mostrar "Gana (jugador o computadora)"
5. Repetir hasta que el usuario decida salir
6. Almacenar puntajes para ambos jugadores y mostrar al final */

const humanRock = document.querySelector(".btn-rock")
const humanPaper = document.querySelector(".btn-paper")
const humanScissors = document.querySelector(".btn-scissors")

humanRock.addEventListener("click",  (e) => playRoundHumanRock())
humanPaper.addEventListener("click", (e) => playRoundHumanPaper())
humanScissors.addEventListener("click", (e) => playRoundHumanScissors())


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

function playRoundHumanRock() {
  const computer = getComputerChoice()
  const human = "rock"

  if (human === computer) {
    console.log("Tie! No one wins!");
  } else if (computer === "paper") {
    console.log("You lose! Paper beats rock");
  } else if (computer === "scissors") {
    console.log("You win! Rock beats scissors");
  }

}

function playRoundHumanPaper() {
  const computer = getComputerChoice()
  const human = "paper"

  if (human === computer) {
    console.log("Tie! No one wins!");
  } else if (computer === "scissors") {
    console.log("You lose! Scissors beats paper");
  } else if (computer === "rock") {
    console.log("You win! Paper beats rock");
  }

}

function playRoundHumanScissors() {
  const computer = getComputerChoice()
  const human = "scissors"

  if (human === computer) {
    console.log("Tie! No one wins!");
  } else if (computer === "paper") {
    console.log("You win! Scissors beats paper");
  } else if (computer === "rock") {
    console.log("You lose! Rock beats scissors");
  }

}