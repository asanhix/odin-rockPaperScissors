function getComputerChoice() {
    
    return ["Rock","Paper","Scissors"][Math.round(Math.random()*2)]
}

let userChoice = prompt("Please select Rock, Paper, Scissors","Rock")
let computerChoice = getComputerChoice()

function playOneRound (c, u){
    
    computerChoice = c.toLowerCase()
    userChoice = u.toLowerCase()
    if(computerChoice == userChoice) {
        return console.log("It is a draw!")
    }
    
    if (computerChoice == "rock"){
        if (userChoice == "scissors"){
            return console.log("You lose rock beats scissors!")
        }
        if (userChoice == "paper") {
            return console.log("You win paper beats rock!")
        }
    }

    if (computerChoice == "paper"){
        if (userChoice == "rock"){
            return console.log("You lose paper beats rock!")
        }
        if (userChoice == "scissors"){
            return console.log("You win scissors beat rock!")
        }
    }

    if (computerChoice == "scissors"){
        if (userChoice == "paper") {
            return console.log("You lose scissors beat paper!")
        }

        if (userChoice == "rock") {
            return console.log("You win rock beats scissors!")
        }
    }
    
}

playOneRound(computerChoice,userChoice)