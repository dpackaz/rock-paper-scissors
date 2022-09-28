// Wireframe
    // Basic HTML

// Results
    // Input Rock, beats scissors, loses to paper
    // Input Paper, beats rock, loses to paper
    // Input Scissors, beats paper, loses to rock
// Tracker
    // Track wins, losses, and ties

//Process
    //Prompt user to "Type R, S, or P"
        //If other entry, "not a valid entry"
        //Prompt again
        //If user clicks "Cancel" quit program
        //If user clicks "Send/Ok" move on
    //Generate a result
    //  Create a list of acceptable results.
    //  Generate a random integer representing the index of the result.
    //  Grab the result.
    //Send user to computer-generated answer
    //Send user to results tracker
        //Display wins, losses, ties
        //Prompt user:
            //Play again?
            //If yes, start again, if no exit program

function rockPaperScissors() {

    // Track wins, losses, and ties
    var wins = 0;
    var losses = 0;
    var ties = 0;

    do {
        //Prompt user to "Type R, S, or P"
        var userInput = prompt("Type R, S, or P: ").toLowerCase();
        var inputValid = userInput === 'r' || userInput === 's' || userInput === 'p';

        if (!inputValid) {
            alert("not a valid entry");
        }
    } while (!inputValid)

    // Generate a result

    //  Create a list of acceptable results.
    var validComputerResults = ["r", "s", "p"];

    //  Generate a random integer representing the index of the result.
    var max = validComputerResults.length - 1;
    var min = 0;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    //  Grab the result.
    var computerResult = validComputerResults[randomNumber];

    //Send user to computer-generated answer
    alert("The computer chose " + computerResult);

    console.log(computerResult);
    console.log(userInput);
    
    var result = "";
    if (userInput === 'r') {
        if (computerResult === 'r') {
            ties ++;
            result = "It's a tie!";
        }
        if (computerResult === 'p') {
            losses ++;
            result = "You lose!";
        }
        if (computerResult === 's') {
            wins ++;
            result = "You win!";
        }    
    }

    else if (userInput === 'p') {
        if (computerResult === 'p') {
            ties ++;
            result = "It's a tie!";
        }
        if (computerResult === 's') {
            losses ++;
            result = "You lose!";
        }
        if (computerResult === 'r') {
            wins ++;
            result = "You win!";
        }    
    }

    else if (userInput === 's') {
        if (computerResult === 's') {
            ties ++;
            result = "It's a tie!";
        }
        if (computerResult === 'r') {
            losses ++;
            result = "You lose!";
        }
        if (computerResult === 'p') {
            wins ++;
            result = "You win!";
        }    
    }

    alert (result + "\r\n Wins: " + wins + "\r\n Losses: " + losses + "\r\n Ties: " + ties);

    
}

rockPaperScissors();