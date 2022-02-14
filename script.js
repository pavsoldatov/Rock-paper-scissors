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
    ++computerScore;
    alert(
      `You lost. Paper beats rock. \nComputer ${computerScore}, Player ${playerScore}`
    );
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    ++playerScore;
    alert(
      `You won. Rock beats scissors. \nComputer ${computerScore}, Player ${playerScore}`
    );
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    ++playerScore;
    alert(
      `You won. Paper beats rock. \nComputer ${computerScore}, Player ${playerScore}`
    );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    ++computerScore;
    alert(
      `You lost. Scissors beat paper. \nComputer ${computerScore}, Player ${playerScore}`
    );
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    ++computerScore;
    alert(
      `You lost. Rock beats scissors. \nComputer ${computerScore}, Player ${playerScore}`
    );
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    ++playerScore;
    alert(
      `You won. Scissors beat paper. \nComputer ${computerScore}, Player ${playerScore}`
    );
  } else {
    alert(
      `It's a tie. Nobody wins. \nComputer ${computerScore}, Player ${playerScore}`
    );
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
