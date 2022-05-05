// define objects
// objects properties are of key value pairs
let myBook = {
title:"Think like a monk",
author:"Jay shetty",
noOfPages: 440
}

// object access
// we can access objects in 2 ways 
// using dot notation
// using brackets notation
// in objects name of the properties are strings so, while accessing 
// objects properties using brackets we have enclose properties names inside the quotes
console.log(myBook);
console.log("the book title",myBook.title);
console.log("the author of the", myBook.title, " is" , myBook["author"]);

let person = {
    firstName : "Rashmi",
    lastName : "K.R",
    address : "hebbal 2nd stage",
    city: "Shivamogga",
    country: "India"
}

console.log(` ${person.firstName} ${person.lastName} is from ${person.city} ` );


person.city = "Mysore";
console.log(` ${person.firstName} ${person.lastName} is from ${person.city} ` );

