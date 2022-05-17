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
const Hangman = function (word, noOfGuessesLeft) {
    this.word = word.toLowerCase().split('');
    this.noOfGuessesLeft = noOfGuessesLeft;
    this.guessedLetter = [];
    this.status = "playing"
}

Hangman.prototype.calculateStatus = function(){
    // array method - every .This returns either true or false 
// this method tests whether all the elements in the array pass the test implemented by the provided function
// if the letter is present in the guessedLetter  then it will return true
let finished = this.word.every((letter)=>{
    return this.guessedLetter.includes(letter)
})
// or
// let unGuessedLetters = this.word.filter((letter)=>{
    // we are going to store the letters which are not been guessed so,we are using ! (not operator)
//     return !this.guessedLetter.includes(letter);
// }) 
// the game will be finished if the unGuessedLetters.length is equal to 0
// const finished = unGuessedLetters.length === 0;
// or
// we can also use forEach method
    // let finished = true;
// this.word.forEach((letter)=>
// {
//     if(this.guessedLetter.includes(letter)){

//     }else{
//         finished = false;
//     }
// }
// )


if(this.noOfGuessesLeft === 0){
    this.status = "failed";
}else if(finished){
    this.status = "finished"
} else{
    this.status = "playing"
}


}

Hangman.prototype.getStatusMessage = function(){
    if(this.status === "playing"){
        return `Guesses left : ${this.noOfGuessesLeft}`
    }
    else if(this.status === "failed"){
        return `Nice try! The word was "${this.word.join('')}"` //here join is used to convert arrays into string
    }else{
        return `Great work! you guessed the word`
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    this.word.forEach((letter) => {
        if (this.guessedLetter.includes(letter) || letter === ' ') {
            puzzle = puzzle + letter;
        } else {
            puzzle = puzzle + '_'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetter.includes(guess)
    const isBadGuess = !this.word.includes(guess)
// to remove negative values 
// if the status is not playing it will return and doesnt execute the below code 
    if(this.status !== "playing"){
        return
    }
    if (isUnique) {
        this.guessedLetter.push(guess);
    }
    if (isUnique && isBadGuess) {
        this.noOfGuessesLeft = this.noOfGuessesLeft - 1;
    }
    this.calculateStatus();
}



 