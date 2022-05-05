const names = ["Angela", "Ben", "Jenny", "michael", "chloe"];
const lengthOfList = names.length - 1;
function whosPaying() {

    /******Don't change the code above*******/

    //Write your code here.

    let indexValue = randomNumberGenerator();
    console.log("index value", indexValue);
    let buyerName = names[indexValue];
    console.log(buyerName, "is buying lunch today");

    /******Don't change the code below*******/
}
whosPaying();


function randomNumberGenerator() {
// here i'm storing array length inside a variable
    let numberList = lengthOfList;
    console.log(numberList);
    // generate a random number
    let randomNumber = Math.random();
    console.log(randomNumber);
    // multiply the random number with the number until which you want 
    // usually the random numbers are always generated between inclusive 0 to exclusive 1 ie. 0.99999.. 0 followed by 16 digits 
    randomNumber = randomNumber * numberList;

    // to get the wholenumber use math.floor of the number which you want to
    // make whole and add 1 to it
    randomNumber = Math.floor(randomNumber) + 1;
    console.log(randomNumber);
    // here i'm returning random number
    return randomNumber;
}