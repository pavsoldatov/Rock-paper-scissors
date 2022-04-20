let rock = { name: "rock", emoji: "👊", loosesTo: ["paper", "Spock"] };
let paper = { name: "paper", emoji: "🤚", loosesTo: ["scissors", "lizard"] };
let scissors = { name: "scissors", emoji: "✌️", loosesTo: ["rock", "Spock"] };
let spock = { name: "Spock", emoji: "🖖", loosesTo: ["paper", "lizard"] };
let lizard = { name: "lizard", emoji: "🦎", loosesTo: ["scissors", "rock"] };

// const entities = [rock, paper, scissors];
// console.log(entities[1].name)

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(
      `Player${playerSelection.emoji} vs Computer${computerSelection.emoji}, it's a tie, nobody wins`
    );
    return;
  }
  if (playerSelection.loosesTo.includes(computerSelection.name)) {
    console.log(
      `Player${playerSelection.emoji} vs Computer${computerSelection.emoji}, Player lost`
    );
  }
  if (!playerSelection.loosesTo.includes(computerSelection.name)) {
    console.log(
      `Player${playerSelection.emoji} vs Computer${computerSelection.emoji}, Computer lost`
    );
  }
}

game(lizard, rock);
