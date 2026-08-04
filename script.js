function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function capitalize(string) {
  return `${string.at(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
}

function getRoundWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  const div = document.querySelector("div");
  const result = document.querySelector("#result");
  const score = document.querySelector("#score");
  const roundWinner = getRoundWinner(humanChoice, computerChoice);

  if (roundWinner === "human") {
    result.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    humanScore++;
  } else if (roundWinner === "computer") {
    result.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    computerScore++;
  } else {
    result.textContent = "It's a tie!";
  }

  score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
  div.append(result, score);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

if (humanScore === computerScore) {
  console.log(`It's a tie! Game Over`);
} else if (humanScore > computerScore) {
  console.log(`You win! Game Over`);
} else {
  console.log(`You lose! Game Over`);
}
