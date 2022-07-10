
//This function generates rock, paper, scissors from the computer side
function computerPlay(){
    //Generates random number between 0 to 2 and rounded down to an integer
    const randomNumber = Math.floor(Math.random()*3);
    let computerAnswer = "";
    switch (randomNumber){
        case 0:
            computerAnswer = "rock";
            break;
        case 1:
            computerAnswer = "scissors";
            break;
        case 2:
            computerAnswer = "paper";
            break;
    }
    return computerAnswer;

}


//This function generates