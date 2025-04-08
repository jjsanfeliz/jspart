console.log("Hello Rock Paper Scissors")

let getComputerChoice = function(){
    rnum=(Math.floor(Math.random()*100))
    console.log(rnum)
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
console.log(getComputerChoice())
