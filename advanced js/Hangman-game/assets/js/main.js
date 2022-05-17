// printing to the screen
const puzzleElement = document.querySelector('#puzzle');
const noOfGuess = document.querySelector('#guesses')
const game1 = new Hangman("Cat", 2);
puzzleElement.innerHTML = game1.getPuzzle();
noOfGuess.innerHTML = game1.getStatusMessage();
console.log(game1.status);
window.addEventListener('keypress', function (e) {
    // the below line gives the name and character code of the key pressed
    // console.log(e.key, "->", e.charCode);
    // since we need only the characters
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)

    puzzleElement.innerHTML = game1.getPuzzle();
    // console.log(game1.noOfGuessesLeft);
    noOfGuess.innerHTML = game1.getStatusMessage();
    console.log(game1.status);
})

