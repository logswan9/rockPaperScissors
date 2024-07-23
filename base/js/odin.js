//const choice = prompt("Enter your choice");

var compChoice;
var choice;
var userScore = 0;
var compScore = 0;

const rockButton = document.getElementById('rockBtn');
const paperButton = document.getElementById('paperBtn');
const scissorsButton = document.getElementById('scissorsBtn');
const resetButton = document.getElementById('resetScore');


rockButton.addEventListener("click", function() {
    document.getElementById('userChoice').innerHTML = "You chose Rock!"
    compChoice = Math.floor(Math.random() * 3);
    choice = "r";
    checkWinner(choice, compChoice);
});

paperButton.addEventListener("click", function() {
    document.getElementById('userChoice').innerHTML = "You chose Paper!"
    compChoice = Math.floor(Math.random() * 3);
    choice = "p";
    checkWinner(choice, compChoice);
});

scissorsButton.addEventListener("click", function() {
    document.getElementById('userChoice').innerHTML = "You chose Scissors!"
    compChoice = Math.floor(Math.random() * 3);
    choice = "s";
    checkWinner(choice, compChoice);
});

resetButton.addEventListener("click", function() {
    userScore = 0;
    compScore = 0;
    document.getElementById('resetScore').style.display = 'none';
    document.getElementById('score').innerHTML = "You: " + userScore + " Comp: " + compScore;
});

//const choice = prompt("Enter your choice");
function checkWinner(choice, compChoice) {
    switch (compChoice) {
        case 0:
            compChoice = "Rock";
        break;
        case 1:
            compChoice = "Paper";
        break;
        case 2:
            
            compChoice = "Scissors";
        break;
        default:
            break;
    }
    
    
    
    
    

    if (choice == "r") {
        if (compChoice == 'Scissors') {
            document.getElementById('results').innerHTML = "Computer went with Scissors.\nYou Win!"
            userScore++;
        } else if (compChoice == 'Rock') {
            document.getElementById('results').innerHTML = "Computer went with Rock as well.\nYou tie!"
        } else {
            document.getElementById('results').innerHTML = "Computer went with Paper.\nYou lose :("
            compScore++;
        }
        document.getElementById('score').innerHTML = "You: " + userScore + " Comp: " + compScore;
    }
    if (choice == "p") {
        if (compChoice == 'Rock') {
            document.getElementById('results').innerHTML = "Computer went with Rock.\nYou Win!"
            userScore++;
        } else if (compChoice == 'Paper') {
            document.getElementById('results').innerHTML = "Computer went with Paper as well.\nYou tie!"
        } else {
            document.getElementById('results').innerHTML = "Computer went with Scissors.\nYou lose :("
            compScore++;
        }
        document.getElementById('score').innerHTML = "You: " + userScore + " Comp: " + compScore;
    }
    if (choice == "s") {
        if (compChoice == 'Paper') {
            document.getElementById('results').innerHTML = "Computer went with Paper.\nYou Win!"
            userScore++;
        } else if (compChoice == 'Scissors') {
            document.getElementById('results').innerHTML = "Computer went with Scissors as well.\nYou tie!"
        } else {
            document.getElementById('results').innerHTML = "Computer went with Rock.\nYou lose :("
            compScore++;
        }
        document.getElementById('score').innerHTML = "You: " + userScore + " Comp: " + compScore;
    }

    document.getElementById('resetScore').style.display = 'block';
    
}


