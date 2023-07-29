function getComputerChoice() {
  //generate a random number between zero and two
  const randomNumber = Math.floor(Math.random() * 3);

  //make computer pick a random number for choice (0 = "rock", 1 = "paper", 2 = "scissors")
  switch (randomNumber) {
    case 0:
      return "wand";
    case 1:
      return "bow";
    case 2:
      return "mace";
  }
}

function getPlayerChoice(choice) {
  //when person hits button call this function
  let playerchoice = choice;
  // console.log(choice)
  // console.log("pc " + playerchoice)
  const computerChoice = getComputerChoice();
  // console.log("computers choice", computerChoice);
  decideWinner(playerchoice, computerChoice);
}

function decideWinner(playerchoice, computerChoice) {
  // this function will decide if comp or player wins, loses, or draws
  // get player choice
  // get computer choice
  // decide who wins
  console.log(playerchoice + " " + computerChoice);
  console.log("Starting Decision");
}
//next step would be to put both the computer and player choice together to play one round of the game

