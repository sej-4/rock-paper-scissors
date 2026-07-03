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

function getHumanChoice() {
  return prompt("Enter rock, papers, or scissors:").toLowerCase();
}

function capitalize(string) {
  return `${string.at(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
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

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  console.log(`Human: ${humanScore} Computer: ${computerScore}`);
  if (humanScore === computerScore) {
    console.log(`It's a tie! Game Over`);
  } else if (humanScore > computerScore) {
    console.log(`You win! Game Over`);
  } else {
    console.log(`You lose! Game Over`);
  }
}
