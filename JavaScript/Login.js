const loginForm = document.querySelector("#Login");
const loginInput = document.querySelector("#Login input");
const greeting = document.querySelector("#title");
const loginBar = document.querySelector("#bar");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const date = new Date();
const hours = date.getHours();

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginBar.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    GreetPaint(username);
}

function GreetPaint(username) {
    if (hours <= 10) greeting.innerText = `Good morning, ${username}.`;
    else if (hours <= 16) greeting.innerText = `Good afternoon, ${username}.`;
    else if (hours > 16) greeting.innerText = `Good evening, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginBar.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmit);
} else {
    GreetPaint(savedUsername);
}