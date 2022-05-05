// let tasks = ["washing","cleaning","cooking"];
let tasks =[
    {
        title:"washing",
    },
    {
        title:"cleaning",
    }
    

];

let task = 
    {
        title:"cooking"
    }
tasks.push("push",task);
tasks.pop();
console.log(tasks);
// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3

let movies = [
    {
        title:"ulidavaru kandanthe",
        cast:"rakshith shetty"
    },
    {
        title:"rajkumara",
        cast:"puneeth"
    }
]
let movie = {
    title : "kirik party",
    cast : "rakshith shetty"
}
movies.push(movie)
console.log(movies);
let isMovies = function(movie){
    return movie.title === "rajkumara";
}
// let getMovie = movies.findIndex(isMovies)
// console.log(getMovie);
let getMovie = movies.find(isMovies);
console.log(getMovie);

let rakshithMovies = movies.filter(movie => movie.cast === "rakshith shetty");
console.log(rakshithMovies);