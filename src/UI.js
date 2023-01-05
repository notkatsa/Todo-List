import { saveProjects } from './storage.js';
import './TodoList.js'
import { findTodo, rmTodo } from './TodoList.js';
function setupPage() {
    const addTodoBtn = document.getElementById("add-todo");
    const TaskPopup = document.getElementById("add-task-popup");
    // click on addTodo button -> show input
    addTodoBtn.addEventListener('click', () => {
        TaskPopup.classList.add("active");
    })
    // click on cancel -> hide input
    document.getElementById("button-cancel-task-popup").addEventListener('click', () => {
        TaskPopup.classList.remove("active");
    })

    // add project button event listener
    const addPrBtn = document.getElementById("project-add");
    const projectAddPopup = document.getElementById("add-project-popup");
    addPrBtn.addEventListener('click', () => {
        projectAddPopup.classList.add("active");
    })
    // cancel -> close input
    document.getElementById("button-cancel-project-popup").addEventListener('click', () => {
        projectAddPopup.classList.remove("active");
    })

};

function addProjectbutton(name) {
    const projects = document.getElementsByClassName("projects")[0];
    const elem = document.createElement('button');
    const code = name.replace(/\s/g, "-"); //regex g stands for global find all " ".
    elem.id = code;
    elem.classList.add(code);
    elem.innerHTML = name;
    projects.appendChild(elem);
    return elem;
    
}

function drawTodos(title, project) {
    const element = document.getElementById("todos");
    element.innerHTML = "";
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    element.appendChild(h3);
    for (var it = project.todoList.values(), val= null; val=it.next().value; ) {
        const div = document.createElement('div');
        div.innerText = val.getName();
        element.appendChild(div);
        const xbtn = document.createElement('button');
        xbtn.innerText = 'x';
        div.appendChild(xbtn);
        xbtn.addEventListener('click', () => {
            rmTodo(project, findTodo(project, xbtn.parentNode.innerText.replace(/\nx/, "")))
            drawTodos(title, project);
        })
    } 
}

export {setupPage, addProjectbutton, drawTodos};

