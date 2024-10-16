function rockPaperScissors(player1, player2) {
  if (player1===player2) {
    return 'draw'
  } else if ((player1 === 'paper' && player2 === 'rock') || (player1 === 'scissors' && player2 == 'paper') || (player1 === 'rock' && player2 === 'scissors')) {
    return 'player1'
  }
   
}






// Testing
console.log(rockPaperScissors('paper','rock'))


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}