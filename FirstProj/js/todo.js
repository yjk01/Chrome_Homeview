const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos";
let TODOs = [];

function handletodoSubmit(event)
{
    event.preventDefault();
    const TODOinput = todoInput.value;
    todoInput.value = "";

    const TODOobj =
    {
        id: Date.now(), text: TODOinput // give input an id by changing input to an object
    }

    TODOs.push(TODOobj); // add the input object to TODO array
    paintTODO(TODOobj);  // display the TODO on the screen
    saveTODO();            // save TODO to local storage
}

function saveTODO()
{
    localStorage.setItem(TODOS_KEY,JSON.stringify(TODOs));
}

function deleteTODO(event)
{
    const li = event.target.parentElement; // find the parent of button which is 'li' and delete it
    li.remove();

    TODOs = TODOs.filter((toDo) => toDo.id !== parseInt(li.id)); // delete element that has the same id as li.id

    saveTODO();
}

function paintTODO(TODOinput)
{
    const li = document.createElement("li");
    li.id = TODOinput.id;

    const span = document.createElement("span");
    span.innerText = TODOinput.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTODO);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit",handletodoSubmit);

savedTODO = localStorage.getItem(TODOS_KEY);

if(savedTODO !== null) // if there is already a todo in local storage, add new todo to TODOs array and display
{
    const parsedTodo = JSON.parse(savedTODO); // convert string from local storage into array because local storage doesnt store array
    TODOs = parsedTodo;
    parsedTodo.forEach(paintTODO); // for each item in the array, display it on the screen
}