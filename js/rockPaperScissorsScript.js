
//runs the game function
game();

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


//This function takes in an answer from the player side - rock, papers or scissors
function playerSelection(){
    let validCheck = false;
    let playerInput;
    let playerFinalAnswer;
    //checks to see if the input is valid or not - if it completely fits rock, paper, scissors in type and value it passes, if not the loop repeats until the player inputs validly
    //lowercase all user inputs then checks to see if the finalAnswer is rock/scissors/paper --> valid; else --> continues prompting
    while (validCheck === false){
        playerInput = prompt("Please put rock, paper or scissors", "");
        playerFinalAnswer = playerInput.toLowerCase();
        if (playerFinalAnswer === "rock" || playerFinalAnswer === "scissors" ||playerFinalAnswer === "paper"){
            validCheck = true;
        } else{
            alert("Invalid input. Please enter another answer again");
        }
    }
    return playerFinalAnswer;
}





//This function calls computerPlay() and playerSelection() and returns an answer on whether computer or player wins
function playRound(computerAnswer, playerAnswer){
    let result = "";

    //nested switch statements to see if player win or lose against computer answer
    //Checks for computer answer first to see the computer chooses (rock/paper/scissors) then compare those cases to 
    //the playerInput to see who wins --> retruns results
    switch (computerAnswer){
        case 'rock':
            switch (playerAnswer){
                case 'rock':
                    result = "draw";
                    break;
                case 'paper':
                    result = "player";
                    break;
                case 'scissors':
                    result = "computer";
                    break;
            }
            break;
        case 'paper':
            switch (playerAnswer){
                case 'rock':
                    result = "computer";
                    break;
                case 'paper':
                    result = "draw";
                    break;
                case 'scissors':
                    result = "player";
                    break;
            }
            break;
        case 'scissors':
            switch (playerAnswer){
                case 'rock':
                    result = "player";
                    break;
                case 'paper':
                    result = "computer";
                    break;
                case 'scissors':
                    result = "draw";
                    break;
            }
            break;
    }

    return result;
}


//This function runs the code 5 times before exiting for the game. Calls on the playRound function to run the game 5 times.
function game(){
    let playerWins = 0;
    for (let i  = 0; i<5; i++){
        //Variable declaration
        let playerSide = playerSelection();
        let computerSide = computerPlay();
        let winLoseString ="";
        let beatString;

        //Calling in the functions
        let result = playRound(computerSide, playerSide);

        //Printing out the results I play and what the computer played
        console.log ("You played "+ playerSide);
        console.log ("Computer played " + computerSide);
      
        //switch statements check results and decide the correct string
        switch (result){
            case 'player':
                beatString = playerSide + " beats " + computerSide;
                winLoseString = "win";
                playerWins++;
                break;
               
            case 'computer':
                beatString = computerSide + " beats " + playerSide;
                winLoseString = "lose";
                break;
            case 'draw':
                beatString = "Nobody beats each other!"
                winLoseString= "draw";
                break;
        }

        let winningAlert = "You " + winLoseString + "! " + beatString;
        console.log (winningAlert)
    }
    console.log ("You beat computer " + playerWins + " out of 5 times!");
    
}
