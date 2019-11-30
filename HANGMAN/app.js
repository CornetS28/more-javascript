const guessEl = document.querySelector ('#guess');
const h2 = document.createElement ('h2');
const guessOutput = guessEl.appendChild (h2);
const h4 = document.createElement ('h4');
const remainingGuessesOutput = guessEl.appendChild (h4);
const game1 = new Hangman ('My Cat', 2);

guessOutput.textContent = game1.puzzle;
remainingGuessesOutput.textContent = game1.statusMessage;

window.addEventListener ('keypress', e => {
  if (game1.status === 'playing') {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    guessOutput.textContent = game1.puzzle;
    remainingGuessesOutput.textContent = game1.statusMessage;
  }
  return;
});

//callback function
getPuzzle('4', (error, puzzle) => {
  if (error) {
    console.log(`error: ${error}`)
  } else {
    console.log(puzzle)
  }
  
});

getCountry("US", (error, country) => {
  if (error) {
   console,log(error)
  } else {
    console.log(`Country Name: ${country.name}`)
  }
});






// const countryCode = 'HT';
// const countryRequest = new XMLHttpRequest ();

// countryRequest.addEventListener ('readystatechange', e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse (e.target.responseText);
//     const country = data.find (country => country.alpha2Code === countryCode);
//     console.log (country.name);
//     // const countryFilter = data.filter (country => country.currencies);
//     // console.log (countryFilter);
//   } else if (e.target.readyState === 4) {
//     console.log ('Unable to get the data');
//   }
// });

// countryRequest.open ('GET', 'http://restcountries.eu/rest/v2/all');
// countryRequest.send ();
