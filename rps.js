function rockPaperScissors(player1, player2) {
  if (player1===player2) {
    return 'draw'
  } else if ((player1 === 'paper' && player2 === 'rock') || (player1 === 'scissors' && player2 == 'paper') || (player1 === 'rock' && player2 === 'scissors')) {
    return 'player1'
  } else if ((player1 === 'paper' && player2 === 'scissors') || (player1 === 'scissors' && player2 == 'rock') || (player1 === 'rock' && player2 === 'paper')) {
    return 'player2'
  }
   
}

// Testing

// Player 1 wins: paper-rock, scissors-paper, rock-scissors
// Player 2 wins: paper-scissors, scissors-rock, rock-paper

// const readline = require('readline-sync')
// const input1 = readline.question('Player 1: rock, paper, or scissors: ')
// const input2 = readline.question('Player 2: rock, paper, or scissors: ')
// console.log(rockPaperScissors(input1,input2))


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}