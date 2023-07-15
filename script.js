function getComputerChoice() {
    //generate a random number between zero and two
    const randomNumber = Math.floor(Math.random() * 3);

    //make computer pick a random number for choice (0 = "rock", 1 = "paper", 2 = "scissors")
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const computerChoice = getComputerChoice();
console.log("computers choice", computerChoice);