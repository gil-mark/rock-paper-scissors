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
        let computerChoice = getComputerChoice()
        computerChoiceOutput.innerText = computerChoice;
        let result = playRound(computerChoice, userChoice);

        if (result === 1) {
            resultOutput.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. You win!`;
            playerScore.innerText = +playerScore.innerText + 1
        } else if (result === 0) {
            resultOutput.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. It's a tie.`;
        } else {
            resultOutput.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. You lose :(`;
            computerScore.innerText = +computerScore.innerText + 1
        }

        if (+playerScore.innerText === 5) {
            let reset = confirm('You win!');
            if (reset === true || reset === undefined) {
                playerScore.innerText = 0;
                computerScore.innerText = 0;
            }
        } else if (+computerScore.innerText === 5) {
            let reset = confirm('Sorry, you lose :(');
            if (reset === true || reset === undefined) {
                playerScoreScore.innerText = 0;
                computerScore.innerText = 0;
            }
        }
}

let playerScore = document.querySelector('#playerScore');
console.log(playerScore)
let computerScore = document.querySelector('#computerScore');
console.log(computerScore)
let computerChoiceOutput = document.querySelector('#computerChoice');
let resultOutput = document.querySelector('#result');

let userChoice;
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        userChoice = button.getAttribute('id')
        playGame();
    })
});


