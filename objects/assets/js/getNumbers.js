// program to print 1 to 100;

let numberList = [];
function getNumber() {
    for (var i = 1; i <= 100; i++) {
        console.log(i);
        let num = numberList.push(i);
        console.log("number", num);
        if ((num % 3 === 0) && (num % 5 === 0)) {
            document.write("<p>" + num, " FizzBuzz " + "</p>");
            continue;
        }
        if (num % 3 === 0) {
            document.write("<p>" + num, " Fizz " + "</p>");
            continue;
        }
        if (num % 5 === 0) {
            document.write("<p>" + num, " Buzz " + "</p>");
            continue;
        }
    
    }
}
getNumber();