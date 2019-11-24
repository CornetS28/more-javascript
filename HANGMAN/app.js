const guessEl = document.querySelector('#guess');
const h2 = document.createElement('h2');
const guessOutput = guessEl.appendChild(h2);
const h4 = document.createElement('h4');
const remainingGuessesOutput = guessEl.appendChild(h4);
const game1 = new Hangman('My Cat', 2);

guessOutput.textContent = game1.puzzle;
remainingGuessesOutput.textContent = game1.statusMessage;

window.addEventListener('keypress', function(e) {
  if (game1.status === 'playing') {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    guessOutput.textContent = game1.puzzle;
    remainingGuessesOutput.textContent = game1.statusMessage;
  }
  return;
});
