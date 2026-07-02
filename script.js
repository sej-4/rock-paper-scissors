let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter your choice of rock, papers, or scissors:");
}

function capitalize(string) {
  return `${string.at(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie! Play again");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(
      `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`,
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`,
    );
    computerScore++;
  }
}
