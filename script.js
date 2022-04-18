let rock = { name: "rock", emoji: "👊" };
let paper = { name: "paper", emoji: "🤚" };
let scissors = { name: "scissors", emoji: "✌️" };
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
    let playerSelectionEmoji = this.dataset.emoji

    let computerSelection = computerPlay(entities);
    let computerSelectionName = computerSelection.name;
    let computerSelectionEmoji = computerSelection.emoji;

    console.log(`plrselection ${playerSelectionName}, plremoji ${playerSelectionEmoji}`)

    // I need to refactor the strings, so that they refer to the object's name
    // and do not require hardcoding the string value (ie, rock)
    if (playerSelectionName === "rock" && computerSelectionName === "paper") {
      ++computerScore;
      para.innerText = `Computer${computerSelectionEmoji}  vs  Player${playerSelectionEmoji}. Paper beats rock. \nComputer: ${computerScore}, Player: ${playerScore}`;
    } else if (
      playerSelectionName === "rock" &&
      computerSelectionName === "scissors"
    ) {
      ++playerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Rock beats scissors. \nComputer: ${computerScore}, Player: ${playerScore}`;
    } else if (
      playerSelectionName === "paper" &&
      computerSelectionName === "rock"
    ) {
      ++playerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Paper beats rock. \nComputer: ${computerScore}, Player: ${playerScore}`;
    } else if (
      playerSelectionName === "paper" &&
      computerSelectionName === "scissors"
    ) {
      ++computerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Scissors beat paper. \nComputer: ${computerScore}, Player: ${playerScore}`;
    } else if (
      playerSelectionName === "scissors" &&
      computerSelectionName === "rock"
    ) {
      ++computerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Rock beats scissors. \nComputer: ${computerScore}, Player: ${playerScore}`;
    } else if (
      playerSelectionName === "scissors" &&
      computerSelectionName === "paper"
    ) {
      ++playerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Scissors beat paper. \n ${showCurrentScore()}`;
    } else {
      para.innerText = `It's a tie. ${computerSelectionEmoji} vs ${playerSelectionEmoji}. Nobody wins. \n ${showCurrentScore()}`;
    }

    console.log(`Player: ${playerSelectionName}`);
    console.log(`Computer: ${computerSelectionName}`);
    showFinalScore(computerSelectionEmoji, playerSelectionEmoji);
    return;
  }
  removeListener();
}

function showCurrentScore () {
  return `Computer: ${computerScore}, Player: ${playerScore}`
}

function showFinalScore(computer, player) {
  if (playerScore === 5) {
    para.innerText = `Computer${computer} vs Player${player}. You have won! Final score:\n${showCurrentScore()}.`;
    return;
  }
  if (computerScore === 5) {
    para.innerText = `Computer${computer} vs Player${player}. Computer has won! Final score:\n${showCurrentScore()}.`;
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
  para.innerText = "Press the button below!";
}

let restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", restartGame);
console.log(restartBtn);
