const entities = ["rock", "paper", "scissors"];

let buttons = document.querySelectorAll(".btn");
let log = document.querySelector(".log");
let para = document.createElement("p");

log.appendChild(para);
let resetBtn = document.createElement("button");

let playerScore = 0;
let computerScore = 0;

function random(number) {
  return Math.floor(Math.random() * number);
}

function computerPlay(array) {
  let randomIndex = random(array.length);
  return array[randomIndex];
}

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

function removeEventListener() {
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });
}

function playRound() {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = this.value;
    let computerSelection = computerPlay(entities);

    // Переделать сообщения в textContent
    if (playerSelection === "rock" && computerSelection === "paper") {
      ++computerScore;
      para.textContent = `Computer won. Paper beats rock. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      ++playerScore;
      para.textContent = `You won. Rock beats scissors. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++playerScore;
      para.textContent = `You won. Paper beats rock. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      ++computerScore;
      para.textContent = `Computer won. Scissors beat paper. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++computerScore;
      para.textContent = `Computer won. Rock beats scissors. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      ++playerScore;
      para.textContent = `You won. Scissors beat paper. \nComputer ${computerScore}, Player ${playerScore}`;
    } else {
      para.textContent = `It's a tie. Nobody wins. \nComputer ${computerScore}, Player ${playerScore}`;
    }

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    showScore();
    return;
  }
  removeEventListener();
}

function showScore() {
  if (playerScore === 5) {
    para.innerText = `You have won! Final score:\nplayer: ${playerScore}, computer: ${computerScore}.`;
    return;
  }
  if (computerScore === 5) {
    para.innerText = `Computer has won! Final score:\nplayer: ${playerScore}, computer: ${computerScore}.`;
    return;
  }
}
