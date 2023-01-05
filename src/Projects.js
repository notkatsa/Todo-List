class project {
    constructor(name) {
        this.name = this.name;
        this.todoList = new Set();
    }
    getName(){return this.name}
    setName(name){this.name = name}
    addTodo(todo) {
        this.todoList.add(todo);
    }
    removeTodo(todo) {
        this.todoList.delete(todo);
    }
}
export {project};