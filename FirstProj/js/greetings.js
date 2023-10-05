/*const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginlink = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLogSubmit(event)
{
    event.preventDefault();
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    paintGreetings(username,1);

    // greeting.innerText = `Hello ${username}`; // same as doing "Hello " + username
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username, decide)
{
    if(decide === 1)
        greeting.innerText = "Hello " + username;
    else if(decide === 2)
        greeting.innerText = `Welcome back ${username}`; // same as doing "Wel back + username"
    
        greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLogSubmit);
}
else
{
    paintGreetings(savedUsername,2);
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.innerText = `Welcome back ${savedUsername}`;
}

