const choices = ['Rock', 'Paper', 'Scissors'];
        
function getComputerChoice () {
    let index = Math.floor(Math.random() * 3)
    return choices[index]   
}

function playRound (computerChoice, userChoice) {
    if (computerChoice === "Rock") {
        if (userChoice === "Paper") {
            return 1;
        } else if (userChoice === "Rock") {
            return 0;
        } else {
            return -1;
        }
    } else if (computerChoice === "Paper") {
        if (userChoice === "Scissors") {
            return 1;
        } else if (userChoice === "Paper") {
            return 0;
        } else {
            return -1;
        }
    } else {
        if (userChoice === "Rock") {
            return 1;
        } else if (userChoice === "Scissors") {
            return 0;
        } else {
            return -1;
        }
    }
}

function playGame () {
    let userChoice;
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            userChoice = button.getAttribute('id')
            console.log(userChoice);
        })
    });
    
    
    
    //let userChoice = prompt('What will you play?', '');
    let computerChoice = getComputerChoice()

    let result = playRound(computerChoice, userChoice);
    
    if (result === 1) {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}. You win!`)
    } else if (result === 0) {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}. It's a tie.`)
    } else {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}. You lose :(`)
    }

}

playGame();
