
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
    console.log (computerAnswer);

}

//This function takes in an answer from the player side - rock, papers or scissors
function playerSelection(){
    let validCheck = false;
    let playerInput;
    let playerFinalAnswer;
    //checks to see if the input is valid or not - if it completely fits rock, paper, scissors in type and value it passes, if not the loop repeats until the player inputs validly
    while (validCheck === false){
        playerInput = prompt("Please put rock, paper or scissors", "");
        playerFinalAnswer = playerInput.toLowerCase();
        if (playerFinalAnswer === "rock" || playerFinalAnswer === "scissors" ||playerFinalAnswer === "paper"){
            validCheck = true;
            return playerFinalAnswer;
        } else{
            alert("Invalid input. Please enter another answer again");
        }
    }
}


//This function calls computerPlay() and playerSelection() and returns an answer on whether computer or player wins
function playRound(computerAnswer, playerAnswer){
    let result = "";

    //nested switch statements to see if player win or lose against computer answer
    switch (playerAnswer){
        case 'rock':
            switch(computerAnswer){
                case 'rock':
                    result = 'draw';
                    break;
                case 'paper':
                    result = 'computer';
                    break;
                case 'scissors':
                    result = 'player';
                    break;
                    
            }
        case 'paper':
            switch(computerAnswer){
                case 'rock':
                    result = 'player';
                    break;
                case 'paper':
                    result = 'draw';
                    break;
                case 'scissors':
                    result = 'computer';
                    break;
            }

        case 'scissors':
            switch(computerAnswer){
                case 'rock':
                    result = 'computer';
                    break;
                case 'paper':
                    result = 'player';
                    break;
                case 'scissors':
                    result = 'draw';
                    break;
            }
    }

    return result;
}


//This function runs the code 5 times before exiting for the game. Calls on the playRound function to run the game 5 times.
function game(){
    let playerWins = 0;
    for (let i  = 0; i<5; i++){
        let playerSide = playerSelection();
        let computerSide = computerPlay();
        let result = playRound(computerSide, playerSide);
        let res =""
        let beatString;
        //switch statements check results and decide the correct string
        switch (result){
            case 'player':
                beatString = playerSide + " beats " + computerSide;
                res = "win";
                break;
               
            case 'computer':
                beatString = computerSide + " beats " + playerSide;
                res = "lose";
                break;
            case 'draw':
                beatString = "Nobody beats each other!"
                res= "draw";
                break;
        }

        let winningAlert = "You " + res + "! " + beatString;
        console.log (winningAlert)
    }
    console.log ("You beat computer " + playerWins + " times!");
    
}
