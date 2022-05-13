let todos = [];
let userInput = document.querySelector('#todoInput');
userInput.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target.elements.newTodo.value);
    let todo = e.target.elements.newTodo.value;
    if (e.target.elements.newTodo.value === "" || e.target.elements.newTodo.value === null) {

    } else {
        createTodo(e);
        todos.push(todo);
        for (let i = 0; i < todos.length; i++) {
            console.log(todos.length);
            let length = document.querySelector('#todoLength');
            length.innerHTML = todos.length;
        }
        console.log(todos);
    }
    e.target.elements.newTodo.value = '';
})

let createTodo = function (e) {
    let todoItem = document.createElement('li');
    todoItem.className = "todoItem";
    todoItem.innerHTML = e.target.elements.newTodo.value;
    document.querySelector('#todoList').appendChild(todoItem);
}

// filter
let renderFilter = function (e) {
    document.querySelector('#filter-input').addEventListener('input', function (e) {
        console.log(e.target.value);
        let temArr = []
        let filteredTodos = todos.filter(function (todo) {
            if (todo.toLowerCase().includes(e.target.value.toLowerCase())) {
                console.log("filter ");
                temArr.push(todo);
                document.querySelector('#todoList').innerHTML =temArr;
            } else {
                document.querySelector('#todoList').innerHTML = '';
            }
        })
        filteredTodos.forEach(function (todo) {
            const todoEle = document.createElement('li');
            todoEle.innerHTML = todo;
            console.log("todo", todo);
            document.querySelector('#filteredList').appendChild(todoEle);
        })
    })
}
renderFilter()

// storing data locally
localStorage.setItem('location','mysore')
console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');
localStorage.clear();

const user = {
    name:"rashmi",
    pincode:57002
}

const userJSON = JSON.stringify(user);
console.log("userJSon",userJSON);
localStorage.setItem('user',userJSON)