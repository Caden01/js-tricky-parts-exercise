function guessingGame() {
  const number = Math.floor(Math.random() * 100)
  let gameOver = false
  let guesses = 0

  return function guess(num) {
    if (gameOver) {
      return "The game is over, you already won!"
    }
    guesses++
    if (num === number) {
      gameOver = true
      return `You win! You found ${number} in ${guesses} guesses.`
    }
    if (num < number) return `${num} is too low!`
    if (num > number) return `${num} is too high!`
  }
}

module.exports = { guessingGame };
