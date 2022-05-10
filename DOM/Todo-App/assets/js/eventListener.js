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
// eventListener -> it takes two arguments one is string and another one is function
// document.querySelector('button').addEventListener('click',function(e){
//     e.target.textContent = "The button was clicked";
// })

// document.querySelectorAll('button')[1].addEventListener('click',function(e){
//     e.target.textContent = "The todo deleted"
// })

// another way of accessing element from html

document.querySelector('#createButton').addEventListener('click', function (e) {
    console.log("create todo");
})

// to remove all the todo's
document.querySelector('#deleteButton').addEventListener('click', function (e) {
    // console.log("deleted todo");
    // here i'm accessing all the task based on class name
    let itemList = document.querySelectorAll(".taskList");
    console.log("list of the items", itemList);
    console.log("lenght of the list", itemList.length);
    //    here i'm traversing through element of the list and calling remove method on the list item
    itemList.forEach(function (item) {
        item.remove();
    })
})
// how to read user inputs

document.querySelector("#search-task").addEventListener('input', function (e) {
    let value = document.querySelector("#search-task").value;
    console.log(value);
})

let filters = {
    searchText: ""
}


// let renderFiltered = function (tasks, filters) {
//     const filteredTask = tasks.filter(function (task) {
//         return task.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     });

//     // following code is to clear an element 
//     document.querySelector('#task-display').innerHTML = ' ';
//     // console.log("rendered output",filteredTask);
//     filteredTask.forEach(function (task) {
//         const p = document.createElement('p');
//         p.textContent = task.text;
//         document.querySelector('#task-display').appendChild(p);
//     })
// }
// renderFiltered(tasks, filters)

// document.querySelector("#search-task").addEventListener('input', function (e) {
//     filters.searchText = e.target.value;
//     renderFiltered(tasks, filters)
// })


let renderedFilters = function (tasks,filters){
    const getFilters = tasks.filter(function(task){
        return task.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector("#task-display").innerHTML='';

    getFilters.forEach(function(task){
        const taskele = document.createElement('p');
        taskele.textContent = task.text;
        document.querySelector("#task-display").appendChild(taskele);
    })
}


document.querySelector('#search-task').addEventListener('input',function(e){
    filters.searchText = e.target.value;
    renderedFilters(tasks,filters)
})