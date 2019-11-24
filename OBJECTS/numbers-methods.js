const makeGuess = (num) =>{
 let max = 5;
 let min = 1;

 return num === Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(makeGuess(3))
console.log(makeGuess(5))
console.log(makeGuess(2))