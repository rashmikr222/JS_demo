let tasks = [
    {
        title:"washing",
    },
    {
        title:"cleaning",
    },
    {
        title:"writing",
    },{
        title:"reading"
    },{
        title:"buying groceries",
    }
]
// // // we use for loop to access all the array elements
// // for (let count = 0; count < tasks.length; count++) {
// //     console.log(tasks[count]);
    
// // }
// // to add new tasks
// // create an object
// // let task = {
// //     title:"buying groceries",
// // }
// // using push method we can add new task into existing array
// // console.log(tasks.push(task));
// // console.log(tasks);

const deleteTask = function(task,taskTitle){
    const index = tasks.findIndex(function(task){
        return task.title.toLowerCase() === taskTitle.toLowerCase();
    })
    if(index > -1){
        tasks.splice(index,1);
    }
}
deleteTask(tasks,"cleaning");
console.log(tasks);

// define array of object
let movies =[
    {
        title:"ulidavaru kandanthe",
        cast: "rakshith"
    }
];

// access
// console.log(movies[0].cast);
// console.log(movies[0].title);

// for loop
// for(let count = 0 ;count < movies.length ; count++){
//     console.log(movies[count]);
// }


let movie = {
    title : "rajkumara",
    cast : "puneeth"
}
console.log(movies.push(movie));
console.log(movies[1]);
const addMovie = function(movieTitle,movieCast){
    let movie = {
       title: movieTitle,
       cast : movieCast
    }
    console.log(movies.push(movie));
}
console.log(addMovie("milana","puneeth"));

const deleteMovie = function (movie,movieTitle){
    const index = movies.findIndex(function(movie){
        return movie.title.toLowerCase() === movieTitle.toLowerCase()
    })
    if(index > -1){

        // movies.push({
        //     title:"diya",
        //     cast:"pruthvi amber"
        // })
        // console.log(index,movieTitle);
                // movies.pop();
    }
}
deleteMovie(movies,"rajkumara")
console.log(movies);

const updateMovie = function(movieTitle,movieCast){
    const index = movies.findIndex(function(movie){
        return ((movie.title.toLowerCase() === movieTitle.toLowerCase()) || (movie.title.toLowerCase() === movieTitle.toLowerCase()))
    })
    if(index> -1){
        let movie = {
            title:movieTitle,
            cast:movieCast
        }
        movies = movies.splice(index,1,movie)
        return movies;
    }

}
// console.log(updateMovie("ulidavaru kandanthe","rakshith shetty"));
// console.log(updateMovie("milana","puneeth rajkumar")); 
console.log(updateMovie("rajkumara","puneeth rajkumar")); 
// findIndex
let arrNumber = [1,2,20,25,34,5,76];

// let isAvailable = function(number){
// return number > 10;
// }
// let isLarger = arrNumber.findIndex(isAvailable);
// console.log((isLarger));

// FINDINDEX
// let isLarger = arrNumber.findIndex(
//     function(number){
// if( number > 10 ){
//     arrNumber =  arrNumber.push(10);
//     return arrNumber;  
// }

// });
// console.log((isLarger));
// console.log("my array",arrNumber);

// FIND
// let getElemet = arrNumber.find(function(number){
// if(number === 20){
//     return number;
// }
// });
// console.log(getElemet);

// Filter
let numbers = [1,2,3,4,5,6,7,8,9];
let even = numbers.filter(
    function(number){
        if(number % 2 ===0 ){
            return number;
        }
    }
)
console.log(even);

let words = ["rajeshwari","rashmi","rohan","rithik","bindu","cat","bat"]
let wordsFilter = words.filter(function(word){
    let subStr = word.slice(0,2);
    // slice returns the substring so we need to store in a variable
    // let subStr = word.includes("ra"); 
    //includes returns the boolean value true or false
    
    if(subStr === "ra"){
        return word
    }
})
console.log(wordsFilter);

let myString = "rashmi";
myString = myString.slice(0,1);
console.log("first letter",myString);

// MAP
let multiples = [1,2,3,4,5,6];
let result = multiples.map(function(number){
    return number * 2;
})
console.log(result);

let items = [
    {
        name:"milk",
        quantity:2
    },
    {
        name:"curd",
        quantity:3
    }
]
let carts = [];

let shoppingCart = items.map(function(item){

let GST = item.quantity + 10;
console.log(item.quantity);
console.log("with gst",GST);
    // carts = carts.push(item)
    // return carts
})
// console.log(shoppingCart);

