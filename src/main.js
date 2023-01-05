import { setupPage, addProjectbutton, drawTodos } from './UI.js'
import { createProject, createTodo,addTodoToProject,rmTodo } from './TodoList.js'
import {getProjects, saveProjects}from './storage.js'
// adds event listeners to all important buttons on loadup. Like
// + on todo list add, Today button add project etc.
setupPage();

let currentKey = "Today";
let projectsList = {};
if (getProjects() == null) {
     projectsList= {
        "Today": (new createProject("Today")), 
        "This Week": (createProject("This Week")), 
        "This Month": (createProject("This Month")),
    };
}
else projectsList = getProjects();
const projectButtons = document.getElementsByClassName("projects")[0].childNodes;
for (const key in projectsList) {
    const button = addProjectbutton(key);
    button.addEventListener('click', () => {
        currentKey = (key);
        drawTodos(currentKey, projectsList[currentKey]);
    })
}
// add event listeners to project buttons
// const projectButtons = document.getElementsByClassName("projects")[0].childNodes;
// for (let i = 0; i<projectButtons.length; i++) {
//     projectButtons[i].addEventListener('click', () => {
//         currentKey = (projectButtons[i].innerHTML);
//         drawTodos(currentKey, projectsList[currentKey]);
//     })
// }

document.getElementById("button-add-project-popup").addEventListener('click', () => {
    const ProjInput = document.getElementById('input-add-project-popup');
    let PrName = ProjInput.value;
    ProjInput.value = null;
    if (!(PrName in projectsList)) {
        projectsList[PrName] = createProject(PrName);
        saveProjects(projectsList);
    }
    const button = addProjectbutton(PrName);
    button.addEventListener('click', () => {
        currentKey = (button.innerHTML);
        drawTodos(currentKey, projectsList[currentKey]);
    })
    document.getElementById("add-project-popup").classList.remove("active");
})

// click on Add -> get from input and hide input
let value = '';
document.getElementById("button-add-task-popup").addEventListener('click', () => {
    const TaskInput = document.getElementById('input-add-task-popup');
    value = TaskInput.value;
    addTodoToProject(projectsList[currentKey], createTodo(value));
    saveProjects(projectsList);
    drawTodos(currentKey, projectsList[currentKey]);
    TaskInput.value = null;
    const TaskPopup = document.getElementById("add-task-popup");
    TaskPopup.classList.remove("active");
})