const vocab = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
  lizard: "lizard",
  spock: "Spock",
};

const rock = {
  name: vocab.rock,
  emoji: "👊",
  loosesTo: [vocab.paper, vocab.spock],
};
const paper = {
  name: vocab.paper,
  emoji: "🤚",
  loosesTo: [vocab.scissors, vocab.lizard],
};
const scissors = {
  name: vocab.scissors,
  emoji: "✌️",
  loosesTo: [vocab.rock, vocab.spock],
};
const lizard = {
  name: vocab.lizard,
  emoji: "🦎",
  loosesTo: [vocab.scissors, vocab.rock],
};
const spock = {
  name: vocab.spock,
  emoji: "🖖",
  loosesTo: [vocab.paper, vocab.lizard],
};

const entities = [rock, paper, scissors, lizard, spock];

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

/* Need to try to addEventListener on document so that it bubbles to all
elements that are not .btn, maybe it can solve the keydown/click issue. */

document.addEventListener("click", playRound);

document.addEventListener("keyup", playRoundKey)

function playRoundKey (e) {
  let btnWithKey = document.querySelector(`.btn[data-key="${e.key}"]`);
  if (!btnWithKey) return;
  console.log(btnWithKey);

  while (playerScore < 5 && computerScore < 5) {
    let playerSelectionName = btnWithKey.value;
    let playerSelectionEmoji = btnWithKey.dataset.emoji;

    let computerSelection = computerPlay(entities);
    let computerSelectionName = computerSelection.name;
    let computerSelectionEmoji = computerSelection.emoji;

    if (playerSelectionName === computerSelectionName) {
      para.innerText = `It's a tie. ${computerSelectionEmoji} vs ${playerSelectionEmoji}. Nobody wins. \n ${showCurrentScore()}`;
      return;
    }

    if (computerSelection.loosesTo.includes(playerSelectionName)) {
      ++playerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Player wins. \n${showCurrentScore()}`;
    }

    if (!computerSelection.loosesTo.includes(playerSelectionName)) {
      ++computerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Computer wins. \n${showCurrentScore()}`;
    }

    console.log(`Player: ${playerSelectionName}`);
    console.log(`Computer: ${computerSelectionName}`);

    showFinalScore(computerSelectionEmoji, playerSelectionEmoji);
    return;
  }
  removeListener();
};

/* Removing listener upon reaching 5 victories during playRound */
function removeListener() {
  document.removeEventListener("click", playRound);
  document.removeEventListener("keyup", playRoundKey);
}

/* Showing current and final score */
function showCurrentScore() {
  return `Computer: ${computerScore}, Player: ${playerScore}`;
}

function showFinalScore(computer, player) {
  if (playerScore === 5)
    para.innerText = `Computer${computer} vs Player${player}. You have won!\n Final score => ${showCurrentScore()}.`;
  if (computerScore === 5)
    para.innerText = `Computer${computer} vs Player${player}. Computer has won!\n Final score => ${showCurrentScore()}.`;
}

/* The game itself */
function playRound(e) {
  if (!e.target.closest(".btn")) return;
  console.log(e.target.closest(".btn"));

  while (playerScore < 5 && computerScore < 5) {
    let playerSelectionName = e.target.closest(".btn").value;
    let playerSelectionEmoji = e.target.closest(".btn").dataset.emoji;

    let computerSelection = computerPlay(entities);
    let computerSelectionName = computerSelection.name;
    let computerSelectionEmoji = computerSelection.emoji;

    if (playerSelectionName === computerSelectionName) {
      para.innerText = `It's a tie. ${computerSelectionEmoji} vs ${playerSelectionEmoji}. Nobody wins. \n ${showCurrentScore()}`;
      return;
    }

    if (computerSelection.loosesTo.includes(playerSelectionName)) {
      ++playerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Player wins. \n${showCurrentScore()}`;
    }

    if (!computerSelection.loosesTo.includes(playerSelectionName)) {
      ++computerScore;
      para.innerText = `Computer${computerSelectionEmoji} vs Player${playerSelectionEmoji}. Computer wins. \n${showCurrentScore()}`;
    }

    console.log(`Player: ${playerSelectionName}`);
    console.log(`Computer: ${computerSelectionName}`);

    showFinalScore(computerSelectionEmoji, playerSelectionEmoji);
    return;
  }
  removeListener();
}

/* Restarting the game */
let restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", restartGame);

function restartGame() {
  playerScore = 0;
  computerScore = 0;

  document.addEventListener("click", playRound);
  document.addEventListener("keyup", playRoundKey);

  para.innerText = "Press the button below!";
}
