function rockPaperScissors(player1, player2) {
  
  // Dictionary containing weapons as keys and the weapons it beats as strings in an array
  const winConditions = {
    rock: ['scissors','lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (player1===player2) {
    // If player 1 and player 2's choices are the same, it is a draw
    return 'draw';

  } else if (winConditions[player1].includes(player2)) {
    // Otherwise if player 1's weapon (as a key in the dictionary/object) has player 2's weapon as a corresponding value, player 1 wins
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