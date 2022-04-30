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

// Reminder to myself: maybe highlight a button selected by computer
// also, need to add a little delay for computer selection
function computerPlay(array) {
  let randomIndex = random(array.length);
  return array[randomIndex];
}

["click", "keyup"].forEach((evt) => document.addEventListener(evt, playRound));

/* Removing listener upon reaching 5 victories during playRound */
function removeListener() {
  ["click", "keyup"].forEach((evt) =>
    document.removeEventListener(evt, playRound)
  );
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

function timeout() {
  if (computerSelectionName == e.target.value) {
    e.target.classList.add("computerChoice");
  }
}

function playRound(e) {
  let playerSelection;
  let playerSelectionName;
  let playerSelectionEmoji;

  // Checking for keyboard or pointer event
  if (e instanceof KeyboardEvent) {
    let btnWithKey = document.querySelector(`.btn[data-key="${e.key}"]`);
    if (!btnWithKey) return;

    playerSelection = btnWithKey;
    playerSelectionName = btnWithKey.value;
    playerSelectionEmoji = btnWithKey.dataset.emoji;

    /* Adding animation for pressed buttons and removing it on transition end.*/
    btnWithKey.classList.add("pressed");
    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      this.classList.remove("pressed");
    }
    buttons.forEach((button) =>
      button.addEventListener("transitionend", removeTransition)
    );
  }

  if (e instanceof PointerEvent) {
    if (!e.target.closest(".btn")) return;
    playerSelection = e.target.closest(".btn");
    playerSelectionName = e.target.closest(".btn").value;
    playerSelectionEmoji = e.target.closest(".btn").dataset.emoji;
  }

  /* the game itself */
  while (playerScore < 5 && computerScore < 5) {
    let computerSelection = computerPlay(entities);
    let computerSelectionName = computerSelection.name;
    let computerSelectionEmoji = computerSelection.emoji;

    // Adding animation to display computerSelection
    buttons.forEach((button) => {
      if (playerSelectionName == computerSelectionName) {
        setTimeout(() => {
          playerSelection.classList.add("tieAnimation");
        }, "50");
        setTimeout(() => {
          playerSelection.classList.remove("tieAnimation");
        }, "650");
      }
      if (button.value == computerSelectionName) {
        setTimeout(() => {
          button.classList.add("computerChoice");
        }, "50");
        setTimeout(() => {
          button.classList.remove("computerChoice");
        }, "650");
      }
    });

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

  ["click", "keyup"].forEach((evt) =>
    document.addEventListener(evt, playRound)
  );

  para.innerText = "Press the button below!";
}
