import './TodoList.js'
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

    // click on Add -> get from input and hide input
    let value = '';
    document.getElementById("button-add-task-popup").addEventListener('click', () => {
        const TaskInput = document.getElementById('input-add-task-popup');
        value = TaskInput.value;
        TaskInput.value = null;
        TaskPopup.classList.remove("active");
    })

    // add event listeners to project buttons
    const projectButtons = document.getElementsByClassName("projects")[0].childNodes;
    for (let i = 0; i<projectButtons.length; i++) {
        projectButtons[i].addEventListener('click', () => {
            console.log(projectButtons[i].innerHTML);
        })
    }

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

    document.getElementById("button-add-project-popup").addEventListener('click', () => {
        const ProjInput = document.getElementById('input-add-project-popup');
        let value = ProjInput.value;
        ProjInput.value = null;
        projectAddPopup.classList.remove("active");
    })
};

export default setupPage;

