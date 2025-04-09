console.log("Hello Rock Paper Scissors")

let getComputerChoice = function(){
    rnum=(Math.floor(Math.random()*100))
    //console.log(rnum)
    if (rnum<=33) {
        choice = "rock";
    }
    else if (rnum>33 && rnum<=66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}
//let computerSelection = getComputerChoice();

let getHumanChoice = function(){
    Hchoice = prompt("What will you play, rock, paper or scissors? ");
    Hchoice = Hchoice.toLowerCase();
    return Hchoice;
}
//let humanSelection = getHumanChoice();

//console.log("The human's choice is: ",humanSelection);
let humanScore = 0, computerScore = 0;
//console.log("Human Score:",humanScore,"Computer Score:",computerScore);

let playRound = function(humanChoice,computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1; console.log("You Win! Rock beats Scissors");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore += 1; console.log("You Lose! Paper beats Rock");
    } else if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("It's a Draw.");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1; console.log("You Win! Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore += 1; console.log("You Lose! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("It's a Draw.");
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("It's a Draw.");
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1; console.log("You Win! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore += 1; console.log("You Lose! Scissors beats Paper");
    }
};

let playGame = function(){
    gamesPlayed = 0;
    while (gamesPlayed!= 5) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection,computerSelection);
        console.log("Human Score:",humanScore,"Computer Score:",computerScore);
        gamesPlayed +=1;
    }
    console.log("GAME OVER!");
    console.log("FINAL; Human:",humanScore,"to computer:",computerScore);
}

playGame();
//playRound(humanSelection,computerSelection);
//console.log("Human Score:",humanScore,"Computer Score:",computerScore);