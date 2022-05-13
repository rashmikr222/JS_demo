const book = {
    title:'the book one',
    author:'john',
    year:2020,
    getSummary:function(){
        return `${this.title} has been written by ${this.author} in the
        year ${this.year}.`
    }

}
console.log(book.getSummary());