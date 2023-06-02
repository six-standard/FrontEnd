/*To-Do 보고 배끼는게 좀 그래서 그냥 처음부터 다시 짰습니다
새벽에 손코딩하면서 암기한것들 + 노트북으로 코딩한것들 합쳐서 만든거에요*/

const todoform = document.querySelector(".todo-form");
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".todo-list");
const todo_list = [];

function savetodo() {
    localStorage.setItem("todos", JSON.stringify(todo_list));
}

function removetodo(event) { //강좌 없이 짠 코드이다 (todo 삭제버튼)
    const li = event.target.parentElement;
    const clickedtodo = (event.target.parentElement.id); //클릭한 버튼의 부모 태그의 id를 받아온다
    const todos = JSON.parse(localStorage.getItem("todos"));
    let i = 0;
    todos.forEach( e => { //로컬스토리지에서 가져온 각 값마다 반복한다
        if(e.key==clickedtodo) todos.splice(i, 1);
        i++;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    li.remove();
}

function addtodo(newtodo, id) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "🗑️";
    button.addEventListener("click", removetodo);
    li.innerText = newtodo;
    li.setAttribute("id", id); //삭제시 구별을 위한 id 추가
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
    todo_list.push( { //삭제시 구별을 위해 id값과 value값 넣어줌
        key: id,
        value: newtodo
    });
}

function stopsubmit(event) {
    event.preventDefault();
    const newtodo = todoinput.value;
    todoinput.value = "";
    const random = Math.round(Math.random() * 999999999999999) //랜덤 id 생성
    addtodo(newtodo, random); //값 추가 함수 불러오기
    savetodo(); //값 저장 함수 불러오기
}

todoform.addEventListener("submit", stopsubmit);

const todoLoad = JSON.parse(localStorage.getItem("todos"));
todoLoad.forEach( e => {
    addtodo(e.value, e.key);
});
