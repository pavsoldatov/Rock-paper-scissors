let rock = { name: "rock", emoji: "👊" };
let paper = { name: "paper", emoji: "🤚" };
let scissors = { name: "scissors", emoji: "✌️" };
const entities = [rock, paper, scissors];


let buttons = document.querySelectorAll(".btn");
let log = document.querySelector(".log");
let para = document.querySelector(".log > p");

log.appendChild(para);

let playerScore = 0;
let computerScore = 0;

/* utility functions */
function random(number) {
  return Math.floor(Math.random() * number);
}

function computerPlay(array) {
  let randomIndex = random(array.length);
  return array[randomIndex].name; // remember to toy around object.name/emoji
}
/* utility functions */

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

/* Removing listener upon reaching 5 victories during playRound */
function removeListener() {
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });
}
/* Removing listener upon reaching 5 victories during playRound */

function playRound() {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = this.value;
    let computerSelection = computerPlay(entities);

    // I need to refactor the strings, so that they refer to the object's name
    // and do not require hardcoding the string value (ie, rock)
    if (playerSelection === "rock" && computerSelection === "paper") {
      ++computerScore;
      para.innerText = `Computer${paper.emoji}  vs  Player${rock.emoji}. Paper beats rock. \nComputer: ${computerScore}, Player: ${playerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      ++playerScore;
      para.innerText = `Computer${scissors.emoji} vs Player${rock.emoji}. Rock beats scissors. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++playerScore;
      para.tinnerText = `Computer${rock.emoji} vs Player${paper.emoji}. Paper beats rock. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      ++computerScore;
      para.innerText = `Computer${scissors.emoji} vs Player${paper.emoji}. Scissors beat paper. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++computerScore;
      para.textContent = `Computer${rock.emoji} vs Player${scissors.emoji}. Rock beats scissors. \nComputer ${computerScore}, Player ${playerScore}`;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      ++playerScore;
      para.textContent = `Computer${paper.emoji} vs Player${scissors.emoji}. Scissors beat paper. \nComputer ${computerScore}, Player ${playerScore}`;
    } else {
      para.textContent = `It's a tie. Nobody wins. \nComputer ${computerScore}, Player ${playerScore}`;
    }

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    showFinalScore();
    return;
  }
  removeListener();
}

function showFinalScore() {
  if (playerScore === 5) {
    para.innerText = `You have won! Final score:\nplayer: ${playerScore}, computer: ${computerScore}.`;
    return;
  }
  if (computerScore === 5) {
    para.innerText = `Computer has won! Final score:\nplayer: ${playerScore}, computer: ${computerScore}.`;
    return;
  }
}

/* Restarting the game */
function restartGame() {
  console.log(playerScore, computerScore);

  playerScore = 0;
  computerScore = 0;
  console.log(playerScore, computerScore);

  para.innerText = "";

  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
  para.innerText = "Press the button below!"
}

let restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", restartGame);
console.log(restartBtn);
/* Restarting the game */