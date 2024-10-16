function rockPaperScissors(player1, player2) {
  if (player1===player2) {
    return 'draw'
  } else if ((player1 === 'rock' && player2 === 'scissors') || (player1 === 'rock' && player2 == 'lizard') || (player1 === 'paper' && player2 === 'rock') || (player1 === 'paper' && player2 === 'spock') || (player1 === 'scissors' && player2 === 'paper') || (player1 === 'scissors' && player2 === 'lizard') || (player1 === 'lizard' && player2 === 'spock') || (player1 === 'lizard' && player2 === 'paper') || (player1 === 'spock' && player2 === 'scissors') || (player1 === 'spock' && player2 === 'rock')) {
    return 'player1'
  } else if ((player1 === 'scissors' && player2 === 'rock') || (player1 === 'lizard' && player2 == 'rock') || (player1 === 'rock' && player2 === 'paper') || (player1 === 'spock' && player2 === 'paper') || (player1 === 'paper' && player2 === 'scissors') || (player1 === 'lizard' && player2 === 'scissors') || (player1 === 'spock' && player2 === 'lizard') || (player1 === 'paper' && player2 === 'lizard') || (player1 === 'scissors' && player2 === 'spock') || (player1 === 'rock' && player2 === 'spock')) {
    return 'player2'
  }
   
}

// Testing

// Player 1 wins: rock-scissors, rock-lizard, paper-rock, paper-spock, scissors-paper, scissors-lizard, lizard-spock, lizard-paper, spock-scissors, spock-rock
// Player 2 wins: scissors-rock, lizard-rock, rock-paper, spock-paper, paper-scissors, lizard-scissors, spock-lizard, paper-lizard, scissors-spock, rock-spock
// Draw:          both inputs are the same

// const readline = require('readline-sync')
// const input1 = readline.question('Player 1: rock, paper, or scissors: ')
// const input2 = readline.question('Player 2: rock, paper, or scissors: ')
// console.log(rockPaperScissors(input1,input2))


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}