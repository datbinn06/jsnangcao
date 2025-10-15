export class DataManager {
    constructor() {
        this.todos = this.loadTodos();
    }
    saveTodos() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    loadTodos() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        return todos;
    }
}