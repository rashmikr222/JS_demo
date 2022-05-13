// In JavaScript, a constructor function is used to create objects. 
function Book (title,author,year){
this.title = title;
this.author = author;
this.year = year;
this.getSummary = function(){
    return `${this.title} has been written by ${this.author} in the
    year ${this.year}`
}
}

// To create an object from a constructor function, we use the new keyword.
const book1 = new Book("book one",'john',2020);
const book2 = new Book("book two",'jane',2013)
// access
console.log(book1);
console.log(book2);
console.log(book1.getSummary());