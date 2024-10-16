function rockPaperScissors(player1, player2) {

  const winConditions = {
    rock: ['scissors','lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (player1===player2) {
    return 'draw'
  } else if () {

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