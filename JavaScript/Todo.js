const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const todos = [];
const TODOS_KEY = "todos";

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function removeToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    li.appendChild(span);
    const button = document.createElement("button");
    li.appendChild(button);
    button.addEventListener("click", removeToDo);
    button.innerText = "🗑️";
    toDoList.appendChild(li);
    todos.push(newTodo);
}

function StopSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
    saveToDo();
}

toDoForm.addEventListener("submit", StopSubmit);

const savedtodos = localStorage.getItem(TODOS_KEY);
if(savedtodos) {
    const parsedtodos = JSON.parse(savedtodos);
    parsedtodos.forEach(paintToDo);
}