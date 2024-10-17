function rockPaperScissors(player1, player2) {
  
  // Define conditions of which weapons beat what
  const winConditions = {
    rock: ['scissors','lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (player1===player2) {
    return 'draw';

  } else if (winConditions[player1].includes(player2)) {
    // If player 2's choice is one of the weapons defeated by player 1's choice, player 1 wins
    return 'player1';

  } else {
    // Otherwise player 2 wins
    return 'player2';
  }
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}