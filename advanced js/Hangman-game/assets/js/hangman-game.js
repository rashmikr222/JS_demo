//1. create a constructor function for the hangman game
//2. Setup two attributes.One for the word itself.Another for the number of guesses allowed.
// 3.Create two instances of it and print both to the console
 
// function Hangman(word,numberOfGuess){
// this.word = word;
// this.numberOfGuess = numberOfGuess
// }
// const game1 = new Hangman("cat",1);
// console.log("game1", game1);
// console.log(game1.word);

// const game2 = new Hangman("mysore",3);
// console.log("game1",game2);

// 1.set up the word instance of word instance property as an array of lowercase letters
// 2. set up another instance property to store guessed letters
// 3. create a method that gives the word puzzle back

// no guessed ? ***
// guessed "c" "b" & "t" ? -> c*t

// interactive code
// let userInput = document.querySelectorAll('input');
// userInput.forEach((input) =>{
//     input.addEventListener('keypress',function(e){
//         console.log(e.key);
//         const Hangman = function(word,noOfGuessesLeft){
//             this.word = word.toLowerCase().split('');
//             this.noOfGuessesLeft = noOfGuessesLeft;
//             this.guessedLetter = [e.key]
//         }

        
// Hangman.prototype.getPuzzle = function(){
//     let puzzle = '';
//     this.word.forEach((letter)=>{
//         if(this.guessedLetter.includes(letter) || letter === ' '){
//             puzzle = puzzle + letter;
//         } else {
//             puzzle = puzzle + '*'
//         }
//     })

//     return puzzle
// }
// const game1 = new Hangman("Cat")
// console.log(game1.word);
// console.log(game1.getPuzzle());
// const game2 = new Hangman("mysore");
// console.log(game2.getPuzzle());
//     })
// })

// hardCoded code
const Hangman = function(word,noOfGuessesLeft){
    this.word = word.toLowerCase().split('');
    this.noOfGuessesLeft = noOfGuessesLeft;
    this.guessedLetter = ["c"] ; //hardCode value
}


Hangman.prototype.getPuzzle = function(){
let puzzle = '';
this.word.forEach((letter)=>{
if(this.guessedLetter.includes(letter) || letter === ' '){
    puzzle = puzzle + letter;
} else {
    puzzle = puzzle + '*'
}
})

return puzzle
}
const game1 = new Hangman("Cat")
console.log(game1.word);
console.log(game1.getPuzzle());
