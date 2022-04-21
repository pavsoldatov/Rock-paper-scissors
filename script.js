let rock = { name: "rock", emoji: "👊", loosesTo: ["paper", "Spock"] };
let paper = { name: "paper", emoji: "🤚", loosesTo: ["scissors", "lizard"] };
let scissors = { name: "scissors", emoji: "✌️", loosesTo: ["rock", "Spock"] };
const entities = [rock, paper, scissors];

let buttons = document.querySelectorAll(".btn");
let log = document.querySelector(".log");
let para = document.querySelector(".log > p");

let playerScore = 0;
let computerScore = 0;

/* utility functions */
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

/* Removing listener upon reaching 5 victories during playRound */
function removeListener() {
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });
}

/* The game itself */
function playRound() {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelectionName = this.value;
    let playerSelectionEmoji = this.dataset.emoji;

    let computerSelection = computerPlay(entities);
    let computerSelectionName = computerSelection.name;
    let computerSelectionEmoji = computerSelection.emoji;

    // I need to refactor the strings, so that they refer to the object's name
    // and do not require hardcoding the string value (ie, rock)
    if (playerSelectionName === computerSelectionName) {
      para.innerText = `It's a tie. ${computerSelectionEmoji} vs ${playerSelectionEmoji}. Nobody wins. \n ${showCurrentScore()}`;
      return;
    }

    if (computerSelection.loosesTo.includes(playerSelectionName)) {
      ++playerScore;
      para.innerText = `Computer${computerSelectionEmoji}  vs  Player${playerSelectionEmoji}. Player wins. \nComputer: ${computerScore}, Player: ${playerScore}`;
    }

    if (!computerSelection.loosesTo.includes(playerSelectionName)) {
      ++computerScore;
      para.innerText = `Computer${computerSelectionEmoji}  vs  Player${playerSelectionEmoji}. Computer wins. \nComputer: ${computerScore}, Player: ${playerScore}`;
    }

    console.log(`Player: ${playerSelectionName}`);
    console.log(`Computer: ${computerSelectionName}`);

    showFinalScore(computerSelectionEmoji, playerSelectionEmoji);
    return;
  }
  removeListener();
}

function showCurrentScore() {
  return `Computer: ${computerScore}, Player: ${playerScore}`;
}

function showFinalScore(computer, player) {
  if (playerScore === 5)
    para.innerText = `Computer${computer} vs Player${player}. You have won! Final score:\n${showCurrentScore()}.`;
  if (computerScore === 5)
    para.innerText = `Computer${computer} vs Player${player}. Computer has won! Final score:\n${showCurrentScore()}.`;
}

/* Restarting the game */
let restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", restartGame);

function restartGame() {
  console.log(playerScore, computerScore);

  playerScore = 0;
  computerScore = 0;
  console.log(playerScore, computerScore);

  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
  para.innerText = "Press the button below!";
}
