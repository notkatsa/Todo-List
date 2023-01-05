import { todo } from "./Todo";
import { project } from "./Projects";

function createProject(name) {
    let pr = new project(name);
    return pr;
}

function createTodo(name) {
    let td = new todo(name);
    return td;
}

function addTodoToProject(pr, td) {
    pr.addTodo(td);
}

function rmTodo(pr, td) {
    pr.removeTodo(td);
}

function findTodo(pr, tdn) {
    for (var it = pr.todoList.values(), val= null; val=it.next().value; ) {
        if (val.getName() == tdn) {
            return val;
        }
    }
}
export {createProject, createTodo,addTodoToProject,rmTodo, findTodo};