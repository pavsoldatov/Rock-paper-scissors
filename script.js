const entities = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function computerPlay(array) {
  function random(number) {
    return Math.floor(Math.random() * number);
  }
  let randomIndex = random(array.length);
  return array[randomIndex];
}

function playRound() {
  let playerSelection = prompt("Your weapon of choice?").toLowerCase();
  let computerSelection = computerPlay(entities);

  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  if (
    !(
      playerSelection === "rock" ||
      playerSelection === "scissors" ||
      playerSelection === "paper"
    )
  ) {
    alert("Please enter a valid input, such as rock, paper or sccisors.");
    return;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lost. Paper beats rock.");
    return ++computerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You won. Rock beats scissors.");
    return ++playerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You won. Paper beats rock.");
    return ++playerScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lost. Scissors beat paper.");
    return ++computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lost. Rock beats scissors.");
    return ++computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You won. Scissors beat paper.");
    return ++playerScore;
  } else {
    alert("It's a tie. Nobody wins.");
  }
}

for (let i = 0; i < 500; i++) {
  if (playerScore === 5) {
    alert(`Player: ${playerScore}, Computer: ${computerScore}. You have won!`);
    break;
  } else if (computerScore === 5) {
    alert(`Player: ${playerScore}, Computer: ${computerScore}. You have lost!`);
    break;
  }
  playRound();
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
}
