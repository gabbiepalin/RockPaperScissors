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
  let decision = decideWinner(playerchoice, computerChoice);
  
  console.log(decision);
}

function decideWinner(playerchoice, computerChoice) {
  // this function will decide if comp or player wins, loses, or draws
  // get player choice
  // get computer choice
  // decide who wins
  console.log(playerchoice + " " + computerChoice);
  console.log("Starting Decision");
  
  if(playerchoice == "mace") {
    if(computerChoice == "mace") return "draw";
    if(computerChoice == "bow") return "win";
    if(computerChoice == "wand") return "lose";
  } 
  if(playerchoice == "bow"){
    if(computerChoice == "mace") return "lose";
    if(computerChoice == "bow") return "draw";
    if(computerChoice == "wand") return "win";
  }
  if(playerchoice == "wand"){
    if(computerChoice == "mace") return "win";
    if(computerChoice == "bow") return "lose";
    if(computerChoice == "wand") return "draw";
  }
  return "Error";
}
//next step would be to put both the computer and player choice together to play one round of the game



