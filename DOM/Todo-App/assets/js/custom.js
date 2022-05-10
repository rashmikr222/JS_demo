// query and single element
// const p = document.querySelector('p');
// console.log(p); //it will access the first paragraph element
// p.remove();//remove method is used to remove that element
// console.log(p.remove());

// query and all element

// const ps = document.querySelectorAll('p');
// ps.forEach(function(p){
//     console.log(p); //it will display all the p elements
//     p.remove();//removes all the p elements
// })

// REMOVE ALL P TAGS THAT HAVE "the" IN TEXT
const todos = document.querySelectorAll('p');
console.log(todos);
const remainTodo = todos.forEach(function (todo) {
    let isFind = todo.textContent.includes("the");
    if (isFind) {
        todo.remove();
    }
})
console.log(remainTodo);

// Add new element via dom
// we can add new element with 3 steps
// step 1 create element which we want to add
let newTodo = document.createElement('p');
// step 2 add the content to that element
newTodo.textContent = "going for a shopping";
// step 3 append the element to the page
document.querySelector('body').appendChild(newTodo);


// let render task from javascript insted of frontend
const tasks = [{
    text: "washing the clothes",
    completed: false
},
{
    text: "cleaning the utensiles",
    completed: true
},
{
    text: "walking for an hour",
    completed: false
},
{
    text: "Excercise for half an hour",
    completed: true
},
{
    text: "writing the notes",
    completed: false
}
]



let getTask = function (task) {
    // console.log(task,index);
    if (task.completed === false) {
        // console.log(task.text);
        // create new element

        let taskList = document.createElement('li');
        // to add class name to the element
        taskList.className = "list-unstyled";
        taskList.style.fontSize = "20px";
        // to display in webpage
        taskList.innerHTML = `${task.text} `;
        //  append the new element to the existing element
        document.querySelector('ul').appendChild(taskList);

    }

}
tasks.filter(getTask)

// or 

// another method of display data into screen
const pendingTask = tasks.filter(function(task){
    return task.completed === false
})

const pendingList = document.createElement("h2");
pendingList.textContent = `you have ${pendingTask.length} todo\'s left`;
document.querySelector('body').appendChild(pendingList);

// now traverse through and display task

tasks.forEach(function(task){
    const newlist = document.createElement('ul');
    newlist.className = "newTask";
    document.querySelector('h2').appendChild(newlist);
    const listItem = document.createElement('li');
    listItem.innerHTML = task.text;
    document.querySelector('.newTask').appendChild(listItem);
})