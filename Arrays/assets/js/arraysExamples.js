console.log("hello world!");
let employees = ["balu", "asif", "suhel", "kiran"];
let firstChar = [];
let remainChar = [];
let fullName= [];
 
let firstChars = employees.map(getFirstCharacter);
let remainChars =  employees.map(getRemainCharacter);
console.log(employees);

// fullName = firstChar + remainChar;


//  let fullName = firstChar + remainChar;
// console.log("full name", typeof(employees));
function getFirstCharacter(value, index) {
    firstChar = value;
    firstChar = firstChar.slice(0, 1)
    firstChar = firstChar.toUpperCase();
    console.log(firstChar);
    return firstChar;
}

function getRemainCharacter(value, index) {
    remainChar = value;
    remainChar = remainChar.slice(1, remainChar.length);
    remainChar = remainChar.toLowerCase();
    console.log(remainChar);
    return remainChar;
    
}
console.log(firstChars);
console.log(remainChars);
for(let i=0;i<employees.length;i++){
    fullName = firstChars[i] + remainChars[i]
    console.log("full name ", fullName);
    document.write( fullName )
}



