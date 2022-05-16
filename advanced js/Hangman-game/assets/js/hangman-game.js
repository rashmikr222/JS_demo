//1. create a constructor function for the hangman game
//2. Setup two attributes.One for the word itself.Another for the number of guesses allowed.
// 3.Create two instances of it and print both to the console
 
function Hangman(word,numberOfGuess){
this.word = word;
this.numberOfGuess = numberOfGuess
}
const game1 = new Hangman("cat",1);
console.log("game1", game1);

const game2 = new Hangman("mysore",3);
console.log("game1",game2);