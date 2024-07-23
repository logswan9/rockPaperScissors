//const choice = prompt("Enter your choice");

var compChoice = Math.floor(Math.random() * 3);

const choice = prompt("Enter your choice");

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
        console.log("You Win!");
    } else if (compChoice == 'Rock') {
        console.log("You tie!");
    } else {
        console.log("You lose!");
    }
}
if (choice == "p") {
    if (compChoice == 'Rock') {
        console.log("You Win!");
    } else if (compChoice == 'Paper') {
        console.log("You tie!");
    } else {
        console.log("You lose!");
    }
}
if (choice == "s") {
    if (compChoice == 'Paper') {
        console.log("You Win!");
    } else if (compChoice == 'Scissors') {
        console.log("You tie!");
    } else {
        console.log("You lose!");
    }
}

console.log(compChoice);
